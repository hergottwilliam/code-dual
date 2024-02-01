import React from "react";

import DevelopmentEnvironment from "./DevelopmentEnvironment";

function App() {
  return (
    <DevelopmentEnvironment />
  );
}

export default App;


// TODOS:
  // Create routing between landing pages and development environment
  // is session token and collaborativeSessionId the same?, can i simplify this?
  // Updates to landing page:
    // Have input token limit of 32 chars
    // Deal with invalid tokens, rooms do not exists, etc
    // Placeholder and error prompts

  // Leave room functionality:
    // Room exists until no user inhabits the room

  // On backend:
    // Implement error handling for room limit being reached


  // Development Environment:
    // Build core functionalities:
      // Create a file of any language
      // Download or export a file
      // Execute a file
      // Display current environement id/token
      // Logout button and handle a user leaving the page as logout
