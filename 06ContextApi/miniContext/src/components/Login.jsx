import  { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    // Local state for form inputs
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // Access global context
    // We only need setUser to update global state
    const { setUser } = useContext(UserContext)

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault() // prevent page reload
        // Basic validation
        if (!username || !password) {
            setError("Both fields are required")
            return
        }

        setError("")
        // Update global user state
        setUser({ username, password })

        // Clear inputs
        setUsername("")
        setPassword("")

    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-lg shadow-md mb-4 w-full max-w-sm mx-auto"
        >
            <h2 className="text-lg font-semibold mb-3">Login</h2>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            {/* Username */}
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
                className="w-full mb-2 px-3 py-2 border rounded"
            />

            {/* Password */}
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className="w-full mb-3 px-3 py-2 border rounded"
            />

            <button 
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    )
}

export default Login