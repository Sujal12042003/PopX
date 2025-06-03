import React from 'react'
import { useNavigate } from 'react-router-dom'

// Home page component with navigation buttons for Sign Up and Login
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center min-h-screen'>
            {/* Welcome message */}
            <h1 className="text-left md:text-center text-2xl pl-10 font-bold">Welcome to PopX</h1>
            <p className='mt-2 text-left md:text-center pl-10 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            {/* Navigation buttons */}
            <div className='mt-4 flex flex-col md:flex-row items-center justify-center text-center pr-4'>
                <button onClick={() => navigate('/signup')} className="mt-4 md:mt-0 md:ml-4 w-[calc(100%-10vh)] md:w-[calc(100vh-20vh)] lg:w-[calc(100vh-60vh)] md:text-m bg-[#6C25FF] text-white py-2 px-4 rounded active:scale-95 cursor-pointer transition">Create Account</button>
                <button onClick={() => navigate('/login')} className="mt-4 md:mt-0 md:ml-4 w-[calc(100%-10vh)] md:w-[calc(100vh-20vh)] lg:w-[calc(100vh-60vh)] md:text-m bg-[#6C25FF4B] text-black py-2 px-4 rounded active:scale-95 cursor-pointer transition">Already Registered? Login</button>
            </div>
        </div>
    )
}

export default Home