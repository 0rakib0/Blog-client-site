import { useConst } from "@chakra-ui/react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import auth from "../firebase.config";


export const authContext = createContext(null)

const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const CreateAccount = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () =>{
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