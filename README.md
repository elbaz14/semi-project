# ☕ LA Coffee House

A modern coffee shop web application built with **Angular 21**, featuring a full product menu, shopping cart, and checkout experience — designed as a Progressive Web App (PWA).

---

## ✨ Features

- **Product Catalog** — Browse categories including Espresso, Cappuccino, Latte, Cold Brew, and Pastries
- **Shopping Cart** — Add items, adjust quantities, and view a running total with a live cart badge
- **Checkout Flow** — Choose between Delivery or Pick Up, and pay via Apple Pay, Google Pay, or Cash
- **PWA Support** — Installable on mobile and desktop with offline capabilities via Angular Service Worker
- **Component Architecture** — Clean, modular design using standalone Angular components
- **Reactive State Management** — Cart powered by Angular Signals for real-time UI updates
- **Client-Side Routing** — Smooth navigation between pages with Angular Router

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Angular 21** | Frontend framework |
| **TypeScript 5.9** | Type-safe development |
| **RxJS** | Reactive programming |
| **Angular Signals** | State management |
| **Angular Service Worker** | PWA / offline support |
| **Vitest** | Unit testing |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── navbar/          # Top navigation bar with cart badge
│   ├── sidenav/         # Side menu with category links
│   ├── footer/          # Site footer
│   ├── services/
│   │   └── cart.service.ts   # Cart state management (Signals)
│   └── pages/
│       ├── home/        # Landing page with hero section
│       ├── espresso/    # Espresso menu
│       ├── cappuccino/  # Cappuccino menu
│       ├── latte/       # Latte menu
│       ├── cold-brew/   # Cold Brew menu
│       ├── pastries/    # Pastries menu
│       └── checkout/    # Cart review, delivery & payment
├── assets/              # Images and static files
├── styles.css           # Global styles
└── index.html           # App entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **npm** (v9 or later)

### Installation

```bash
# Clone the repository
git clone https://github.com/elbaz14/semi-project.git

# Navigate to the project
cd semi-project/lacoffee

# Install dependencies
npm install
```

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

### Build for Production

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

---

## 📸 Screenshots

> Coming soon

---

## 📄 License

© 2026 LA Coffee House. All rights reserved.
