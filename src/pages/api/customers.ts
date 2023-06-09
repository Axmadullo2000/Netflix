// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
    const {method} = req
    const {email, token} = req.body
    if (method === 'POST') {
        try {
            const customer = await stripe.customers.create({
                email,
                metadata: {token}
            })

            return res.status(200).json({customer})
        }catch (error) {
            const err = error as Error
            return res.status(400).json({message: err.message})
        }
    }else {
        return res.status(400).json({message: 'Error'})
    }
}

interface Data {
    message?: string
    customer?: Stripe.Response<Stripe.Customer>
}
