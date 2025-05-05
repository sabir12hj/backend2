# Quiz Tournament Backend

This is the backend API for the Quiz Tournament application.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with your database credentials and other environment variables.

3. Run the development server:
   ```
   npm run dev
   ```

4. The server will be available at http://localhost:5000

## API Endpoints

- Authentication:
  - POST `/api/auth/login`: User login
  - POST `/api/auth/register`: User registration
  - POST `/api/auth/google`: Google authentication
  - GET `/api/auth/user`: Get current user

- Tournaments:
  - GET `/api/tournaments`: Get all tournaments
  - GET `/api/tournaments/live`: Get live tournaments
  - GET `/api/tournaments/upcoming`: Get upcoming tournaments
  - GET `/api/tournaments/:id`: Get tournament details
  - POST `/api/tournaments`: Create tournament (admin)
  - PUT `/api/tournaments/:id`: Update tournament (admin)
  - DELETE `/api/tournaments/:id`: Delete tournament (admin)

- Quizzes and Questions:
  - GET `/api/tournaments/:id/quiz`: Get quiz for tournament
  - POST `/api/quizzes`: Create quiz (admin)
  - PUT `/api/quizzes/:id`: Update quiz (admin)
  - DELETE `/api/quizzes/:id`: Delete quiz (admin)
  - GET `/api/quizzes/:id/questions`: Get questions for quiz
  - POST `/api/questions`: Create question (admin)

- Participation:
  - POST `/api/tournaments/:id/join`: Join tournament
  - GET `/api/tournaments/:id/leaderboard`: Get tournament leaderboard
  - POST `/api/tournaments/:id/submit-answer`: Submit answer

- User Profile:
  - GET `/api/profile`: Get user profile
  - PUT `/api/profile`: Update user profile
  - POST `/api/profile/photo`: Upload profile photo

- Wallet:
  - GET `/api/wallet`: Get user wallet
  - POST `/api/wallet/add`: Add funds to wallet

## Deployment

To build for production:

```
npm run build
```

To start the production server:

```
npm start
```
