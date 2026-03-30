import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../services/axiosInstance'
import { saveRole, saveToken } from '../services/AuthService'


const LoginPage = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const navigate = useNavigate()


const handleLogin = async () => {
    setLoading(true)
    try{
        const response   = await axiosInstance.post('api/auth/login', {email,password})
        saveToken(response.data.token)
        saveRole(response.data.role)
        navigate('/dashboard')
    }catch (error){
        setError(error.response?.data?.message || 'Login failed. Try again')
    }finally{
        setLoading(false)
    }
}
return (
  <div>
    <h2>Login</h2>
    <input 
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
    />
    <input 
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
    {error && <p>{error}</p>}
    <button onClick={handleLogin} disabled={loading}>
      {loading ? 'Logging in...' : 'Login'}
    </button>
  </div>
)

}

export default LoginPage;
