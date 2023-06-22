import Head from "next/head";
import AccountComponent from "@/pages/components/auth";
import Image from "next/image";
import {GetServerSideProps} from "next";

const Auth = () => {
    return <div className={'bg-black md:bg-transparent'}>
        <Head>
            <title>Auth</title>
            <meta name="description" content="Auth" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logo.svg" />
        </Head>
        <div className={'relative flex h-screen w-screen flex-col md:items-center md:justify-center'}>
            <Image src={'./logo.svg'} alt={''} width={70} height={70} />
            <AccountComponent />
        </div>

    </div>
}

export default Auth

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const token = req.cookies.token

    if (token) {
        return {
            redirect: {
                destination: '/', permanent: false
            }
        }
    }
    return {
        props: {}
    }
}

