# Sri Pavithra P — Portfolio

A responsive, dark-premium personal portfolio built with React, Vite, Framer Motion and Lucide React.

## 1. Requirements
- Node.js 18.0 or newer
- npm

## 2. Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## 3. Personalize before publishing
Edit `src/App.jsx`:
- Replace `YOUR_EMAIL@example.com` with your professional email.
- Replace the LinkedIn URL with your actual profile URL.
- Review project descriptions, technologies and repository links.
- Verify the education dates and certification names.

Add your own files:
- Put your professional headshot at `public/profile.jpg` (square or portrait image recommended).
- Put your latest resume PDF at `public/resume.pdf`.

The page displays an initials fallback until `public/profile.jpg` is added. The Resume links expect `public/resume.pdf`.

## 4. Build and test production version
```bash
npm run build
npm run preview
```
Vite creates the production site in the `dist` folder.

## 5. Deploy free with Vercel
1. Create a GitHub repository and push this project.
2. Sign in at https://vercel.com/ and choose **Add New → Project**.
3. Import the repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

## 6. Alternative: Netlify
1. Push the project to GitHub.
2. In https://app.netlify.com/, choose **Add new site → Import an existing project**.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Deploy.

## Suggested final checks
- Test on mobile and desktop.
- Confirm the email, LinkedIn and GitHub links.
- Check that the resume opens and downloads correctly.
- Only list technologies and certifications you can confidently discuss in an interview.
