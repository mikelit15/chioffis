import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe only if the secret key is available
const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-10-29.clover',
  });
};

export async function POST(req: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Payment processing is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const stripe = getStripe();
    const { items, orderType, customerInfo, deliveryAddress } = await req.json();

    // Calculate totals
    const subtotal = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.07; // 7% tax
    const deliveryFee = orderType === 'delivery' ? 4.99 : 0;
    const total = subtotal + tax + deliveryFee;

    // Create line items for Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: `Quantity: ${item.quantity}`,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Add tax as a line item
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Tax (7%)',
        },
        unit_amount: Math.round(tax * 100),
      },
      quantity: 1,
    });

    // Add delivery fee if applicable
    if (orderType === 'delivery') {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Delivery Fee',
          },
          unit_amount: Math.round(deliveryFee * 100),
        },
        quantity: 1,
      });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/order`,
      customer_email: customerInfo.email,
      metadata: {
        orderType,
        customerName: customerInfo.name,
        customerPhone: customerInfo.phone,
        deliveryAddress: orderType === 'delivery' ? JSON.stringify(deliveryAddress) : '',
      },
      // Enable Apple Pay and Google Pay
      payment_method_options: {
        card: {
          request_three_d_secure: 'automatic',
        },
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

