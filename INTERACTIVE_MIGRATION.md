# Kanyi J. & Company Advocates — Interactive Web Enhancement

This project is an enhancement of the original Kanyi J. & Company Advocates Next.js site.

## Preserved
- Existing page structure and section content
- Existing team, reception, logo and partner media
- Existing navigation and external portal link
- Existing theme/light-dark support
- Existing contact form and `/api/contact` flow
- Existing practice areas, history, statistics, attorneys, partners and contact information
- Existing responsive layout and accessibility semantics

## Added
- Custom pointer cursor for fine-pointer devices
- Cursor-following ambient light
- Magnetic CTA interaction
- Scroll-triggered section reveals
- Lenis smooth scrolling
- Scroll-reactive glass 3D object
- Pointer-reactive 3D object rotation
- Three.js transmission/glass material
- Floating 3D motion
- Depth-oriented animated background
- Reduced-motion safeguards
- Responsive interaction fallbacks

## New dependencies
- `lenis`
- `three`
- `@react-three/fiber`
- `@react-three/drei`

Run `npm install` after extracting the project, then `npm run dev`.

The old package-lock was intentionally removed because the source project's dependency manifest did not contain the new interactive dependencies. `npm install` should regenerate a lockfile for the target environment.
