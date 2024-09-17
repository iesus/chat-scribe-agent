# Chat Scribe Agent

This project is a React-based web application that allows users to interact with a chatbot powered by an OpenAI LLM. The chatbot uses an agent in the background that can run scripts and interact with a PostgreSQL database.

## Prerequisites

- Windows 10 or later
- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Getting Started (Windows)

Follow these steps to run the application on Windows:

1. Install Node.js:
   - Visit the official Node.js website: https://nodejs.org/
   - Download and install the LTS (Long Term Support) version for Windows
   - Follow the installation wizard, accepting the default settings

2. Verify the installation:
   - Open Command Prompt or PowerShell
   - Run the following commands:
     ```
     node --version
     npm --version
     ```
   - If both commands display version numbers, the installation was successful

3. Clone the repository:
   ```
   git clone <repository-url>
   ```

4. Navigate to the project directory:
   ```
   cd chat-scribe-agent
   ```

5. Install the project dependencies:
   ```
   npm install
   ```

6. Start the development server:
   ```
   npm run dev
   ```

7. Open your web browser and visit `http://localhost:5173` (or the URL provided in the terminal) to view the application.

## Troubleshooting

If you encounter issues during the installation or running of the application, try the following:

1. Ensure Node.js and npm are correctly installed:
   - Restart your computer after installation
   - Check if the PATH environment variable includes Node.js

2. If `npm install` fails:
   - Delete the `node_modules` folder and the `package-lock.json` file
   - Run `npm cache clean --force`
   - Try `npm install` again

3. If you see permission errors:
   - Run Command Prompt or PowerShell as Administrator

4. If you encounter network-related issues:
   - Check your internet connection
   - If you're behind a proxy, configure npm to use it:
     ```
     npm config set proxy http://your-proxy-url:port
     npm config set https-proxy http://your-proxy-url:port
     ```

5. If you still face issues, please provide the exact error message for further assistance.

## Project Structure

- `src/`: Contains the source code for the React application
  - `components/`: React components used in the application
  - `pages/`: Page components for different routes
  - `lib/`: Utility functions and helpers
- `public/`: Static assets

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run preview`: Serves the production build locally

## Notes

- The current implementation uses a simulated response for the chatbot. To integrate with a real backend and OpenAI LLM, you'll need to update the `sendMessage` function in `src/components/ChatInterface.jsx`.
- The PostgreSQL database integration is not yet implemented and will require additional backend setup.

## Contributing

Please read the CONTRIBUTING.md file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
