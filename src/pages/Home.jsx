import React from 'react'
import money from '../assets/images/money-plant.jpg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

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
            <div className='col-span-2 h-full w-full flex flex-col justify-center gap-4 items-center'>
                <h1 className='text-[4rem]'>Welcome to the Bucket Money Manager</h1>
                <button onClick={() => navigate('/calculator')} className='text-light font-semibold hover:bg-secondary hover:text-dark transition-all duration-300 p-4 bg-accent rounded-[5px] w-[15rem]'>Go to Money Manager</button>
            </div>
            <div className='col-sapn-1 h-full w-full flex flex-col justify-center overflow-hidden'>
                <img className='h-full w-full' src={money} alt="Money-image" />
            </div>
        </motion.main>
    )
}

export default Home