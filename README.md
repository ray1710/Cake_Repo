# Cakes on the Porch: website concept

A one-page proposal site for **Delicious Cakes by Christina** ([@delicious_cake_by_c](https://www.instagram.com/delicious_cake_by_c/)), a self-serve porch cake fridge in Milton, Ontario.

Plain static HTML/CSS/JS with no build step:

- `index.html`: the page
- `styles.css`: all styling
- `script.js`: porch open/closed status (Toronto time) and the copy button for the e-Transfer number
- `img/`: real photos, pulled as frames from Christina's own Instagram reel

Menu, prices, hours and policies all come from her Instagram posts and bio. FAQ answers only state what she has published; anything else points people to message her.

## Run locally

```bash
python -m http.server 5500
```

## Deploy

```bash
npx vercel --prod
```
