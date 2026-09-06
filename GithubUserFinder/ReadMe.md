# GitHub User Finder

A GitHub profile lookup tool built with HTML, CSS, and vanilla JavaScript, using GitHub's free public API (no API key required).

## Features

- Search any GitHub username and view their public profile data
- Displays profile picture, name, username, location, public repo count, followers, and following
- Direct link to the user's actual GitHub profile
- Graceful "No user found" state for invalid usernames, detected via HTTP status code
- Clean two-column info layout with a circular profile image

## What I practiced

This project reused the fetch/async pattern from my weather app, but with a different API and a stronger focus on structuring dynamically-created HTML cleanly.

- **Fetching without an API key** — GitHub's public user endpoint (`api.github.com/users/{username}`) requires no authentication, a simpler starting point than APIs that need a key
- **HTTP status code handling** — checking `response.status === 404` to detect a nonexistent user *before* attempting to parse the response as user data, and using an early `return` to stop the function from continuing with invalid/undefined data
- **Nested DOM structure** — building multiple levels of wrapper containers (a `profile-side` div and an `info-grid` div, each holding their own children) instead of appending everything flat into one row, in order to control layout with CSS
- **Reinforcing async/await and template literals** from the weather app, applied to a new API and a new UI layout
- **CSS Grid for a two-column stat layout**, combined with Flexbox for the overall left (image) / right (info) split
- **`object-fit: cover` + `border-radius: 50%`** to properly crop a rectangular profile image into a clean circle without distortion

## Tech stack

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript (fetch API, async/await)
- GitHub REST API
- Font Awesome (search icon)

## How to run

Clone the repo and open `index.html` in your browser — no API key or build step required.

## Folder structure

```
github-user-finder/
├── index.html
├── style.css
└── script.js
```
