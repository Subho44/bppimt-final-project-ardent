import {createContext,useContext,useEffect,useState} from 'react';
import {api} from '../lib/api';
const Context=createContext(null);
export const useAuth=()=>useContext(Context);
export function AuthProvider({children}){
 const [user,setUser]=useState(null); const [loading,setLoading]=useState(true);
 useEffect(()=>{if(!localStorage.getItem('hr_token')){setLoading(false);return;}
 api.get('/api/auth/me').then(r=>setUser(r.data.user)).catch(()=>localStorage.removeItem('hr_token')).finally(()=>setLoading(false));},[]);
 const login=async(email,password)=>{const {data}=await api.post('/api/auth/login',{email,password});localStorage.setItem('hr_token',data.token);setUser(data.user);return data;};
 const logout=()=>{localStorage.removeItem('hr_token');setUser(null);};
 return <Context.Provider value={{user,loading,login,logout}}>{children}</Context.Provider>;
}
