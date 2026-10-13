import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';import About from './components/About';import Employeecard from './components/Employeecard';import Statcard from './components/Statcard';import Header from './components/Header';import Footer from './components/Footer';import Addemployee from './components/Addemployee';import Viewemployee from './components/Viewemployee';import AuthPage from './components/AuthPage';import AdminDashboard from './components/AdminDashboard';import ProtectedRoute from './components/ProtectedRoute';import {AuthProvider} from './context/AuthContext';
export default function App(){return <BrowserRouter><AuthProvider><Header/><Routes>
<Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/emp" element={<Employeecard name="raj santra" email="raj@gmail.com"/>}/><Route path="/s" element={<Statcard/>}/>
<Route path="/login" element={<AuthPage/>}/><Route path="/register" element={<AuthPage/>}/>
<Route path="/dashboard" element={<ProtectedRoute admin><AdminDashboard/></ProtectedRoute>}/>
<Route path="/add" element={<ProtectedRoute admin><Addemployee/></ProtectedRoute>}/>
<Route path="/view" element={<ProtectedRoute><Viewemployee/></ProtectedRoute>}/>
<Route path="*" element={<Home/>}/></Routes><Footer/></AuthProvider></BrowserRouter>}
