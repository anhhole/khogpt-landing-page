# KhoGPT Landing Page

Landing page for KhoGPT - An AI-First, Voice-Ahead Warehouse Agent.

## Project Setup

This project is built with React, TypeScript, and Vite. Tailwind CSS is currently loaded via CDN in `index.html` for simplicity.

### Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run local server:
    ```bash
    npm run dev
    ```

### Deployment to Vercel

1.  **Push to GitHub**:
    Initialize a git repository and push your code to GitHub.

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    # Create repo on GitHub, then:
    git remote add origin khogpt-landging-page
    git push -u origin main
    ```

2.  **Deploy on Vercel**:
    *   Go to [Vercel](https://vercel.com/new).
    *   Import your GitHub repository.
    *   Keep the default build settings (Framework Preset: Vite).
    *   Click **Deploy**.
