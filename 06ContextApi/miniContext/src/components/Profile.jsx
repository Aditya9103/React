import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    // Get user from global context
    const { user,setUser } = useContext(UserContext)

    // If no user → show login message
    if (!user) {
        return (
            <div className="text-center text-gray-600 mt-4">
                Please login
            </div>
        )
    }

    // If user exists → show welcome message
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm mx-auto text-center">
            
            <h2 className="text-lg font-semibold mb-2">
                Welcome {user.username}
            </h2>

            <button 
                onClick={() => setUser(null)}
                className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
                Logout
            </button>

        </div>
    )
}

export default Profile