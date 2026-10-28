# BizForge LLC — UI Pro Website

Production-style React + TypeScript + Vite website for BizForge LLC.

## Included
- Premium responsive homepage
- BizForge brand logo asset
- Service catalog with transparent starting prices
- Pricing, About, Contact, Privacy, Terms and Refund pages
- Supabase-powered inquiry form
- Supabase Auth admin login + inquiry dashboard
- Cloudflare Workers static-assets configuration
- SPA routing
- SQL setup for `inquiries`

## Cloudflare build
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

## Required environment variables
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Supabase setup
Run `supabase/setup.sql` in Supabase SQL Editor. Create the admin user in Supabase Authentication manually.

## Important business-data rule
Before payment-provider submission, replace/add only legal business address, phone, email, registration/jurisdiction and other claims that match verified company records. Do not publish invented certifications, approvals, revenue, client counts or security/compliance claims.

## Pricing
Published prices are marked as starting prices and are non-binding until scope and commercial terms are confirmed.
