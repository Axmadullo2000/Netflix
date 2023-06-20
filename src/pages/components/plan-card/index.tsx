import React, {useContext} from 'react';
import Image from "next/image";

import {IPlanCardProps} from "@/pages/components/plan-card/plan-card.props";
import {AuthContext} from "@/context/auth.context";

function PlanCard({product}: IPlanCardProps) {
    const {user} = useContext(AuthContext)

    const onSubmitSubscription = async (priceId: string) => {
        const payload = {email: user?.email, priceId} as object

        try {
            const response = await fetch('/api/subscription', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            })

            const data = await response.json()

            window.open(data.subscription.url)

            console.log(data)

        }catch (error) {}
    }

    return (
        <div key={product.id} className={'shadow-2xl border-solid border-red-400 border-2 p-6 md:w-1/4 lg:2/3 mx-6 my-4 hover:scale-105 transition duration-800 cursor-pointer mb-8'}>
            <Image src={product.images[0]} width={400} height={400} alt={''} />
            <h2 className={'text-2xl mt-4 mb-4'}>{product.name}</h2>
            <p className={'uppercase mt-4'}>{(product.default_price.unit_amount / 100).toLocaleString('en-US', {style: 'currency', currency: 'USD'})} каждый месяц</p>
            <div className={'flex flex-col'}>
                {product.metadata.adv.split(", ").map(item => (
                    <div key={item} className={'flex items-center mt-4'}>
                        <p>{item}</p>
                        <Image src={'./check.svg'} alt={''} width={28} height={28} />
                    </div>
                ))}
            </div>
            <button onClick={() => onSubmitSubscription(product?.default_price?.id)} className={'px-2 py-3 w-full border-red-500 border-2 my-4 hover:text-slate-100 hover:bg-red-500 hover:border-white transition duration-400 ease-in'}>Купить</button>
        </div>
    );
}

export default PlanCard;

