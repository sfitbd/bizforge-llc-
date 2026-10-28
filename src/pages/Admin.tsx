import { FormEvent, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type Inquiry={id:number;created_at:string;name:string;email:string;company:string;service:string;budget:string;message:string};

export default function Admin(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const [session,setSession]=useState<any>(null); const [rows,setRows]=useState<Inquiry[]>([]); const [message,setMessage]=useState('');
  useEffect(()=>{ if(!supabase) return; supabase.auth.getSession().then(({data})=>setSession(data.session)); const {data}=supabase.auth.onAuthStateChange((_e,s)=>setSession(s)); return()=>data.subscription.unsubscribe(); },[]);
  useEffect(()=>{ if(!supabase||!session) return; supabase.from('inquiries').select('*').order('created_at',{ascending:false}).then(({data,error})=>{if(error)setMessage(error.message); else setRows((data||[]) as Inquiry[])}); },[session]);
  async function login(e:FormEvent){e.preventDefault(); if(!supabase){setMessage('Supabase is not configured.');return;} const {error}=await supabase.auth.signInWithPassword({email,password}); if(error)setMessage(error.message);}
  if(!session) return <section className="pageHero"><div className="wrap narrow"><span className="kicker">ADMIN</span><h1>Secure admin login</h1><form className="form panelForm" onSubmit={login}><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label><button className="btn primary">Sign in</button>{message&&<p>{message}</p>}</form></div></section>;
  return <section className="pageHero"><div className="wrap"><div className="sectionHead"><div><span className="kicker">ADMIN</span><h1>Inquiry dashboard</h1></div><button className="btn" onClick={()=>supabase?.auth.signOut()}>Sign out</button></div>
    {message&&<div className="notice">{message}</div>}
    <div className="tableWrap"><table><thead><tr><th>Date</th><th>Name</th><th>Email</th><th>Service</th><th>Budget</th><th>Message</th></tr></thead><tbody>{rows.map(r=><tr key={r.id}><td>{new Date(r.created_at).toLocaleDateString()}</td><td>{r.name}<br/><small>{r.company}</small></td><td>{r.email}</td><td>{r.service}</td><td>{r.budget}</td><td>{r.message}</td></tr>)}</tbody></table></div>
  </div></section>;
}
