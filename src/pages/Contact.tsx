import { FormEvent, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact(){
  const [status,setStatus]=useState('');
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setStatus('Sending…');
    const form = new FormData(e.currentTarget);
    const payload = {
      name:String(form.get('name')||''),
      email:String(form.get('email')||''),
      company:String(form.get('company')||''),
      service:String(form.get('service')||''),
      budget:String(form.get('budget')||''),
      message:String(form.get('message')||'')
    };
    if(!supabase){ setStatus('Contact service is not configured yet.'); return; }
    const {error}=await supabase.from('inquiries').insert(payload);
    if(error){ setStatus('Could not submit right now. Please try again after contact database setup.'); return; }
    setStatus('Thank you. Your inquiry was submitted.');
    e.currentTarget.reset();
  }
  return <section className="pageHero"><div className="wrap contactGrid">
    <div><span className="kicker">CONTACT</span><h1>Request a project quote.</h1><p className="lead">Share your requirement, expected timeline and project type. We’ll use this information to prepare the next scope discussion.</p>
      <div className="contactPoints"><div><strong>01</strong><span>Describe the requirement</span></div><div><strong>02</strong><span>Review scope & commercial terms</span></div><div><strong>03</strong><span>Approve before work/payment</span></div></div>
    </div>
    <form className="form panelForm" onSubmit={submit}>
      <div className="form2"><label>Name<input name="name" required/></label><label>Business email<input name="email" type="email" required/></label></div>
      <div className="form2"><label>Company<input name="company"/></label><label>Service<select name="service"><option>Business Website</option><option>Custom Software</option><option>AI & Automation</option><option>E-commerce</option><option>Cloud & Deployment</option><option>Maintenance</option><option>Other</option></select></label></div>
      <label>Approximate budget<select name="budget"><option>Not decided</option><option>Under $500</option><option>$500–$1,500</option><option>$1,500–$5,000</option><option>$5,000+</option></select></label>
      <label>Project details<textarea name="message" rows={6} required placeholder="What do you need built, integrated or improved?"/></label>
      <button className="btn primary" type="submit">Submit inquiry →</button>
      {status&&<p className="formStatus">{status}</p>}
      <small>Submitting this form does not create a contract or payment obligation.</small>
    </form>
  </div></section>;
}
