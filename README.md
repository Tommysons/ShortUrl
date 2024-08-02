# Short URL Application

This is a full-stack URL shortener application built with modern web development technologies including React, Node.js, and MongoDB. The application allows users to create and manage shortened URLs efficiently.

## Features

- **URL Shortening:** Generate short URLs for long links.
- **User Authentication:** Secure user login and registration using Clerk.
- **URL Management:** Users can view, edit, and delete their shortened URLs.
- **Responsive Design:** Built with Tailwind CSS to ensure the app is fully responsive across different devices.

## Technologies Used

### Client Side

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making API requests.
- **React Router DOM:** A collection of navigational components for React.
- **Clerk:** A service for user authentication.
- **Vite:** A fast build tool and development server.
- **Tailwind CSS:** A utility-first CSS framework.
- **ESLint:** A tool for identifying and reporting on patterns in JavaScript and TypeScript.

### Server Side

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A document-oriented NoSQL database.
- **Mongoose:** A MongoDB object modeling tool designed to work in an asynchronous environment.
- **NanoID:** A tiny, secure URL-friendly unique string ID generator.
- **Clerk:** A service for user authentication.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Dotenv:** A module to load environment variables from a .env file into process.env.
- **CORS:** A middleware for enabling Cross-Origin Resource Sharing.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/short-url-app.git
    cd short-url-app
    ```

2. Install dependencies for both client and server:
    ```sh
    cd client-app
    npm install
    cd ../server-app
    npm install
    ```

### Environment Variables

#### Client Side

Create a `.env` file in the `client-app` directory and add your environment variables:
```env
VITE_SERVER_URL=http://localhost:5001/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key


#### Server Side

Create a .env file in the server-app directory and add your environment variables:
```env
CONNECTION_STRING=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_API_KEY=your_clerk_api_key
