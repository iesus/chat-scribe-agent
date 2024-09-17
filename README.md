# Chat Scribe Agent

This project is a React-based web application that allows users to interact with a chatbot powered by an OpenAI LLM. The chatbot uses an agent in the background that can run scripts and interact with a PostgreSQL database.

## Prerequisites

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Getting Started

Follow these steps to run the application locally:

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd chat-scribe-agent
   ```

3. Install the project dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:5173` (or the URL provided in the terminal) to view the application.

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