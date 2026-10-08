# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Supabase Setup

1. Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. Restart the Vite server after changing environment variables.
2. In the Supabase SQL Editor, run [`supabase/setup.sql`](supabase/setup.sql). This creates the product catalog, image bucket, read/write policies, and seeds the current catalog.
3. Create the admin account in Supabase Authentication and confirm its email address.
4. In [`supabase/grant-admin.sql`](supabase/grant-admin.sql), replace `admin@example.com` with that account's email, then run the script in the Supabase SQL Editor. The script adds the matching Auth user to `store_admins` and reports an error if the account does not exist.
5. Sign in to `/admin` with that account's email and password. Admin product changes and image uploads are stored in Supabase; storefront visitors can read published products without signing in.
