# To-Do List (with localStorage)

A to-do list app built with HTML, CSS, and vanilla JavaScript that persists tasks across page refreshes using the browser's `localStorage`.

## Features

- Add new tasks via input field
- Mark tasks as done (checkbox toggles a strikethrough)
- Delete individual tasks
- Tasks persist after refreshing or closing the browser, thanks to `localStorage`

## What I practiced

This project introduced two big new concepts I hadn't used before: dynamically building HTML with JavaScript, and browser storage.

- **Dynamic DOM creation** — using `document.createElement()`, `appendChild()`, and `removeChild()` to build and remove task rows on the fly, instead of working with elements that already existed in the HTML
- **Closures** — event listeners attached to dynamically created elements (like a task's delete button) correctly "remember" which specific task row they belong to, even though they run long after the row was created
- **Reusable functions with parameters** — refactored repeated row-creation logic into a single `createRow(text, done)` function, callable both when adding a new task and when rebuilding saved tasks on page load
- **Array manipulation** — using `.push()` to add tasks and `.splice()` (combined with `Array.from(parent.children).indexOf(element)`) to remove a specific task from the middle of an array
- **JSON serialization** — using `JSON.stringify()` to convert the tasks array into a string for storage, and `JSON.parse()` to convert it back into a usable array on page load
- **localStorage** — persisting and retrieving data with `setItem()` and `getItem()`, keeping the in-memory array and localStorage in sync on every add, delete, and checkbox toggle

## Tech stack

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (no frameworks/libraries)
- Font Awesome (for the delete icon)

## How to run

Clone the repo and open `index.html` in your browser — no build step or dependencies required.

## Folder structure

```
todo-list/
├── index.html
├── style.css
└── script.js
```
