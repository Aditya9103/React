
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './Context/UserContextProvider'

import './App.css'

function App() {

  return (
    // Wrap entire app with Provider
    // So all components inside can access context
    <UserContextProvider>

       {/* Full screen center layout */}
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        
        <h1 className="text-2xl font-bold mb-4">
          React Context Demo
        </h1>

        {/* Login + Profile */}
        <Login />
        <Profile />

      </div>

    </UserContextProvider>
  )
}

export default App


// User opens app
//    ↓
// user = null (initial state)
//    ↓
// Profile → shows "Please login"

// User enters username + password
//    ↓
// Clicks Submit
//    ↓
// Login → setUser({username, password})
//    ↓
// Context updates
//    ↓
// Profile re-renders automatically
//    ↓
// Shows: Welcome username
