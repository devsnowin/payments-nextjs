import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(404).json({ error: 'Method Not Allowed' });

  const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
    apiVersion: '2022-11-15',
  });
  const { priceId } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_options: {
      cashapp: {
        setup_future_usage: 'on_session',
      },
    },
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: 'http://localhost:3000/store/payment/success',
    cancel_url: 'http://localhost:3000/store/payment/cancel',
    mode: 'payment',
  });

  return res.status(200).json({ url: session.url });
}
