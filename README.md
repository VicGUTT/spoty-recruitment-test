# Getting started

## Environnement variables and Spotify keys

- copy the `.env.example` file into a new file named `.env`
- fill in the `NUXT_SPOTIFY_CLIENT_ID` & `NUXT_SPOTIFY_CLIENT_SECRET` environnement variables with your Spotify api keys

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Nuxt 3 RC-6

This project makes use of Nuxt release canditate 6, a pre-release version of Nuxt v3.
Having used Nuxt v2 in the past _(couple years ago)_, I thought it'd be a good time to explore the upcoming version and get reacquainted with the framework :) 
