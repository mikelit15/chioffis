'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';

// Menu items data - Complete Cioffi's Menu
const menuCategories = [
  {
    name: 'Pizza',
    items: [
      { id: 1, name: '16" Tomato and Mozzarella Pizza', description: 'Classic pizza', price: 14.95, image: '🍕' },
      { id: 2, name: '16" Cioffi\'s Deli Special Pizza', description: 'Pepperoni, onions, mushrooms, peppers, sausage and meatballs', price: 22.00, image: '🍕' },
      { id: 3, name: '9" Personal Pizza', description: 'Tomato and mozzarella', price: 9.95, image: '🍕' },
      { id: 4, name: 'Seafood Pizza', description: 'Baby shrimp, anchovies, whole baby clams and garlic', price: 20.00, image: '🍕' },
      { id: 5, name: 'Giardiniere Pizza', description: 'Broccoli, eggplant, peppers and onions', price: 19.50, image: '🍕' },
      { id: 6, name: 'White Pizza', description: 'Mozzarella, ricotta and provolone', price: 16.50, image: '🍕' },
      { id: 7, name: 'Siciliana Crust Pizza', description: 'Extra thick crust', price: 20.00, image: '🍕' },
      { id: 8, name: 'Fra Diavolo Pizza', description: 'Hot peppers, mushrooms, eggplant and garlic (Spicy)', price: 19.50, image: '🍕' },
      { id: 9, name: 'Fresh Tomato Pizza', description: 'Crushed tomatoes, garlic and spices', price: 16.50, image: '🍕' },
      { id: 10, name: 'Napolitano Pizza', description: 'Artichoke hearts, imported ham and spices', price: 19.50, image: '🍕' },
      { id: 11, name: 'Home Style Margherita Pizza', description: 'Medium thick crust, plum tomatoes, basil and olive oil topped with mozzarella', price: 22.45, image: '🍕' },
      { id: 12, name: 'Chicken Parmigiana Pizza', description: 'Breaded chicken breast and tomatoes topped with mozzarella', price: 25.00, image: '🍕' },
    ]
  },
  {
    name: 'Pasta & Dinners',
    items: [
      { id: 100, name: 'Baked Ziti Dinner', description: 'Served with French bread', price: 11.75, image: '🍝' },
      { id: 101, name: 'Manicotti Dinner', description: 'Served with French bread', price: 12.00, image: '🍝' },
      { id: 102, name: 'Ravioli Dinner', description: 'Served with French bread', price: 12.50, image: '🍝' },
      { id: 103, name: 'Stuffed Shells Dinner', description: 'Served with French bread', price: 12.50, image: '🍝' },
      { id: 104, name: 'Pasta with Tomato Sauce', description: 'Served with French bread', price: 10.50, image: '🍝' },
      { id: 105, name: 'Pasta with Meatballs', description: 'Served with French bread', price: 12.00, image: '🍝' },
      { id: 106, name: 'Pasta with Sausage', description: 'Served with French bread', price: 12.50, image: '🍝' },
      { id: 107, name: 'Linguini with Clam Sauce', description: 'Served with French bread', price: 13.50, image: '🍝' },
      { id: 108, name: 'Cheese Tortellini', description: 'Served with French bread', price: 12.75, image: '🍝' },
      { id: 109, name: 'Rigatoni Alla Vodka', description: 'Served with French bread', price: 12.25, image: '🍝' },
      { id: 110, name: 'Broccoli and Cavatelli', description: 'Served with French bread', price: 12.75, image: '🍝' },
      { id: 111, name: 'Lasagna Alla Cioffi', description: 'Served with French bread', price: 12.95, image: '🍝' },
      { id: 112, name: 'Lobster Ravioli in Vodka Sauce', description: 'Served with French bread', price: 16.95, image: '🍝' },
      { id: 113, name: 'Papa Cioffi\'s Linguini Arrabbiata', description: 'Shrimp and clams in spicy marinara sauce', price: 18.95, image: '🍝' },
      { id: 114, name: 'Shrimp in Pesto Sauce over Linguini', description: 'Served with French bread', price: 17.95, image: '🍝' },
      { id: 115, name: 'Bowtie Pasta Bolognese', description: 'Served with French bread', price: 10.99, image: '🍝' },
      { id: 116, name: 'Mini Shell Pasta with Ground Sausage', description: 'Alfredo sauce, served with French bread', price: 11.95, image: '🍝' },
      { id: 117, name: 'Joey\'s Vodka Chicken', description: 'Chicken cutlet and fresh mozzarella in vodka sauce over pasta', price: 17.95, image: '🍝' },
      { id: 118, name: 'Jerry\'s White Baked Ziti', description: 'Ziti in Alfredo sauce with ricotta and mozzarella', price: 11.95, image: '🍝' },
    ]
  },
  {
    name: 'Entrees',
    items: [
      { id: 200, name: 'Chicken Parmigiana Dinner', description: 'Served with French bread', price: 14.25, image: '🍗' },
      { id: 201, name: 'Veal Parmigiana Dinner', description: 'Served with French bread', price: 15.00, image: '🥩' },
      { id: 202, name: 'Eggplant Parm Dinner', description: 'Served with French bread', price: 13.95, image: '🍆' },
      { id: 203, name: 'Sausage and Peppers Dinner', description: 'Served with French bread', price: 13.95, image: '🌭' },
      { id: 204, name: 'Meatballs and Peppers Dinner', description: 'Served with French bread', price: 11.75, image: '🍝' },
      { id: 205, name: 'Chicken Marsala with Mushrooms', description: 'Served with French bread', price: 15.95, image: '🍗' },
      { id: 206, name: 'Veal Marsala with Mushrooms', description: 'Served with French bread', price: 16.95, image: '🥩' },
      { id: 207, name: 'Chicken Francese', description: 'Served with French bread', price: 15.95, image: '🍗' },
      { id: 208, name: 'Veal Francese', description: 'Served with French bread', price: 16.95, image: '🥩' },
      { id: 209, name: 'Shrimp Parmigiana', description: 'Served with French bread', price: 17.95, image: '🍤' },
      { id: 210, name: 'Broiled Filet of Sole', description: 'Served with French bread', price: 17.95, image: '🐟' },
      { id: 211, name: 'Shrimp over Linguini with Broccoli Rabe', description: 'Served with French bread', price: 17.95, image: '🍤' },
      { id: 212, name: 'Chicken Alla Cioffi', description: 'Served with French bread', price: 11.95, image: '🍗' },
      { id: 213, name: 'Veal Alla Marni', description: 'Portabello mushrooms, fresh mozzarella and spinach over angel hair pasta', price: 17.95, image: '🥩' },
      { id: 214, name: 'Chicken Savoy', description: 'Served with French bread', price: 14.95, image: '🍗' },
      { id: 215, name: 'Eggplant Rollatini', description: 'Served with French bread', price: 11.95, image: '🍆' },
      { id: 216, name: 'Roasted Lemon Chicken', description: '1/2 chicken with vegetables and potatoes', price: 12.95, image: '🍗' },
      { id: 217, name: 'Golden Fried Calamari', description: 'Served with French bread', price: 12.95, image: '🦑' },
      { id: 218, name: 'Mussels Dinner', description: 'Served with French bread', price: 13.00, image: '🦪' },
    ]
  },
  {
    name: 'Subs & Sandwiches',
    items: [
      { id: 300, name: 'Cioffi Hot Sub', description: 'Ham, genoa, provolone, and capicola', price: 7.50, image: '🥖' },
      { id: 301, name: 'Ham, Salami and Provolone Sub', description: '', price: 6.25, image: '🥖' },
      { id: 302, name: 'Ham, Provolone and Capicola Sub', description: '', price: 7.00, image: '🥖' },
      { id: 303, name: 'Roast Beef Sub', description: '', price: 7.50, image: '🥖' },
      { id: 304, name: 'Turkey Sub', description: '', price: 6.75, image: '🥖' },
      { id: 305, name: 'Tuna Fish Sub', description: '', price: 7.00, image: '🥖' },
      { id: 306, name: 'Meatball Parmigiana Sub', description: '', price: 6.50, image: '🥖' },
      { id: 307, name: 'Sausage and Peppers Sub', description: '', price: 7.00, image: '🥖' },
      { id: 308, name: 'Eggplant Parmigiana Sub', description: '', price: 7.25, image: '🥖' },
      { id: 309, name: 'Chicken Parmigiana Sub', description: '', price: 7.00, image: '🥖' },
      { id: 310, name: 'Veal Parmigiana Sub', description: '', price: 7.75, image: '🥖' },
      { id: 311, name: 'Cheesesteak Sub', description: 'Whole sub', price: 9.75, image: '🥖' },
      { id: 312, name: 'Cheesesteak Deluxe Sub', description: 'Mushrooms, peppers, onions and roasted peppers', price: 12.00, image: '🥖' },
      { id: 313, name: 'Grilled Chicken Sub', description: 'With lettuce and tomatoes', price: 7.00, image: '🥖' },
      { id: 314, name: 'Prosciutto and Provolone Sub', description: '', price: 7.25, image: '🥖' },
      { id: 315, name: 'Italian Hot Dog Sub', description: 'Whole sub', price: 9.00, image: '🥖' },
      { id: 316, name: 'Pappa Cioffi\'s Sandwich', description: 'Chicken cutlet, broccoli rabe, fresh mozzarella and extra virgin olive oil', price: 10.95, image: '🥖' },
      { id: 317, name: 'Grilled Chicken Panini', description: 'With roasted peppers and mozzarella', price: 9.50, image: '🥪' },
      { id: 318, name: 'Prosciutto Panini', description: 'With choice of cheese', price: 9.50, image: '🥪' },
      { id: 319, name: 'Turkey Panini', description: 'With choice of cheese, lettuce and tomatoes', price: 9.00, image: '🥪' },
    ]
  },
  {
    name: 'Salads',
    items: [
      { id: 400, name: 'Cioffi\'s Antipasto Salad', description: 'Served with Italian vinaigrette', price: 13.50, image: '🥗' },
      { id: 401, name: 'Regular Antipasto', description: 'Served with Italian vinaigrette', price: 10.25, image: '🥗' },
      { id: 402, name: 'Cioffi\'s Special Chef Salad', description: '', price: 10.00, image: '🥗' },
      { id: 403, name: 'Grilled Chicken Caesar Salad', description: '', price: 10.00, image: '🥗' },
      { id: 404, name: 'Grilled Shrimp Caesar Salad', description: '', price: 10.00, image: '🥗' },
      { id: 405, name: 'Caesar Salad', description: '', price: 7.25, image: '🥗' },
      { id: 406, name: 'Baby Spinach Salad', description: 'With grilled chicken and creamy balsamic vinaigrette', price: 10.00, image: '🥗' },
      { id: 407, name: 'Spring Salad', description: 'Grilled vegetables over baby greens with creamy balsamic vinaigrette', price: 12.50, image: '🥗' },
      { id: 408, name: 'Bellissima Salad', description: 'With virgin olive oil and balsamic vinaigrette', price: 8.00, image: '🥗' },
      { id: 409, name: 'Italian Salad', description: '', price: 6.25, image: '🥗' },
      { id: 410, name: 'Honey Angel Salad', description: '', price: 10.00, image: '🥗' },
    ]
  },
  {
    name: 'Appetizers & Sides',
    items: [
      { id: 500, name: 'Bruschetta', description: 'Served with garlic toast', price: 8.95, image: '🥖' },
      { id: 501, name: 'Mozzarella Sticks', description: 'Served with marinara sauce', price: 5.95, image: '🧀' },
      { id: 502, name: 'Buffalo Wings', description: 'Served with blue cheese and celery sticks', price: 6.99, image: '🍗' },
      { id: 503, name: 'Chicken Strips', description: 'Served with honey mustard', price: 7.95, image: '🍗' },
      { id: 504, name: 'Garlic Bread', description: '', price: 3.75, image: '🥖' },
      { id: 505, name: 'Garlic Bread with Cheese', description: '', price: 4.75, image: '🥖' },
      { id: 506, name: 'French Fries', description: '', price: 4.50, image: '🍟' },
      { id: 507, name: 'Grilled Veggie Platter', description: '', price: 7.95, image: '🥗' },
      { id: 508, name: 'Side of Roasted Potatoes', description: '', price: 6.95, image: '🥔' },
      { id: 509, name: 'Side of Broccoli, Oil and Garlic', description: '', price: 7.95, image: '🥦' },
      { id: 510, name: 'Josephine\'s Famous Calabrese Rice Balls', description: '', price: 4.50, image: '🍙' },
    ]
  },
  {
    name: 'Calzones & Wraps',
    items: [
      { id: 600, name: 'Small Calzone', description: '', price: 9.95, image: '🥟' },
      { id: 601, name: 'Large Calzone', description: '', price: 13.95, image: '🥟' },
      { id: 602, name: 'Sausage, Peppers and Onions Stromboli', description: '', price: 9.50, image: '🥟' },
      { id: 603, name: 'Pepperoni and Mozzarella Stromboli', description: '', price: 9.25, image: '🥟' },
      { id: 604, name: 'Vegetable Stromboli', description: '', price: 9.50, image: '🥟' },
      { id: 605, name: 'Grilled Chicken Caesar Wrap', description: '', price: 9.00, image: '🌯' },
      { id: 606, name: 'Tuna Wrap', description: '', price: 9.00, image: '🌯' },
      { id: 607, name: 'Grilled Shrimp Caesar Wrap', description: '', price: 10.00, image: '🌯' },
      { id: 608, name: 'Roasted Beef and Swiss Wrap', description: '', price: 9.25, image: '🌯' },
      { id: 609, name: 'Turkey and Provolone Wrap', description: '', price: 9.00, image: '🌯' },
      { id: 610, name: 'Grilled Portabella Wrap', description: 'With roasted peppers, baby greens, balsamic vinaigrette and fresh mozzarella', price: 9.50, image: '🌯' },
    ]
  },
  {
    name: 'Soup & Desserts',
    items: [
      { id: 700, name: 'Soup du Jour', description: 'Please call restaurant for today\'s soup', price: 4.75, image: '🍲' },
      { id: 701, name: 'Chicken Pastina Soup', description: '', price: 3.75, image: '🍲' },
      { id: 702, name: 'Pasta Fagioli Soup', description: '', price: 4.75, image: '🍲' },
      { id: 703, name: 'Cannoli', description: '', price: 3.95, image: '🍰' },
      { id: 704, name: 'Tiramisu', description: '', price: 4.50, image: '🍰' },
      { id: 705, name: 'Raspberry Cheesecake', description: '', price: 4.50, image: '🍰' },
      { id: 706, name: 'New York Cheesecake', description: '', price: 4.50, image: '🍰' },
    ]
  },
  {
    name: 'Beverages',
    items: [
      { id: 800, name: 'Canned Soda', description: '', price: 1.00, image: '🥤' },
      { id: 801, name: '2 Liter Soda', description: '', price: 2.75, image: '🥤' },
      { id: 802, name: '34 oz. Arizona Tea', description: '', price: 3.50, image: '🧃' },
      { id: 803, name: 'Gatorade', description: '', price: 1.95, image: '🥤' },
      { id: 804, name: 'Vitamin Water', description: '', price: 2.05, image: '🥤' },
      { id: 805, name: 'Bottled Water', description: '', price: 1.30, image: '💧' },
      { id: 806, name: 'Canned San Pellegrino', description: '', price: 2.50, image: '🥤' },
    ]
  },
];

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Checkout Form Component
function CheckoutForm({ total, onSuccess }: { total: number; onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order/success`,
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message || 'Payment failed');
        setIsProcessing(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Payment successful
        onSuccess();
        router.push('/order/success');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Stripe Payment Element */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Information</h3>
        <div className="p-4 border border-gray-300 rounded-lg bg-white">
          <PaymentElement />
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-red-700 hover:bg-red-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing Payment...
          </span>
        ) : (
          `Pay $${total.toFixed(2)}`
        )}
      </button>

      <div className="text-center text-sm text-gray-500">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Secure payment powered by Stripe
        </div>
        <p>Supports all major credit cards, Apple Pay, and Google Pay</p>
      </div>
    </form>
  );
}

export default function Order() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].name);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [showCheckout, setShowCheckout] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form state
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  // Pickup time state
  const [pickupTime, setPickupTime] = useState<'asap' | 'later'>('asap');
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  // Stripe state
  const [clientSecret, setClientSecret] = useState('');

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07; // 7% tax
  const deliveryFee = orderType === 'delivery' ? 4.99 : 0;
  const total = subtotal + tax + deliveryFee;

  // Handle opening checkout modal - just open it, don't create payment intent yet
  const handleOpenCheckout = () => {
    // Validate cart
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    if (orderType === 'delivery' && (!deliveryAddress.street || !deliveryAddress.city || !deliveryAddress.state || !deliveryAddress.zip)) {
      alert('Please fill in complete delivery address');
      return;
    }

    if (orderType === 'pickup' && pickupTime === 'later' && (!scheduledDate || !scheduledTime)) {
      alert('Please select pickup date and time');
      return;
    }

    setShowCheckout(true);
  };

  // Handle creating payment intent after contact info is filled
  const handleCreatePaymentIntent = async () => {
    // Validate form
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert('Please fill in all contact information');
      return;
    }

    setIsProcessing(true);

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
          customerInfo,
          orderType,
          deliveryAddress: orderType === 'delivery' ? deliveryAddress : null,
          pickupTime: orderType === 'pickup' ? {
            type: pickupTime,
            date: scheduledDate,
            time: scheduledTime,
          } : null,
        }),
      });

      const data = await response.json();

      if (data.error) {
        alert(`Payment Error: ${data.error}\n\nNote: If Stripe is not configured, payment processing will not work. Please add your Stripe API keys to continue.`);
        setIsProcessing(false);
        return;
      }

      setClientSecret(data.clientSecret);
      setIsProcessing(false);
    } catch (error: any) {
      console.error('Error creating payment intent:', error);
      alert('Failed to initialize payment. Please try again.\n\nIf this persists, Stripe may not be configured properly.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Order Online</h1>
          <p className="text-xl text-red-100">Fresh Italian cuisine made to order</p>
        </div>
      </div>

      {/* Order Type Selection */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setOrderType('pickup')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                orderType === 'pickup'
                  ? 'bg-red-700 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🏪 Pickup
            </button>
            <button
              onClick={() => setOrderType('delivery')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                orderType === 'delivery'
                  ? 'bg-red-700 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🚗 Delivery
            </button>
          </div>

          {/* Pickup Time Selection */}
          {orderType === 'pickup' && (
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">When would you like to pick up?</h3>
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => setPickupTime('asap')}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    pickupTime === 'asap'
                      ? 'bg-red-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  ⚡ ASAP (20-30 min)
                </button>
                <button
                  onClick={() => setPickupTime('later')}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    pickupTime === 'later'
                      ? 'bg-red-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  📅 Schedule for Later
                </button>
              </div>

              {pickupTime === 'later' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      value={scheduledTime}
                      onChange={(e) => setScheduledTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Delivery Address */}
          {orderType === 'delivery' && (
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Delivery Address</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  value={deliveryAddress.street}
                  onChange={(e) => setDeliveryAddress({ ...deliveryAddress, street: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={deliveryAddress.city}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, city: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={deliveryAddress.state}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, state: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    maxLength={2}
                    required
                  />
                  <input
                    type="text"
                    placeholder="ZIP"
                    value={deliveryAddress.zip}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, zip: e.target.value })}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Menu Section */}
            <div className="lg:col-span-2">
              {/* Category Tabs */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {menuCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === category.name
                        ? 'bg-red-700 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Menu Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuCategories
                  .find(cat => cat.name === selectedCategory)
                  ?.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-3xl">{item.image}</span>
                            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                          <p className="text-2xl font-bold text-red-700">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            {/* Cart Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Order</h2>

                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    {/* Cart Items */}
                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 pb-4 border-b">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-red-700 font-bold">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center font-bold"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-red-700 hover:bg-red-800 text-white rounded-full flex items-center justify-center font-bold"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            🗑️
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-2 mb-6 pt-4 border-t">
                      <div className="flex justify-between text-gray-700">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Tax (7%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      {orderType === 'delivery' && (
                        <div className="flex justify-between text-gray-700">
                          <span>Delivery Fee</span>
                          <span>${deliveryFee.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                      onClick={handleOpenCheckout}
                      className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Proceed to Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && cart.length > 0 && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full my-8 p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{clientSecret ? 'Complete Payment' : 'Checkout'}</h2>
              <button
                onClick={() => {
                  setShowCheckout(false);
                  setClientSecret('');
                }}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>

            {!clientSecret ? (
              <>
                {/* Contact Information Form */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Type:</span>
                      <span className="font-semibold">{orderType === 'pickup' ? '🏪 Pickup' : '🚗 Delivery'}</span>
                    </div>
                    {orderType === 'pickup' && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pickup Time:</span>
                        <span className="font-semibold">
                          {pickupTime === 'asap' ? 'ASAP (20-30 min)' : `${scheduledDate} at ${scheduledTime}`}
                        </span>
                      </div>
                    )}
                    {orderType === 'delivery' && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery To:</span>
                        <span className="font-semibold text-right">
                          {deliveryAddress.street}, {deliveryAddress.city}, {deliveryAddress.state} {deliveryAddress.zip}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Items in Order */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Items ({cart.length})</h3>
                  <div className="space-y-2 text-sm max-h-48 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-gray-700">
                        <span>{item.name} × {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t space-y-2">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax (7%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between text-gray-700">
                        <span>Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-2 border-t font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-red-700">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Proceed to Payment Button */}
                <button
                  onClick={handleCreatePaymentIntent}
                  disabled={isProcessing}
                  className="w-full bg-red-700 hover:bg-red-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Initializing Payment...
                    </span>
                  ) : (
                    `Proceed to Payment - $${total.toFixed(2)}`
                  )}
                </button>
              </>
            ) : (
              <>
                {/* Order Summary - Compact */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Contact:</span>
                      <span className="font-semibold">{customerInfo.name} • {customerInfo.phone}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-red-700">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Stripe Elements Payment Form */}
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm
                    total={total}
                    onSuccess={() => {
                      setCart([]);
                      setShowCheckout(false);
                      setClientSecret('');
                    }}
                  />
                </Elements>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
