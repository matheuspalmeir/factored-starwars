# Star Wars Explorer

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview

Star Wars Explorer is a web application that allows users to explore information about Star Wars films and characters. The application is divided into three main sections: Home, Films, and Characters.

- **Home**: The landing page of the application.
- **Films**: Displays a list of Star Wars films. Users can search for films by name using the search bar. The films data is fetched once from the API and managed with static pagination and filtering.
- **Characters**: Displays a list of Star Wars characters. Users can search for characters by name using the search bar. This section uses dynamic pagination, fetching data from the API as needed.

## Features

- **Search Bar**: Allows users to search for specific films or characters by name.
- **Static Pagination**: Used in the Films section to manage pagination and filtering of data fetched once from the API.
- **Dynamic Pagination**: Used in the Characters section to fetch and paginate data from the API dynamically.

## Getting Started

First, run the development server:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
