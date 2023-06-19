import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {useAuth} from "@/pages/hooks/useAuth";
import {ISubscriptionProps} from "@/pages/components/subscription-plan/subscription-plan-props";
import PlanCard from "@/pages/components/plan-card";

function SubscriptionPlan({products}: ISubscriptionProps) {
    const {logout} = useAuth()

    return (
        <div>
            <div className={'flex justify-between px-4 py-3 shadow-red-600 shadow-xl border-b-red-200 border-b-2'}>
                <Link href={'/'}><Image src={'./logo.svg'} alt={'logo'} width={56} height={56} /></Link>
                <button onClick={logout} className={'px-2 py-2 hover:text-red-300'}>Logout</button>
            </div>

            <div className={''}>
                <h1 className={'text-3xl mt-8 mb-4 text-center'}>Выберите подходящий план</h1>
                <div className={'mb-10'}>
                    <div className={'flex justify-center text-justify items-center'}><Image src={'./check.svg'} alt={''} width={28} height={28} />Неограниченный просмотр. Без рекламы.</div>
                    <div className={'flex justify-center items-center'}><Image src={'./check.svg'} alt={''} width={28} height={28} />Персональные рекомендации.</div>
                    <div className={'flex justify-center items-center'}><Image src={'./check.svg'} alt={''} width={28} height={28} />Возможность перейти на другой план или отменить подписку в любое время.</div>
                </div>
            </div>

            <div className={'flex justify-center flex-wrap  md:flex-row flex-col'}>
                {products.map(product => (
                    <PlanCard key={product.id} product={product} />
                )).reverse()}
            </div>

        </div>
    );
}

export default SubscriptionPlan;

