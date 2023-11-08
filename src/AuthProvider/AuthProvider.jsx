import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import axios from "axios";



export const authContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const CreateAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const GooogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            const userCurrent = currentUser?.email || user?.email;
            const loggedUser = { email: userCurrent }
            if (currentUser) {
                axios.post('https://blog-zeta-seven-90.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            } else {
                axios.post('https://blog-zeta-seven-90.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => unSubscribe
    }, [])

    const authInfo = {
        user,
        loading,
        CreateAccount,
        Login,
        Logout,
        GooogleLogin

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;