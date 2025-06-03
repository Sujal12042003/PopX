# PopX

PopX is a modern, minimal React application bootstrapped with Vite and styled using Tailwind CSS. It features a simple authentication flow (Sign Up, Login, Account Settings) and demonstrates clean UI/UX with responsive design.

## Features
- React 19 with functional components and hooks
- Routing with `react-router-dom`
- Authentication flow: Sign Up, Login, Account Settings
- Responsive design using Tailwind CSS
- ESLint for code quality
- Vite for fast development and build

## Folder Structure
```
PopX/
├── public/           # Static assets
├── src/
│   ├── App.jsx       # Main app with routes
│   ├── App.css       # Tailwind and custom styles
│   ├── main.jsx      # Entry point
│   └── pages/        # Page components (Home, Login, SignUp, AccountSettings)
├── package.json      # Project metadata and dependencies
├── tailwind.config.js
├── vite.config.js
└── ...
```

## Getting Started
1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Start the development server:**
   ```powershell
   npm run dev
   ```
3. **Build for production:**
   ```powershell
   npm run build
   ```

## Scripts
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code with ESLint

## Customization
- Update page content in `src/pages/`
- Adjust styles in `src/App.css` or via Tailwind classes

## License
This project is for educational/demo purposes.
