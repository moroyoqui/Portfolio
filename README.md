# TPM Portfolio Website

This is a modern, minimalistic portfolio website for a Technical Program Manager (TPM) at a corporate firm. Built with React, TypeScript, and Vite, it features light/dark mode, a clean Hero-based landing page, and all essential sections:

- Home (Hero)
- About
- Experience
- Projects
- Skills
- Achievements
- Blog
- Contact

## Features
- Responsive design
- Light and dark mode
- Modern, minimalistic UI
- Accessible and performant

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization
Replace the placeholder content in each section with your own information. You can further style the site in `src/index.css` and `src/App.css`.

---

This project was bootstrapped with [Vite](https://vitejs.dev/) and [React](https://react.dev/).

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
