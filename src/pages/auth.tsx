import Head from "next/head";
import AccountComponent from "@/pages/components/account";

const Auth = () => {
    return <>
        <Head>
            <title>Auth</title>
            <meta name="description" content="Auth" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <AccountComponent />
    </>
}

export default Auth
