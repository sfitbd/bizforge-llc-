import { Link, NavLink, Outlet } from 'react-router-dom';
const navClass=({isActive}:{isActive:boolean})=>isActive?'active':'';
export default function Layout(){return <>
<div className="utility"><div className="wrap utilityInner"><span>Business technology • Project delivery • Ongoing support</span><span>Clear scope • Documented handoff • Remote delivery</span></div></div>
<header className="top"><div className="wrap nav">
<Link className="brand" to="/"><img src="/bizforge-logo.svg" alt="BizForge LLC"/></Link>
<nav><NavLink className={navClass} to="/">Home</NavLink><NavLink className={navClass} to="/services">Services</NavLink><NavLink className={navClass} to="/pricing">Pricing</NavLink><NavLink className={navClass} to="/about">Company</NavLink><NavLink className={navClass} to="/contact">Contact</NavLink><Link className="navCta" to="/order">Start a Service</Link></nav>
</div></header><main><Outlet/></main>
<footer><div className="wrap footerGrid">
<div><img className="footerLogo" src="/bizforge-logo.svg" alt="BizForge LLC"/><p>Corporate web, software, AI automation, cloud deployment and technical support under defined project scope.</p></div>
<div><strong>Solutions</strong><Link to="/services">All Services</Link><Link to="/pricing">Pricing</Link><Link to="/order">Start a Service</Link></div>
<div><strong>Company</strong><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/admin">Admin Login</Link></div>
<div><strong>Policies</strong><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/refund">Refund & Cancellation</Link></div>
</div><div className="wrap footerBottom"><span>© {new Date().getFullYear()} BizForge LLC.</span><span>Independent technology services business.</span></div></footer></>}
