// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import * as process from "process";

const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15'
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const {method} = req

    if (method === 'POST') {
        try {
            const {priceId, email} = req.body

            const customers = await stripe.customers.list({
                limit: 100,
            })

            const customer = customers.data.find(c => c.email === email)

            const public_domain = process.env.NEXT_PUBLIC_DOMAIN as string

            const subscription = await stripe.checkout.sessions.create({
                mode: 'subscription',
                payment_method_types: ['card'],
                line_items: [{
                    price: priceId,
                    quantity: 1
                }],
                customer: customer?.id,
                success_url: `${public_domain}/success`,
                cancel_url: `${public_domain}/cancel`
            })

            return res.status(200).json({subscription})
        }catch (error) {}

    }else {
        return res.status(400).json({message: 'Error'})
    }
}

interface Data {
    message?: string
    subscription?: Stripe.Response<Stripe.Checkout.Session>
}
