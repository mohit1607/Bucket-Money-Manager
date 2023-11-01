import React from 'react'
import money from '../assets/images/money-plant.jpg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';


// Rerenders onload  Not a child of App.jsx
const Home = () => {

    const navigate = useNavigate()
    return (
        <motion.main
            className='h-[100vh] w-full text-center p-8 grid place-items-center gap-4 grid-cols-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className='lg:col-span-2 xs:col-span-3 h-full w-full flex flex-col justify-center gap-4 items-center'>
                <h1 className='md:text-[4rem] md:text-center xs:text-[2rem]'>Welcome to the Bucket Money Manager</h1>
                <p className='font-semibold text-2xl'>
                    <Typewriter
                        className="font-bold"
                        options={{
                            strings: ['Your financials at your fingertips', 'Worlds easiest to manage personal finance'],
                            autoStart: true,
                            loop: true,
                            delay: 80,
                        }}
                    />
                </p>
                <button onClick={() => navigate('/calculator')} className='text-light font-semibold hover:bg-secondary hover:text-dark transition-all duration-300 p-4 bg-accent rounded-[5px] w-[15rem]'>Go to Money Manager</button>
            </div>
            <div className='lg:col-sapn-1 lg:h-full lg:w-full xs:h-0 xs:w-0 xs:hidden lg:flex flex-col justify-center overflow-hidden'>
                <img className='h-full w-full' src={money} alt="Money-image" />
            </div>
        </motion.main>
    )
}

export default Home