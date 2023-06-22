import React from 'react';

function MembershipPlan() {
    return (
        <div className={''}>
            <div className={'flex justify-between border-2 border-red-500 px-4 py-4'}>
                <div>
                    <p className={'text-slate-100 opacity-50'}>Membership & Billing</p>
                    <button>Cancel Membership</button>
                </div>
                <div>
                    <p>axmadullo2000@gmail.com</p>
                    <p>Password: ******</p>
                    <p>Your membership plan will end 14 March 2023</p>
                </div>
                <div className={'flex flex-col'}>
                    <button className={'text-blue-800 hover:text-blue-500'}>Change email</button>
                    <button className={'text-blue-800 hover:text-blue-500'}>Change Password</button>
                    <button className={'text-blue-800 hover:text-blue-500'}>Manage payment info</button>
                    <button className={'text-blue-800 hover:text-blue-500'}>Add backup payment method</button>
                    <button className={'text-blue-800 hover:text-blue-500'}>Billing detail</button>
                    <button className={'text-blue-800 hover:text-blue-500'}>Change billing day</button>
                </div>
            </div>
        </div>
    );
}

export default MembershipPlan;
