import Header from './Header'
import {useState} from 'react'
const Login =() => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header/>
            <div >
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_medium.jpg" alt="Logo" />
            </div>
            <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black p-8 rounded-md opacity-90 w-3/12'>
                <h1 className='text-3xl text-white mb-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignIn && <input type="text" placeholder="Full Name" className='px-4 py-2 my-4 border border-gray-300 rounded bg-gray-600 text-white' />}
                <input type="email" placeholder="Email" className='px-4 py-2 my-4 border border-gray-300 rounded bg-gray-600 text-white' />
                <input type="password" placeholder="Password" className='px-4 py-2 my-4 border border-gray-300 rounded bg-gray-600 text-white' />
                <button type="submit" className='bg-red-800 text-white px-4 py-2 my-4 rounded'>Sign In</button>
                <p className ="m-2 text-white cursor-pointer" onClick={toggleSignIn}>{isSignIn ? 'Not a User! Click here to Sign Up' : 'Already a User? Click here to Sign In'}</p>
            </form>
        </div>
        
    )
}

export default Login;