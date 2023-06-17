import {createContext, ReactNode, useEffect, useMemo, useState} from "react";
import {onAuthStateChanged, User} from "firebase/auth";
import {useAuth} from "@/pages/hooks/useAuth";
import {auth} from "@/firebase";
import {useRouter} from "next/router";

interface IAuthContext {
    isLoading: boolean,
    user: User | null,
    error: string,
    signIn: (email: string, password: string) => Promise<void>,
    signUp: (email: string, password: string) => Promise<void>,
    logout: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({
    user: null,
    isLoading: false,
    error: '',
    signIn: async () => {},
    signUp: async () => {},
    logout: async () => {}
})

const AuthProvider = ({children}: {children: ReactNode}) => {
    const [initialLoader, setInitialLoader] = useState<boolean>(false)
    const { error, user, isLoading, signIn, signUp, logout, setUser, setIsLoading } = useAuth()
    const router = useRouter()

    const value = useMemo(() => ({
        error, user, isLoading, signIn, signUp, logout

    //     eslint-disable-next-line
    }), [error, user, isLoading])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoading(false)
                setUser(user)
            }else {
                setIsLoading(true)
                setUser(null)
                router.push('/auth')
            }
        })
    //     eslint-disable-next-line
    }, [])


    return <AuthContext.Provider value={value}>
        {!initialLoader && children}
    </AuthContext.Provider>
}

export default AuthProvider

