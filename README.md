 # Instagram Clone

## Project Overview

This project is a full-stack Instagram clone built using Next.js for the frontend and NestJS for the backend. The application aims to replicate the core features of Instagram, including user authentication, profile management, post creation, and a real-time chat feature.

## Features

- **User Authentication:** Register and login functionality with JWT-based authentication.
- **Profile Management:** Create and manage user profiles with profile pictures and bios.
- **Post Creation:** Users can create posts with images and captions.
- **Real-time Chat:** Users can engage in real-time conversations using WebSockets (Socket.io).
- **Responsive Design:** Built with Material-UI for a modern and responsive user interface.

## Tech Stack

### Frontend
- **Next.js:** A React framework for building server-side rendered applications.
- **TypeScript:** Statically typed superset of JavaScript for better code quality and maintainability.
- **Material-UI:** A popular React component library for building responsive and customizable UI components.
- **Axios:** Promise-based HTTP client for making API requests.
- **Socket.io-client:** Client library for real-time communication using WebSockets.

### Backend
- **NestJS:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Socket.io:** Library for real-time, bidirectional, and event-based communication.
- **JWT (jsonwebtoken):** Library for generating and verifying JSON Web Tokens.
- **bcryptjs:** Library for hashing passwords.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or yarn
- MongoDB (local or cloud-based)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nikxxx007/instaClone.git
   cd instaClone/client
   ```
2. **Install dependencies:**

   ```bash
   npm install
   cd ../server
   npm install
   ```
3. **Set up environment variables:**
Create a .env file in the server directory and add your MongoDB connection string and JWT secret:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ````

4. **Run the backend server:**

   ```bash
   npm run start:dev
   ````
   
5. Run the frontend development server:

   ```bash
   npm run dev
   ```
   
6. **Open your browser:**
Navigate to http://localhost:3000 to see the application in action.

**Contributing**

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and include relevant tests.

**License**

This project is licensed under the MIT License. See the LICENSE file for details.

**Acknowledgments**

Inspired by the features and design of Instagram.
Built with the help of various open-source libraries and frameworks.

**Contact**
For any questions or suggestions, feel free to reach out to your-email@example.com.


