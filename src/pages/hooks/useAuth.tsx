import {User, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth} from "src/firebase";
import {useState} from "react"
import {useRouter} from "next/router";
import Cookies from 'js-cookie'

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()

    const signIn = async (email: string, password: string) => {
        setIsLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user)
                router.push('/')
                Cookies.set('token', res.user.uid)

            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    const signUp = async (email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setIsLoading(true)
                setUser(res.user)
                router.push('/')
                fetch('/api/customers/', {
                    method: 'POST',
                    headers: {'Content-type': "application/json"},
                    body: JSON.stringify({email: res.user.email, token: res.user.uid})
                })

                Cookies.set('token', res.user.uid)

            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    const logout = async () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser(null)
                router.push('/auth')
                Cookies.remove('token')
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    return {isLoading, error, user, signUp, signIn, logout, setIsLoading, setUser}
}

