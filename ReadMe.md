# Weather App

A weather app built with HTML, CSS, and vanilla JavaScript that fetches live weather data from the OpenWeatherMap API. This was my first project working with a real external API, `fetch`, and asynchronous JavaScript.

## Features

- Search current weather by city name
- Displays temperature, weather condition, humidity, and wind speed
- Weather icon pulled directly from OpenWeatherMap (accurately reflects condition, including day/night and severity variants like light vs. heavy rain)
- Frosted-glass ("glassmorphism") card design over a full-screen background image
- Clears and replaces previous results on each new search

## What I practiced

This project was mainly about understanding **asynchronous JavaScript** — code that has to wait on something (a network request) before it can continue, unlike everything in my previous projects which ran instantly.

- **`fetch()` and Promises** — understanding that `fetch()` doesn't return data immediately, it returns a Promise that resolves once the request completes
- **`async`/`await`** — using `await` inside an `async function` to pause execution until the API response actually arrives, so the rest of the code only runs once real data is available
- **Template literals** — using backticks and `${}` to build the API request URL dynamically from user input, and to combine fetched values with units (`°C`, `%`, `km/hr`) for display
- **Working with nested JSON** — navigating a real-world API response structure (`data.main.temp`, `data.weather[0].icon`, etc.), including accessing a value inside an array of objects
- **Dynamic DOM building** — reusing the `createElement`/`appendChild` pattern from my to-do list project to construct the entire results section from scratch each time
- **CSS positioning** — using `position: relative` on the card and `position: absolute` on child elements to pin humidity and wind speed to opposite bottom corners while other content stays centered
- **`backdrop-filter: blur()`** — creating a frosted-glass effect using `rgba()` background colors instead of `opacity`, which would have faded the text and border as well

## Tech stack

- HTML5
- CSS3 (Flexbox, absolute positioning, backdrop-filter)
- Vanilla JavaScript (fetch API, async/await)
- OpenWeatherMap API
- Font Awesome (search icon)

## How to run

Clone the repo and open `index.html` in your browser. You'll need your own free API key from [openweathermap.org](https://openweathermap.org) — replace the `apiKey` value in `script.js` with your own key.

## Folder structure

```
weather-app/
├── index.html
├── style.css
└── script.js
```

## Note

The API key used during development is a personal key from OpenWeatherMap's free tier. If forking this project, sign up for your own key rather than reusing one found in commit history.
