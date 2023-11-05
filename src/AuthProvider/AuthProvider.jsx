import { useConst } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import auth from "../firebase.config";


export const authContext = createContext(null)

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

    

    const authInfo = {
        user, 
        loading,
        CreateAccount,
        Login,
        Logout

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;