'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // In a real app, you'd fetch order details from your backend
      // For now, we'll just show a success message
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Confirming your order...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Order Confirmed! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your order! We&apos;ve received your payment and are preparing your delicious Italian meal.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-4">What&apos;s Next?</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="font-semibold text-gray-900">Confirmation Email</p>
                  <p className="text-sm text-gray-600">Check your email for order details and receipt</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">👨‍🍳</div>
                <div>
                  <p className="font-semibold text-gray-900">We&apos;re Cooking!</p>
                  <p className="text-sm text-gray-600">Your order is being prepared with care</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⏰</div>
                <div>
                  <p className="font-semibold text-gray-900">Ready Soon</p>
                  <p className="text-sm text-gray-600">Pickup: 20-30 minutes | Delivery: 45-60 minutes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t pt-6 mb-8">
            <p className="text-gray-600 mb-4">
              Questions about your order? Give us a call:
            </p>
            <a
              href="tel:9734675468"
              className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-semibold text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (973) 467-5468
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
            <Link
              href="/order"
              className="bg-white hover:bg-gray-50 text-red-700 border-2 border-red-700 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Order Again
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Session ID: {sessionId ? sessionId.substring(0, 20) + '...' : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}
