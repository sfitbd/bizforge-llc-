import { Link } from 'react-router-dom';
export default function About(){
  return <section className="pageHero"><div className="wrap aboutGrid">
    <div><span className="kicker">ABOUT</span><h1>BizForge LLC</h1><p className="lead">A technology services business focused on web development, custom software, AI integration, automation, deployment and ongoing technical support.</p>
      <p>Our operating model is straightforward: understand the requirement, define the scope, agree commercial terms, deliver against milestones, review the result and hand over documented work.</p>
      <Link className="btn primary" to="/contact">Discuss a project</Link>
    </div>
    <div className="infoPanel"><h2>Business information</h2>
      <p>Before payment-provider review, publish only details that exactly match verified company records.</p>
      <dl><div><dt>Legal business name</dt><dd>BizForge LLC</dd></div><div><dt>Business model</dt><dd>Technology services</dd></div><div><dt>Delivery model</dt><dd>Project-based and recurring support</dd></div><div><dt>Contact</dt><dd>Secure inquiry form</dd></div></dl>
    </div>
  </div></section>;
}
