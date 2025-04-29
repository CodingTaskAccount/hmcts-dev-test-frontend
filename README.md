# HMCTS Task Management Frontend

## Template & Tools

This is built off the **Nunjucks template** provided using the GovUK Frontend kit,, although I switched from **Yarn** to **npm** for dependency management. I also used **npx** to run commands and **tsx** to run typescript files.

All API requests made from the browser are first routed to **api.ts**, then express makes the actual API call to the backend from the server. 

## Build & Run Instructions


   ```bash
   npm install
   npm run build
   npm run dev
   ```
