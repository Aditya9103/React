import  { useState,useEffect } from "react";
import UserContext from "./UserContext";


// This component will wrap the entire app
// and provide global state (user) to all children
const UserContextProvider = ({ children }) => {

    // Global state: user
    // Initially null (means not logged in)
    // Load user from localStorage (persist login)
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user")) || null
    })

    // Save user whenever it changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return (
        // Provider makes data available globally
        // value={{user, setUser}} means:
        // - user → current user data
        // - setUser → function to update user
        <UserContext.Provider value={{ user, setUser }}>
            {children} {/* All wrapped components can access context */}
        </UserContext.Provider>
    )
}

export default UserContextProvider;