'use client';

import { useState } from 'react';
import { Metadata } from 'next';

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

export default function Order() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].name);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card');

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
          <div className="flex justify-center gap-4">
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
                      onClick={() => setShowCheckout(true)}
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Checkout</h2>
              <button
                onClick={() => setShowCheckout(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl"
              >
                ×
              </button>
            </div>

            {/* Customer Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                />
              </div>
            </div>

            {/* Delivery Address (if delivery) */}
            {orderType === 'delivery' && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Address</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    paymentMethod === 'card'
                      ? 'border-red-700 bg-red-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-3xl mb-2">💳</div>
                  <div className="font-semibold text-sm">Credit Card</div>
                </button>
                <button
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    paymentMethod === 'apple'
                      ? 'border-red-700 bg-red-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-3xl mb-2">🍎</div>
                  <div className="font-semibold text-sm">Apple Pay</div>
                </button>
                <button
                  onClick={() => setPaymentMethod('google')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    paymentMethod === 'google'
                      ? 'border-red-700 bg-red-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-3xl mb-2">🔵</div>
                  <div className="font-semibold text-sm">Google Pay</div>
                </button>
              </div>

              {/* Card Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Apple Pay */}
              {paymentMethod === 'apple' && (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🍎</div>
                  <p className="text-gray-600">Click below to pay with Apple Pay</p>
                </div>
              )}

              {/* Google Pay */}
              {paymentMethod === 'google' && (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🔵</div>
                  <p className="text-gray-600">Click below to pay with Google Pay</p>
                </div>
              )}
            </div>

            {/* Order Summary in Checkout */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-700">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-gray-700">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t mt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={() => {
                alert(`Order placed! Total: $${total.toFixed(2)}\n\nThis is a demo. In production, this would process your payment and send your order to the restaurant.`);
                setShowCheckout(false);
                setCart([]);
              }}
              className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Place Order - ${total.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
