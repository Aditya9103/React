// Import React to use createContext
import React from 'react'

// Create a Context object
// This will act as a global store for user data
const UserContext = React.createContext()

// Export the context so it can be used in Provider & components
export default UserContext