# BizForge LLC — Full Corporate v4

Complete React + TypeScript + Supabase + Cloudflare Workers corporate IT-company site.

## Included
- Corporate homepage and navigation
- 9 detailed IT service categories
- Service detail pages
- Solutions / industries
- Company / About
- Team (CMS-managed; empty until verified profiles are added)
- Reviews (CMS-managed; empty until real reviews are added)
- Capabilities / public experience records
- Pricing
- Contact and service-order forms
- Privacy, Terms, Refund & Cancellation
- Support page
- Floating Live Support chat
- Admin CMS for settings, services, pricing, team, reviews, experience, page content, inquiries and support replies
- OMS IT neutral implementation/support credit
- Cloudflare Workers static-assets config
- Supabase RLS and tokenized support RPCs

## Setup
1. Run `supabase/FULL_SETUP.sql` in Supabase SQL Editor.
2. Ensure Cloudflare environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Upload this package to GitHub repo root, replacing the prior site files.
4. Cloudflare build:
   - Build: `npm run build`
   - Deploy: `npx wrangler deploy`
5. Existing Supabase admin user can sign in at `/admin`.

## Evidence / claim policy
Do not publish invented team profiles, testimonials, client names, revenue, metrics, certifications, approvals, audits or outcomes.
