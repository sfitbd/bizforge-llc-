import { Link } from 'react-router-dom';

const plans = [
  {name:'Launch', price:'$199', tag:'Website starter', items:['Responsive business website','Up to 5 core pages','Contact / quote form','Basic on-page SEO structure','Deployment assistance']},
  {name:'Growth', price:'$499', tag:'Business website', featured:true, items:['Expanded business website','Up to 10 core pages','Service / pricing sections','Conversion-focused UI','Deployment & launch checklist']},
  {name:'Commerce', price:'$899', tag:'E-commerce starter', items:['Product catalog','Cart / checkout UI','Order workflow setup','Payment-gateway integration scope','Launch support']},
  {name:'Automation', price:'$699', tag:'AI / workflow starter', items:['Use-case discovery','One defined automation workflow','API / AI integration scope','Testing & handoff','Documentation']}
];

export default function Pricing(){
  return <section className="pageHero">
    <div className="wrap">
      <span className="kicker">PRICING</span><h1>Clear starting prices. Final scope before payment.</h1>
      <p className="lead">These are non-binding starting prices for common engagement types. Final quotation depends on requirements, integrations, timeline and acceptance criteria.</p>
      <div className="pricingGrid">{plans.map(p=><article className={'priceCard'+(p.featured?' featured':'')} key={p.name}>
        {p.featured&&<span className="popular">POPULAR START</span>}<span className="planTag">{p.tag}</span><h2>{p.name}</h2>
        <div className="bigPrice">{p.price}<small> starting</small></div>
        <ul>{p.items.map(i=><li key={i}>✓ {i}</li>)}</ul>
        <Link className={p.featured?'btn lightBtn':'btn primary'} to="/contact">Request exact quote</Link>
      </article>)}</div>
      <div className="pricingNote"><strong>Commercial note:</strong> No payment should be requested until scope, total price, delivery terms and payment method are confirmed in writing.</div>
    </div>
  </section>;
}
