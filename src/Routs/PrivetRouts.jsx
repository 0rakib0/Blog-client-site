import { useContext } from "react"
import { authContext } from "../AuthProvider/AuthProvider"
import ContentLoader from "react-content-loader"
import { Navigate } from "react-router-dom"

const PrivetRout = ({ children}) =>{
    const {user, loading} = useContext(authContext)
    if(loading){
        return <ContentLoader 
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
        <circle cx="20" cy="20" r="20" />
      </ContentLoader>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
}

export default PrivetRout