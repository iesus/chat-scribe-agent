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

2. Clone the repository:
   ```
   git clone <repository-url>
   ```

3. Navigate to the project directory:
   ```
   cd chat-scribe-agent
   ```

4. Install the project dependencies:
   ```
   npm install
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your web browser and visit `http://localhost:5173` (or the URL provided in the terminal) to view the application.

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
