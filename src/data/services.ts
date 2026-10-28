export type Service = {
  icon: string;
  title: string;
  description: string;
  starting: string;
  bullets: string[];
};

export const services: Service[] = [
  { icon:'◫', title:'Business Website', starting:'$199', description:'Modern, responsive websites for companies, professionals and service businesses.', bullets:['Responsive UI','Contact/quote flow','Basic SEO structure','Deployment setup'] },
  { icon:'⌘', title:'Custom Web Application', starting:'$1,499', description:'Custom dashboards, portals, workflow systems and internal business applications.', bullets:['Custom UX','Role-based flows','Database integration','API-ready architecture'] },
  { icon:'⚙', title:'AI & Automation', starting:'$699', description:'AI assistants, workflow automation, knowledge tools and API-driven business processes.', bullets:['AI/API integration','Automation workflows','RAG-ready patterns','Human review controls'] },
  { icon:'🛒', title:'E-commerce Solutions', starting:'$899', description:'Catalogs, online storefronts, order workflows and payment-integration-ready commerce systems.', bullets:['Product catalog','Cart/checkout UI','Order workflow','Payment gateway integration scope'] },
  { icon:'☁', title:'Cloud & Deployment', starting:'$149', description:'Application deployment, DNS/CDN configuration, environment setup and technical launch support.', bullets:['Cloud deployment','DNS & SSL','Environment variables','Release checklist'] },
  { icon:'🛠', title:'Care & Maintenance', starting:'$149/mo', description:'Ongoing technical maintenance, fixes, updates and operational support under agreed scope.', bullets:['Updates & fixes','Technical support','Monitoring guidance','Monthly work log'] },
  { icon:'◇', title:'API & Integration', starting:'$399', description:'Third-party API integration, business-system connectivity and data workflow implementation.', bullets:['REST/API integration','Webhook flows','Error handling','Integration documentation'] },
  { icon:'✦', title:'UI/UX & Digital Design', starting:'$199', description:'Modern product interfaces, landing pages, dashboards and business-focused digital design.', bullets:['UI system','Responsive design','Landing pages','Design handoff'] }
];
