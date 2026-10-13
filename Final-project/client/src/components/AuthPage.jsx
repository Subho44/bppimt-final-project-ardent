import {useState} from 'react';
import {Link,useNavigate,useSearchParams} from 'react-router-dom';
import {api} from '../lib/api';import {useAuth} from '../context/AuthContext';
export default function AuthPage(){
 const [params]=useSearchParams(); const [mode,setMode]=useState(params.get('verify')?'verify':window.location.pathname==='/register'?'register':'login');
 const [form,setForm]=useState({name:'',email:params.get('verify')||'',password:'',otp:''});const [error,setError]=useState('');const [message,setMessage]=useState('');const [busy,setBusy]=useState(false);
 const {login}=useAuth();const navigate=useNavigate();
 const change=e=>setForm({...form,[e.target.name]:e.target.value});
 const submit=async e=>{e.preventDefault();setBusy(true);setError('');setMessage('');try{
  if(mode==='login'){const r=await login(form.email,form.password);navigate(r.user.role==='admin'?'/dashboard':'/view');}
  else if(mode==='register'){const r=await api.post('/api/auth/register',form);setMessage(r.data.message);setMode('verify');}
  else {const r=await api.post('/api/auth/verify',{email:form.email,otp:form.otp});setMessage(r.data.message);setMode('login');}
 }catch(e){setError(e.response?.data?.message||'Request failed. Check your connection.');if(e.response?.data?.needsVerification)setMode('verify');}finally{setBusy(false)}};
 const resend=async()=>{setError('');try{const r=await api.post('/api/auth/resend',{email:form.email});setMessage(r.data.message);}catch(e){setError(e.response?.data?.message||'Could not resend OTP');}};
 return <main className="auth-surface min-h-[80vh] flex items-center justify-center px-4 py-16"><div className="w-full max-w-md glass-panel p-8 md:p-10 animate-rise">
 <div className="text-center"><div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center text-3xl shadow-xl">🔐</div><p className="uppercase tracking-[.3em] text-cyan-300 text-xs font-bold">Secure workforce portal</p><h1 className="text-white text-3xl font-extrabold mt-3">{mode==='login'?'Welcome back':mode==='register'?'Create your account':'Verify your email'}</h1><p className="text-slate-300 mt-3">{mode==='login'?'Sign in to manage your workplace':mode==='register'?'New accounts are created with User access':'Enter the 6-digit code sent to your inbox'}</p></div>
 <form className="space-y-4 mt-8" onSubmit={submit}>{mode==='register'&&<label className="field-label">Full name<input required name="name" value={form.name} onChange={change} className="auth-input" placeholder="Your name" /></label>}
 <label className="field-label">Email address<input required type="email" name="email" value={form.email} onChange={change} className="auth-input" placeholder="you@example.com" /></label>
 {mode!=='verify'&&<label className="field-label">Password<input required minLength={mode==='register'?8:undefined} type="password" name="password" value={form.password} onChange={change} className="auth-input" placeholder="••••••••" /></label>}
 {mode==='verify'&&<label className="field-label">Email OTP<input required maxLength={6} pattern="[0-9]{6}" name="otp" value={form.otp} onChange={change} className="auth-input" placeholder="6-digit code" /></label>}
 {error&&<p role="alert" className="rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 p-3 text-sm">{error}</p>}{message&&<p role="status" className="rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 p-3 text-sm">{message}</p>}
 <button disabled={busy} className="primary-btn w-full">{busy?'Please wait...':mode==='login'?'Login →':mode==='register'?'Register & send OTP →':'Verify account →'}</button></form>
 <div className="mt-6 text-center text-sm text-slate-300">{mode!=='login'&&<button className="link-btn" onClick={()=>{setMode('login');setError('');setMessage('')}}>Back to login</button>}{mode==='login'&&<button className="link-btn" onClick={()=>{setMode('register');setError('');setMessage('')}}>Create a user account</button>}{mode==='verify'&&<> · <button className="link-btn" onClick={resend}>Resend OTP</button></>}</div>
 <p className="mt-6 text-xs text-center text-slate-400">Admin accounts are configured by the server administrator. <Link className="text-cyan-300" to="/">Home</Link></p>
 </div></main>;
}
