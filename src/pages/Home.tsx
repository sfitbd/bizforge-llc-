import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Home(){
  return <>
    <section className="hero">
      <div className="wrap heroGrid">
        <div className="heroCopy">
          <span className="pill">IT • SOFTWARE • AI • AUTOMATION</span>
          <h1>Technology built around your business.</h1>
          <p>BizForge LLC designs and delivers websites, custom software, AI automation, cloud deployments and ongoing technical support with clear scope and practical handoff.</p>
          <div className="actions">
            <Link className="btn primary" to="/contact">Request a Quote <span>→</span></Link>
            <Link className="btn ghost" to="/services">Explore Services</Link>
          </div>
          <div className="trustRow">
            <span>✓ Clear scope</span><span>✓ Milestone delivery</span><span>✓ Transparent starting prices</span>
          </div>
        </div>
        <div className="heroVisual">
          <div className="visualCard"><img src="/hero-tech.jpg" alt="Technology workspace" /></div>
          <div className="floatCard one"><strong>AI & Automation</strong><span>Practical workflow integration</span></div>
          <div className="floatCard two"><strong>Web & Software</strong><span>Business-focused delivery</span></div>
        </div>
      </div>
    </section>

    <section className="strip">
      <div className="wrap stripGrid">
        <div><strong>Web</strong><span>Responsive business platforms</span></div>
        <div><strong>Software</strong><span>Custom operational systems</span></div>
        <div><strong>AI</strong><span>Assistants & automation</span></div>
        <div><strong>Cloud</strong><span>Deployment & launch support</span></div>
      </div>
    </section>

    <section className="section wrap">
      <div className="sectionHead"><div><span className="kicker">SERVICES</span><h2>End-to-end digital delivery</h2></div><Link className="textLink" to="/services">View all services →</Link></div>
      <div className="serviceGrid">
        {services.slice(0,6).map(s=><article className="serviceCard" key={s.title}>
          <div className="serviceIcon">{s.icon}</div>
          <h3>{s.title}</h3><p>{s.description}</p>
          <div className="priceLine"><span>Starting from</span><strong>{s.starting}</strong></div>
        </article>)}
      </div>
    </section>

    <section className="section darkSection">
      <div className="wrap featureGrid">
        <div><span className="kicker light">DELIVERY MODEL</span><h2>Professional process without unnecessary complexity.</h2><p>Every engagement starts with requirements, defined deliverables, commercial terms and acceptance criteria. Final pricing depends on approved scope.</p><Link className="btn lightBtn" to="/contact">Start a project</Link></div>
        <div className="steps">
          {['Discovery & requirements','Proposal, scope & pricing','Design / implementation','Review & acceptance','Launch / handoff'].map((x,i)=><div className="step" key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}
        </div>
      </div>
    </section>

    <section className="section wrap">
      <div className="ctaBand">
        <div><span className="kicker">READY TO DISCUSS YOUR PROJECT?</span><h2>Tell us what you need. We’ll define the next practical step.</h2></div>
        <Link className="btn primary" to="/contact">Request a Quote →</Link>
      </div>
    </section>
  </>;
}
