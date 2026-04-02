import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../services/axiosInstance'
import { saveRole, saveToken } from '../services/AuthService'


const RegisterPage = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [role, setRole] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const navigate = useNavigate()


const handleRegister = async () => {
    setLoading(true)
    try{
        const response   = await axiosInstance.post('api/auth/register', {name,email,password,role})
        saveToken(response.data.token)
        saveRole(response.data.role)
        navigate('/dashboard')
    }catch (error){
        setError(error.response?.data?.message || 'Registeration Failed. Try again')
    }finally{
        setLoading(false)
    }
}
return (
  <div>
    <h2>Register</h2>
    <input 
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Name"
    />
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
    <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="ADMIN">Admin</option>
        <option value="STUDENT">Student</option>
    </select>
    {error && <p>{error}</p>}
    <button onClick={handleRegister} disabled={loading}>
      {loading ? 'Registering in...' : 'Register'}
    </button>
  </div>
)

}

export default RegisterPage;
