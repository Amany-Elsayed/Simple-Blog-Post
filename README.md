# Basic Blog Post - MEAN Stack Application

A simple blog post application built with the MEAN stack (MongoDB, Express.js, Angular, Node.js) that displays blog posts with the ability to view detailed descriptions.

## Features

- Display a list of blog posts
- Click on any post to view its detailed description
- Toggle post details by clicking again
- Clean and responsive user interface
- RESTful API backend

## Tech Stack

### Frontend
- **Angular** 20.3.0 - Modern frontend framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **Angular Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** 5.2.1 - Web application framework
- **CORS** - Cross-origin resource sharing

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Angular CLI** (will be installed as a dev dependency)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd basic-blog-post
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

## Running the Application

The application consists of two parts: the backend server and the frontend client. You'll need to run both simultaneously.

### Start the Backend Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

### Start the Frontend Client

1. Open a new terminal window and navigate to the client directory:
   ```bash
   cd client
   ```

2. Start the Angular development server:
   ```bash
   npm start
   ```

   The application will automatically open in your browser at `http://localhost:4200`

## Project Structure

```
basic-blog-post/
├── client/                 # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   └── main-page/    # Main page component
│   │   │   ├── service/
│   │   │   │   └── blog-service.ts   # API service
│   │   │   ├── app.ts            # Root component
│   │   │   └── app.routes.ts     # Routing configuration
│   │   └── index.html
│   └── package.json
├── server/                 # Express.js backend
│   ├── data/
│   │   └── posts.js       # Blog posts data
│   ├── server.js          # Express server
│   └── package.json
└── README.md
```

## API Endpoints

### GET `/posts`
Returns a list of all blog posts.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Definition of MEAN Stack",
    "desc": "MEAN Stack is a JavaScript-based full stack development framework."
  },
  ...
]
```

## Usage

1. Once both servers are running, navigate to `http://localhost:4200` in your browser
2. You'll see a list of blog posts
3. Click on any post to view its detailed description
4. Click again to collapse the post details

## Future Enhancements

- [ ] Integrate MongoDB for persistent data storage
- [ ] Add ability to create, edit, and delete posts
- [ ] Implement user authentication
- [ ] Add search and filter functionality
- [ ] Implement pagination for large lists
- [ ] Add rich text editor for post content
- [ ] Add image upload support

## Development

### Building for Production

To build the Angular application for production:

```bash
cd client
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

To run the Angular test suite:

```bash
cd client
npm test
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Author

Amany Elsayed

---

**Note:** This is a basic MEAN stack application. For production use, consider adding error handling, input validation, security measures, and database integration.


