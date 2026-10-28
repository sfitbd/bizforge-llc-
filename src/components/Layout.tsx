import { Link, NavLink, Outlet } from 'react-router-dom';

const navClass = ({isActive}:{isActive:boolean}) => isActive ? 'active' : '';

export default function Layout(){
  return <>
    <div className="utility"><div className="wrap utilityInner"><span>Technology services for modern businesses</span><span>Project-based • Remote delivery • Clear scope</span></div></div>
    <header className="top">
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="BizForge LLC home"><img src="/bizforge-logo.svg" alt="BizForge LLC" /></Link>
        <nav>
          <NavLink className={navClass} to="/">Home</NavLink>
          <NavLink className={navClass} to="/services">Services</NavLink>
          <NavLink className={navClass} to="/pricing">Pricing</NavLink>
          <NavLink className={navClass} to="/about">About</NavLink>
          <NavLink className={navClass} to="/contact">Contact</NavLink>
          <NavLink className="navCta" to="/contact">Get a Quote</NavLink>
        </nav>
      </div>
    </header>
    <main><Outlet/></main>
    <footer>
      <div className="wrap footerGrid">
        <div>
          <img className="footerLogo" src="/bizforge-logo.svg" alt="BizForge LLC" />
          <p>Web, software, AI automation, cloud deployment and ongoing IT support delivered under clear project scope.</p>
        </div>
        <div><strong>Company</strong><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/pricing">Pricing</Link><Link to="/contact">Contact</Link></div>
        <div><strong>Policies</strong><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link><Link to="/refund">Refund & Cancellation</Link></div>
        <div><strong>Portal</strong><Link to="/admin">Admin Login</Link><span className="footNote">Business details should match verified LLC/payment-provider records before submission.</span></div>
      </div>
      <div className="wrap footerBottom"><span>© {new Date().getFullYear()} BizForge LLC. All rights reserved.</span><span>Independent technology services business.</span></div>
    </footer>
  </>;
}
