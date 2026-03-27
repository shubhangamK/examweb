import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

  const LoginPage = () => <div>LoginPage</div>
  const RegisterPage = () => <div>RegisterPage</div>
  const DashboardPage =() => <div>DashboardPage</div>
  const ExamPage = () => <div>ExamPage</div>


function App() {  
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute/>}>
      <Route path= "/dashboard" element={<DashboardPage />} />
      <Route path="/exam/:id" element={<ExamPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
  
}
export default App