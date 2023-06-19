import React from 'react';
import Image from "next/image";
import {IPlanCardProps} from "@/pages/components/plan-card/plan-card.props";

function PlanCard({product}: IPlanCardProps) {
    return (
        <div key={product.id} className={'shadow-2xl border-solid border-red-400 border-2 p-6  w-1/4 mx-6 my-4 hover:scale-105 transition duration-600 cursor-pointer mb-8'}>
            <Image src={product.images[0]} width={400} height={400} alt={''} />
            <h2 className={'text-2xl mt-4 mb-4'}>{product.name}</h2>
            <p className={'uppercase'}>{product.default_price.unit_amount/100} $ каждый месяц</p>
            {product.metadata.adv.split(", ").map(item => (
                <div key={item} className={'flex items-center'}>
                    <p>{item}</p>
                    <Image src={'./check.svg'} alt={''} width={28} height={28} />
                </div>
            ))}
            <button className={'px-2 py-3 w-full border-red-500 border-2 my-4 hover:text-slate-100 hover:bg-red-500 hover:border-white transition duration-400 ease-in'}>Купить</button>
        </div>
    );
}

export default PlanCard;
