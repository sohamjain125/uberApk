# Backend Service

This repository contains the backend services for the application. It is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/backend-service.git
   ```
2. Navigate to the project directory:
   ```sh
   cd backend-service
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. The server will be running at `http://localhost:3000`.

## API Endpoints

### User Routes

- `POST /users/register` - Register a new user
- `POST /users/login` - Login a user
- `GET /users/profile` - Get user profile
- `GET /users/logout` - Logout a user

### Captain Routes

- `POST /captains/register` - Register a new captain
- `POST /captains/login` - Login a captain
- `GET /captains/profile` - Get captain profile
- `GET /captains/logout` - Logout a captain

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_uri
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
