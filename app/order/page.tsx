'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';

// Menu items data
const menuCategories = [
  {
    name: 'Pizza',
    items: [
      { id: 1, name: 'Margherita Pizza', description: 'Fresh mozzarella, basil, tomato sauce', price: 14.99, image: '🍕' },
      { id: 2, name: 'Pepperoni Pizza', description: 'Classic pepperoni with mozzarella', price: 16.99, image: '🍕' },
      { id: 3, name: 'White Pizza', description: 'Ricotta, mozzarella, garlic, olive oil', price: 15.99, image: '🍕' },
      { id: 4, name: 'Meat Lovers Pizza', description: 'Pepperoni, sausage, meatballs, bacon', price: 18.99, image: '🍕' },
    ]
  },
  {
    name: 'Pasta',
    items: [
      { id: 5, name: 'Spaghetti Carbonara', description: 'Eggs, pancetta, parmesan, black pepper', price: 16.99, image: '🍝' },
      { id: 6, name: 'Fettuccine Alfredo', description: 'Creamy parmesan sauce', price: 15.99, image: '🍝' },
      { id: 7, name: 'Penne Arrabbiata', description: 'Spicy tomato sauce with garlic', price: 14.99, image: '🍝' },
      { id: 8, name: 'Lasagna', description: 'Layers of pasta, meat sauce, ricotta, mozzarella', price: 17.99, image: '🍝' },
    ]
  },
  {
    name: 'Entrees',
    items: [
      { id: 9, name: 'Chicken Parmigiana', description: 'Breaded chicken, marinara, mozzarella', price: 18.99, image: '🍗' },
      { id: 10, name: 'Veal Marsala', description: 'Veal with mushroom marsala wine sauce', price: 22.99, image: '🥩' },
      { id: 11, name: 'Eggplant Parmigiana', description: 'Breaded eggplant, marinara, mozzarella', price: 16.99, image: '🍆' },
      { id: 12, name: 'Shrimp Scampi', description: 'Shrimp in garlic butter white wine sauce', price: 21.99, image: '🍤' },
    ]
  },
  {
    name: 'Appetizers',
    items: [
      { id: 13, name: 'Bruschetta', description: 'Toasted bread with tomatoes, garlic, basil', price: 8.99, image: '🥖' },
      { id: 14, name: 'Mozzarella Sticks', description: 'Fried mozzarella with marinara sauce', price: 9.99, image: '🧀' },
      { id: 15, name: 'Calamari Fritti', description: 'Fried calamari with lemon and marinara', price: 12.99, image: '🦑' },
      { id: 16, name: 'Garlic Bread', description: 'Toasted bread with garlic butter', price: 6.99, image: '🥖' },
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

  // Handle opening checkout modal
  const handleOpenCheckout = async () => {
    // Validate cart
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    // Validate form
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert('Please fill in all contact information');
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

      const { clientSecret, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      setClientSecret(clientSecret);
      setShowCheckout(true);
    } catch (error: any) {
      console.error('Checkout error:', error);
      alert('Failed to initialize payment. Please try again.');
    } finally {
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

                    {/* Contact Information Form */}
                    <div className="mb-6 space-y-3">
                      <h3 className="font-bold text-gray-900">Contact Info</h3>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent text-sm"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent text-sm"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent text-sm"
                        required
                      />
                    </div>

                    {/* Checkout Button */}
                    <button
                      onClick={handleOpenCheckout}
                      disabled={isProcessing}
                      className="w-full bg-red-700 hover:bg-red-800 disabled:bg-gray-400 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {isProcessing ? 'Loading...' : 'Proceed to Checkout'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && cart.length > 0 && clientSecret && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full my-8 p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Complete Payment</h2>
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
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-gray-600">Contact:</span>
                  <span className="font-semibold">{customerInfo.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold">{customerInfo.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-semibold">{customerInfo.phone}</span>
                </div>
                <div className="flex justify-between pt-2 border-t font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-red-700">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Items in Order */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Items</h3>
              <div className="space-y-2 text-sm">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-700">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
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
          </div>
        </div>
      )}
    </div>
  );
}
