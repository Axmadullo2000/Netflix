import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import * as process from "process";

const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15'
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        const {token} = req.query

        const customers = await stripe.customers.list({
            limit: 3,
        });

        const customer = customers.data.find(item => item.metadata?.uid === token)

        const subscription = await stripe.subscriptions.list({
            limit: 100,
            customer: customer?.id
        })

        return res.status(200).json({subscription})
    }
}



interface Data {
    message?: string
    subscription?: Stripe.Response<Stripe.ApiList<Stripe.Subscription>>
}
