Signup and Login Flow with Email OTP Verification
This project implements a secure signup and login flow with email OTP verification and password authentication. It uses modern technologies and best practices such as JWT for authentication, password hashing, and mobile-friendly design.

Features
Signup with OTP Verification: Users sign up with their email and verify their account using an OTP sent to their email.
Error Handling: Proper error messages are displayed in case of incorrect OTP or API failure.
Welcome Page: After successful signup or login, users are redirected to a welcome page.
Login with Password: Login flow with email and password verification.
Security: Follows best practices like password hashing and JWT for authentication.
Mobile-Friendly Design: The app is responsive and replicates the provided design, ensuring a smooth experience on all devices.
Folder Structure
The following is the project folder structure:
server/                    # Backend (Node.js/Express.js) main folder
├── client/                 # Frontend (React.js)
│   ├── dist/               # Distribution folder for frontend build files
│   ├── node_modules/       # Node.js modules for the client
│   ├── public/
│   │   ├── index.html      # Main HTML file
│   ├── src/
│   │   ├── assets/         # Static assets like images, fonts
│   │   ├── components/     # Reusable components
│   │   │   ├── SignupForm.jsx  # Signup form with OTP
│   │   │   ├── LoginForm.jsx   # Login form with password authentication
│   │   │   ├── WelcomePage.jsx # Welcome page shown after successful login/signup
│   │   ├── utils/          # Utility functions (e.g., JWT token handling)
│   │   │   └── authUtils.js    # Token utilities (get/set JWT token)
│   │   ├── App.js          # Main application entry point, handles routes
│   │   ├── app.css         # Application-specific styles
│   │   ├── index.html      # HTML template
│   │   ├── index.js        # Main React entry point
│   │   ├── index.css       # Custom styles and Tailwind CSS config
│   │   └── main.js         # Main JavaScript file
│   ├── .env                # Environment variables for the frontend
│   ├── package.json        # Frontend dependencies and scripts
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── viteConfig.js       # Vite configuration file
│
├── controllers/            # API controllers (handles business logic)
│   ├── authController.js   # Signup, login, OTP verification logic
├── models/                 # Mongoose models
│   └── User.js             # User schema/model
├── routes/                 # API routes
│   ├── authRoutes.js       # Routes related to authentication (signup, login)
├── utils/                  # Utility functions
│   └── mailer.js           # Utility functions like email sending
├── .env                    # Environment variables for the backend
├── index.js                # Main server entry point (Express setup)
├── package.json            # Backend dependencies and scripts
├── README.md               # Documentation for the backend
├── .gitignore              # Files/folders to be ignored by Git
└── README.md               # Main project documentation

Technologies Used
Frontend: React, Tailwind CSS for styling
Backend: Node.js, Express.js (for APIs)
Authentication: JSON Web Token (JWT) for secure authentication
Database: MongoDB (for storing user data)
Security: Password hashing (bcrypt), JWT-based token authentication
Validation: OTP email verification
Getting Started
Prerequisites
Node.js (v14+)
MongoDB (for storing user information)
API base URL: You need a backend server to handle the signup, login, and OTP verification processes.
Backend Setup
Clone the backend repository (assuming it is a separate service).
Install dependencies and configure environment variables.

# Clone the backend repo
git clone <backend-repo-url>

# Install dependencies
npm install

# Create an .env file and add the following variables
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
EMAIL_SERVICE=<your-email-service>  # e.g., SendGrid, Mailgun, etc.
EMAIL_API_KEY=<your-email-api-key>

# Run the server
npm start
Frontend Setup
Clone this repository.
Install the required dependencies:

# Clone the repo
git clone <frontend-repo-url>

# Navigate to the project directory
cd <frontend-project-directory>

# Install dependencies
npm install
Create a .env file in the root of your project and add the following environment variables:
REACT_APP_API_URL=http://localhost:8000/api   # API base URL
Start the React application:
npm start
The app should now be running at http://localhost:8000.

How to Build for Production
To build the project for production, run the following command:
npm run build
This will generate a build/ folder with optimized production assets.

Running Tests
If tests are implemented, you can run them using:
npm test
API Endpoints
Make sure you have the backend server running, which provides the following API endpoints:

POST /api/auth/signup: Sign up a user and send OTP to their email.
POST /api/auth/verify-otp: Verify the OTP sent to the user’s email.
POST /api/auth/login: Log in with email and password.
