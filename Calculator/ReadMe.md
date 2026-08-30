# Calculator

A fully functional calculator built from scratch using HTML, CSS, and vanilla JavaScript — no libraries, no `eval()`. All math logic is handled manually to properly practice state management.

## Features

- Basic operations: addition, subtraction, multiplication, division
- Decimal number support
- All Clear (reset) and Backspace (delete last digit) functionality
- Chained calculations (e.g. `5 + 3 = 8`, then `+ 2 = 10`, continuing from the previous result)
- Responsive button grid layout with hover effects

## What I practiced

This project was less about UI and more about learning how to manage **state** manually in JavaScript, without relying on shortcuts like `eval()`.

- **DOM manipulation** — selecting elements and updating content dynamically with `textContent`
- **Event handling** — using `addEventListener` with `querySelectorAll` + `forEach` to wire up multiple buttons at once
- **State tracking with flags** — using boolean variables (`operatorClicked`, `justCalculated`) to track what the calculator is currently doing (typing the first number, typing the second number, or showing a freshly calculated result)
- **String vs number handling** — converting displayed strings into actual numbers using `parseFloat()` before performing arithmetic, since JavaScript's `+` operator concatenates strings instead of adding them
- **CSS Grid** — using `grid-template-columns: repeat(4, 1fr)` to evenly distribute the button layout

## Tech stack

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript (no frameworks/libraries)

## How to run

Clone the repo and open `index.html` in your browser — no build step or dependencies required.

## Folder structure

```
calculator/
├── index.html
├── style.css
└── script.js
```
