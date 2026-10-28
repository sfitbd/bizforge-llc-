# BizForge LLC Website

Fresh React + TypeScript + Vite website scaffold for an IT / digital services business.

## Included
- Home, About, Services, Pricing / Quote, Contact
- Privacy, Terms, Refund & Cancellation pages
- Admin login UI with Supabase Auth wiring
- Cloudflare Pages/Vercel-friendly SPA redirect file
- Environment variable template

## Important before production
Replace all placeholders with verified BizForge LLC legal/business details. Do not claim payment-provider approval, certifications, security/compliance status, customer metrics, or legal registrations unless verified.

## Local run
```bash
npm install
npm run dev
```

## Supabase
1. Create a Supabase project.
2. Copy Project URL and anon/publishable key.
3. Create `.env` from `.env.example`.
4. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
5. Create the admin user in Supabase Auth.
6. Before real admin content management, add roles and Row Level Security. Never put the service-role key in client-side code.

## Cloudflare Pages deployment
- Connect the GitHub repository.
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Add environment variables in project settings.
- Add custom domain after deployment.

## Vercel deployment
- Import the GitHub repository.
- Framework: Vite
- Build command: `npm run build`
- Output: `dist`
- Add the same environment variables.

## Payment gateway readiness notes
A public website can support a payment-provider application, but approval depends on the provider's own onboarding and underwriting requirements. Before applying, publish accurate legal name, business address/contact information, service descriptions, pricing/quote process, privacy policy, terms, cancellation/refund policy, and a working domain/email. Ensure everything matches submitted LLC/payment account records.
