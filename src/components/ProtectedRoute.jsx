import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../services/AuthService"

const ProtectedRoute = () => {
    const token = getToken();
    if(token){
        return <Outlet/>
    }
    return <Navigate to ="/login"/>
}
export default ProtectedRoute