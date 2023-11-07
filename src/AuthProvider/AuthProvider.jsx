import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";



export const authContext = createContext(null)
const provider = new GoogleAuthProvider();

const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const CreateAccount = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const GooogleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscribe
    },[])

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