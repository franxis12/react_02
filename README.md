# Tip Calculator

This is a simple Tip Calculator built with **React** and **Bootstrap** as part of my progressive React practice projects. The app allows users to enter a total bill amount and a tip percentage, then calculates the final price including taxes and tip.

## 🚀 Features

- Live calculation of:
  - Tip amount based on percentage
  - Final price with tip and tax
- Input validations:
  - Max total: 999,999,999.99
  - Max tip: 100%
- Smooth responsive UI with Bootstrap styling
- Error messages shown dynamically
- Rounded styling, shadows, and clear layout for user-friendly interaction

## 🧠 Technologies Used

- React (Hooks: `useState`, `useEffect`)
- Vite for development and build
- Bootstrap 5 for styling
- Deployed on GitHub Pages

## 🧮 Formula Used

Where:

- `tip%` is user-defined
- `taxRate` is fixed at `6.25%` (`0.0625`)

## 📸 Screenshots

> _(Add your own screenshots of the app here once it's deployed!)_

## 📁 Project Structure

react_02/
├── public/
├── src/
│ ├── components/
│ │ ├── TipCalculator.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
├── package.json
├── vite.config.js
└── README.md

## 📦 Installation

```bash
git clone https://github.com/franxis12/react_02.git
cd react_02
npm install
npm run dev

🌐 Deployment

The project is deployed on GitHub Pages using gh-pages.

npm run deploy

base: '/react_02/',

🧑‍💻 Author

Built with 💡 by Francis Martinez

This project is part of a progressive series of mini React projects (react_01, react_02, …). Each one introduces new concepts and builds on what I’ve learned.
```
