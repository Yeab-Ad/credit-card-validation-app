# Credit Card Validation App

This is a simple web application that allows users to validate credit card numbers using the Luhn algorithm. The application is built with React for the front-end and an Express server for the back-end.

## Features

- Credit card number validation using the Luhn algorithm.
- A landing page with a "Get Started" button that scrolls down to the validation section.
- A fixed footer with links to your GitHub and personal website.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/credit-card-validation-app.git
   cd credit-card-validation-app
   ```

   Install the dependencies for the Express server:

bash
Copy code
cd server
npm install
Install the dependencies for the React app:

bash
Copy code
cd client
npm install
Start the Express server (from the server directory):

bash
Copy code
npm start
Start the React app (from the client directory):

bash
Copy code
npm start
Your application should now be accessible at http://localhost:3000.

Usage
Enter a credit card number in the input field.
Click the "Validate" button to check if the credit card number is valid.
The result will be displayed below the button, indicating whether the credit card number is valid or not.
Credits
This project uses Chakra UI for the React-based user interface. Chakra UI GitHub Repository
The credit card validation logic is implemented with the Luhn algorithm.
License
This project is open-source and available under the MIT License.
