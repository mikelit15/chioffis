# Stripe Payment Integration Setup

This guide will help you set up Stripe payment processing for the Cioffi's online ordering system.

## 🚀 Quick Start

### 1. Create a Stripe Account

1. Go to [stripe.com](https://stripe.com)
2. Click "Sign up" and create your account
3. Complete the account verification process

### 2. Get Your API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Click on "Developers" in the left sidebar
3. Click on "API keys"
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`) - Safe to use in your frontend
   - **Secret key** (starts with `sk_test_...`) - Keep this secret! Never commit to git!

### 3. Add Keys to Your Project

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your Stripe keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   STRIPE_SECRET_KEY=sk_test_your_actual_key_here
   ```

3. **IMPORTANT**: Never commit `.env.local` to git! It's already in `.gitignore`.

### 4. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000/order`
3. Add items to cart and proceed to checkout
4. You'll be redirected to Stripe's secure checkout page

### 5. Use Test Cards

Stripe provides test card numbers for testing:

| Card Number | Description |
|-------------|-------------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0025 0000 3155` | Requires authentication (3D Secure) |
| `4000 0000 0000 9995` | Declined card |

- Use any future expiry date (e.g., `12/34`)
- Use any 3-digit CVV (e.g., `123`)
- Use any ZIP code (e.g., `12345`)

## 🌐 Deploy to Vercel

### Add Environment Variables to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `chioffis` project
3. Go to **Settings** → **Environment Variables**
4. Add both variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_test_...`
   - `STRIPE_SECRET_KEY` = `sk_test_...`
5. Click "Save"
6. Redeploy your project

## 🔴 Go Live (Production)

When you're ready to accept real payments:

1. **Complete Stripe Account Setup**
   - Add business details
   - Add bank account for payouts
   - Verify your identity

2. **Switch to Live Keys**
   - In Stripe Dashboard, toggle from "Test mode" to "Live mode"
   - Copy your **live** API keys (they start with `pk_live_...` and `sk_live_...`)
   - Update your environment variables in Vercel with the live keys

3. **Test Everything**
   - Make a small test purchase with a real card
   - Verify the payment appears in your Stripe Dashboard
   - Check that you receive the confirmation email

## 💰 Pricing

Stripe charges:
- **2.9% + $0.30** per successful transaction
- No monthly fees
- No setup fees

Example: For a $50 order, Stripe fee = $1.75

## 📧 Email Notifications (Optional Enhancement)

To send order confirmation emails, you can:

1. **Use Stripe's built-in emails** (already enabled)
   - Stripe automatically sends payment receipts
   - Configure in Stripe Dashboard → Settings → Emails

2. **Add custom emails** with services like:
   - [SendGrid](https://sendgrid.com)
   - [Resend](https://resend.com)
   - [AWS SES](https://aws.amazon.com/ses/)

## 🔒 Security

- ✅ Stripe handles all payment processing (PCI compliant)
- ✅ Card details never touch your server
- ✅ Secret keys are kept in environment variables
- ✅ HTTPS required in production (Vercel provides this automatically)

## 📱 Apple Pay & Google Pay

Stripe Checkout automatically enables Apple Pay and Google Pay when:
- User is on a supported device/browser
- Your domain is verified (automatic on Vercel)
- Payment methods are set up in user's device

No additional code needed! 🎉

## 🆘 Troubleshooting

### "Invalid API Key" Error
- Make sure you copied the full key (including `pk_test_` or `sk_test_`)
- Check for extra spaces or line breaks
- Restart your dev server after adding environment variables

### Checkout Not Working
- Check browser console for errors
- Verify both API keys are set correctly
- Make sure you're using test mode keys for development

### Payment Not Appearing in Dashboard
- Make sure you're in the correct mode (Test vs Live)
- Check the "Payments" tab in Stripe Dashboard
- Verify the webhook is configured (if using webhooks)

## 📚 Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Test Cards](https://stripe.com/docs/testing)
- [Stripe Dashboard](https://dashboard.stripe.com)

## 🎯 Next Steps

After setting up Stripe, you might want to:

1. **Add order management** - Store orders in a database
2. **Send custom emails** - Notify restaurant staff of new orders
3. **Add webhooks** - Listen for payment events
4. **Integrate with POS** - Connect to restaurant's point-of-sale system
5. **Add order tracking** - Let customers track their order status

---

**Need help?** Contact Stripe support or check their excellent documentation!

