# Quiz Tournament Platform

A comprehensive Quiz Tournament platform leveraging interactive online quizzing with competitive and engaging user experiences, similar to Dream11.

## Project Structure

This project is organized into two main directories:

- **frontend/**: React-based web interface
- **backend/**: Express.js API server

This structure allows for easy deployment to separate repositories for GitHub hosting.

## Core Features

- User authentication with Firebase
- Admin-controlled quiz tournament management
- Timed competitive quiz challenges
- Multiple quiz categories and difficulty levels
- Real-time leaderboard tracking
- Payment integration with Paytm/UPI
- User profiles with wallet management

## Technology Stack

### Frontend
- React with Vite
- TailwindCSS with shadcn/ui components
- Firebase Authentication
- TanStack Query for data fetching
- Zod for form validation
- Wouter for routing

### Backend
- Node.js with Express
- PostgreSQL with Drizzle ORM
- JWT-based authentication
- Passport.js for OAuth integration
- WebSockets for real-time features

## Getting Started

### Option 1: Run the full-stack application

Use the included shell script to start both servers:

```bash
./run.sh both
```

### Option 2: Run frontend and backend separately

Start the backend API server:

```bash
cd backend
npm install
npm run dev
```

Start the frontend development server:

```bash
cd frontend
npm install
npm run dev
```

## Deployment

See the following guides for deployment instructions:

- [GitHub Deployment Guide](deploy/github-deployment.md)
- [Dependency Management](deploy/dependency-management.md)
- [Project Structure Overview](deploy/structure.md)

## Database Setup

The project uses PostgreSQL with Drizzle ORM. To set up the database:

```bash
cd backend
npm run db:push
```

## Environment Variables

Both frontend and backend require environment variables for proper operation. See the README files in each directory for details:

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)
