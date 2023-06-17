import React, {useContext, useState} from 'react';
import Image from "next/image";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import InputElement from "@/pages/components/InputElement";
import {AuthContext} from "@/context/auth.context";

function AccountComponent() {
    const [auth, setAuth] = useState<'login' | 'signup'>('login')
    const { error, isLoading, user, signIn, signUp, logout } = useContext(AuthContext)

    const authToggle = (data: 'login' | 'signup') => {
        setAuth(data)
    }

    interface IData {
        email: string,
        password: string
    }

    const onSubmit = (data: IData) => {
        if (auth === 'signup') {
            signUp(data.email, data.password)
        }else {
            signIn(data.email, data.password)
        }
    }


    const validation = Yup.object({
        email: Yup.string().email('Введите корректную почту').required('Поле почты обязательно к заполнению!'),
        password: Yup.string().min(8, 'Введите больше 8 символов').required('Поле пароля обязательно к заполнению!')
    })

    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={validation}>
            <Form className={'md:min-w-[500px]'}>
                <div className={'bg-black/70 pt-2 pb-4 h-[400px] flex justify-center items-center flex-col' }>
                    <h1 className={'text-red-500 text-center font-semibold'}>{error && error}</h1>
                    <h2 className={'text-pink-400 text-2xl shadow_text'}>
                        {auth === 'login' ? 'Вход в Аккаунт' : 'Регистрация'}
                    </h2>
                    <Image src='/background.jpg' alt={'background'} fill className={'object-cover -z-10'}/>
                    <InputElement name={'email'} placeholder={'Почта'} />
                    <InputElement name={'password'} placeholder={'Пароль'} />
                    <button type={'submit'} className={'auth_btn'}>{auth === 'login' ? 'Войти' : 'Регистрироваться'}</button>
                    {auth === 'login' ? (
                        <button type={'button'} className={'auth_btn block mt-4'} onClick={() => authToggle('signup')}>Зарегистрироваться</button>
                    ) : <button type={'button'} className={'auth_btn block mt-4'} onClick={() => authToggle('login')}>Вход в аккаунт</button>}
                </div>
            </Form>
        </Formik>
    );
}

export default AccountComponent;
