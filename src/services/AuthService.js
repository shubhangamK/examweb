import {jwtDecode} from "jwt-decode"
const saveToken = (token) => {
    localStorage.setItem('token',token)
}

const getToken = () =>{
   return localStorage.getItem('token')
}

const removeToken = () =>{
    localStorage.removeItem('token')
}

const getDecodeToken= () =>{
    const recentToken = getToken();
    return jwtDecode(recentToken);
}
const getRole = () => {
    return localStorage.getItem('role');
}
const saveRole = (role) => {
    localStorage.setItem('role' , role);
}
export{saveToken, getToken, removeToken , getDecodeToken, getRole, saveRole}