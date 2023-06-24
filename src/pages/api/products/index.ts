import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET')
    return res.status(404).json({ error: 'Method not allowed' });

  const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
    apiVersion: '2022-11-15',
  });

  const prices = await stripe.prices.list({
    limit: 4,
  });

  return res.status(200).json({ prices: prices.data.reverse() });
}
