# SocialSpree

SocialSpree is a social media application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can create posts, follow other users, like and comment on posts, and manage their profiles.

## Features

- User registration and authentication
- Create, update, and delete posts
- Like and comment on posts
- Follow and unfollow users
- User profiles with avatar support
- Password reset functionality
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend**: React.js, Redux, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary for image uploads
- **Authentication**: JSON Web Tokens (JWT)

## Installation

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account (for image storage)

### Clone the Repository


### Setup Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PORT=4000
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

### Setup Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend application:

   ```bash
   npm start
   ```

## Usage

- Visit `http://localhost:3000` in your browser to access the application.
- Register a new account or log in with existing credentials.
- Create posts, follow users, and interact with the community.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Acknowledgments

- [MERN Stack](https://www.mongodb.com/mern-stack)
- [Cloudinary](https://cloudinary.com/)
- [Material-UI](https://mui.com/)
