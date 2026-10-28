import { Link } from 'react-router-dom';
import { services } from '../data/services';
export default function Services(){
  return <section className="pageHero">
    <div className="wrap">
      <span className="kicker">SERVICES</span><h1>IT & digital services built for real operations.</h1>
      <p className="lead">Choose a starting service or request a custom scope. Published prices are starting points, not binding quotes.</p>
      <div className="serviceGrid full">{services.map(s=><article className="serviceCard" key={s.title}>
        <div className="serviceIcon">{s.icon}</div><h2>{s.title}</h2><p>{s.description}</p>
        <ul>{s.bullets.map(b=><li key={b}>✓ {b}</li>)}</ul>
        <div className="priceLine"><span>Starting from</span><strong>{s.starting}</strong></div>
        <Link className="textLink" to="/contact">Request scope →</Link>
      </article>)}</div>
    </div>
  </section>;
}
