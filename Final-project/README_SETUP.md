# HR POLICY — MERN Employee Portal (Updated)

## What changed
- Existing Home, About, Employee Card, Statistics, Add and View pages retained.
- User registration + email OTP verification + login with JWT.
- Admin login and dashboard; role-based backend restrictions (admins can add/edit/delete, users can view).
- Single employee image upload using Multer; JPG/PNG/WEBP/GIF, max 3 MB. Images saved to `backend/uploads/` (not bundled).
- Animated, responsive navigation, login, registration and dashboard.
- Existing `documents` text field remains as optional document notes.

## Prerequisites
Install Node.js 20+, npm and MongoDB (local or Atlas).

## Backend
1. `cd backend`
2. `npm install` (requires internet for dependencies; installs Multer as well)
3. Copy `.env.example` to `.env` and update MongoDB URI, JWT secret, Gmail SMTP app password and initial Admin credentials.
4. `npm run dev` (or `npm start`) — default http://localhost:5600

**Initial admin**: On first server startup, if `ADMIN_EMAIL` does not exist in MongoDB, an admin is created with the `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` from `.env`. Change placeholder password before launching. Existing users are never upgraded to admin automatically. Public registration always creates `user` role. OTP email needs valid Gmail SMTP credentials (use a Gmail App Password).

## Frontend
1. Open another terminal, `cd client`
2. `npm install`
3. Optionally copy `.env.example` to `.env` to configure API URL.
4. `npm run dev`, then open http://localhost:5173

## Roles
- Visitors: public marketing pages, sign-in, register.
- User: authenticated employee listing.
- Admin: authenticated employee listing, add employee with image, change employee name, delete employee, admin dashboard. Backend enforces restrictions even for direct API calls.

## Security & deployment
The supplied ZIP contained a `.env` with configuration/secrets. To avoid disclosing secrets, it is intentionally **not bundled**. Recreate it locally using `.env.example`. Rotate any original secrets that may have been shared. Uploads are saved on the local disk; use object storage and malware/content scanning for production. Configure HTTPS, secure cookies or other hardened session handling, request throttling, and restricted CORS for production.

## Notes
Automated end-to-end tests/build could not be completed here because npm package downloads are blocked in this environment. Run `npm install` in both folders, then `npm run build` in client. Backend JavaScript syntax was checked.
