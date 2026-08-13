# Week 9: CommunityHub - React Advanced (Routing & Data Fetching)

## Author
- **Name:** Kennedy Murimi
- **GitHub:** [@kennedymurimi100](https://github.com/kennedymurimi100)
- **Date:** August 13, 2026

## Project Description
CommunityHub is a multi-page React application built as part of Week 9 (Lessons 17 & 18) of the Season 11 program. This week extended the app with advanced React patterns — effects, live data fetching, client-side routing, custom hooks, and a reusable component library — turning it from a single-page app into a full frontend with real navigation and API-driven content.

## Technologies Used
- React
- React Router (react-router-dom)
- JavaScript (ES6+)
- Tailwind CSS (or CSS Modules)
- JSONPlaceholder API (for posts/users data)
- Vite

## Features
- Multi-page navigation with React Router (Home, Posts, Post Detail, Create Post, About)
- Dynamic routes with URL params (`/posts/:postId`)
- Programmatic navigation and active-link styling with `NavLink`
- Data fetching from the JSONPlaceholder API using `useEffect`
- Custom hooks: `useFetch`, `useLocalStorage`, `useToggle`, `useForm`
- Loading spinners and error states with retry functionality
- Reusable component library: Button, Input, Card, Modal, Avatar
- Create Post form with local state management
- Responsive, accessible design (keyboard navigation, labeled inputs, alt text, AA color contrast)

## How to Run
1. git clone https://github.com/kennedymurimi100/iyf-s11-week-09-kennedymurimi100.git

2. Install dependencies

npm install

3. Start the development server

npm start

## Routes

| Route | Description |
|---|---|
| `/` | Home |
| `/posts` | View community posts |
| `/posts/:postId` | View a single post |
| `/create-post` | Create a new post |
| `/about` | About CommunityHub |


## Lessons Learned
This week deepened my understanding of `useEffect` — including cleanup functions, dependency arrays, and common patterns like data fetching, event listeners, and localStorage syncing. I also learned how to structure a React app with client-side routing (nested routes, dynamic params, and layouts using `Outlet`), and how extracting custom hooks (`useFetch`, `useForm`) keeps components clean and logic reusable across the app.

## Challenges Faced
Handling loading and error states consistently across multiple fetch calls was tricky at first — I solved it by building a shared `useFetch` hook so every component that needed data got the same loading/error/retry behavior without duplicating logic. I also had to debug a stale closure issue in a `useEffect` interval, which I fixed by properly including dependencies and cleaning up the interval on unmount.

## Accessibility Audit
- **Before:** [insert your starting Lighthouse Accessibility score]
- **After:** [insert your score after fixes]
- Fixes made: added missing form labels, improved color contrast, added alt text to images, ensured visible focus states on interactive elements.


## Screenshots
![Community Posts page](screenshots/community-posts.png)


## Live Demo (if deployed)
[View Live Demo](https://kennedymurimi100.github.io/iyf-s11-week-09-kennedymurimi100/)
