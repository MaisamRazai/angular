# Tour of Heroes

A polished Angular sample application that demonstrates core Angular concepts including components, routing, services, and dependency injection.

## Features

- Modular Angular components with isolated styles
- Client-side routing using `@angular/router`
- Reusable data service for hero management
- Message logging panel for application events
- Responsive layout and modern UI styling

## Getting started

### Prerequisites

- Node.js 8.x or later
- npm 5.x or later
- Angular CLI compatible with Angular 7

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

Open `http://localhost:4200/` in your browser.

### Build for production

```bash
npm run build -- --prod
```

### Run unit tests

```bash
npm test
```

### Run lint

```bash
npm run lint
```

## Project structure

- `src/app/` — application source code
- `src/app/dashboard/` — dashboard feature
- `src/app/hero-detail/` — hero detail feature
- `src/app/heroes/` — hero list feature
- `src/app/messages/` — application messages
- `src/app/app-routing.module.ts` — route definitions
- `src/styles.css` — shared global styles

## Notes

This repository is based on the Angular Tour of Heroes example and has been refined with cleaner structure, improved styling, and better naming conventions.
