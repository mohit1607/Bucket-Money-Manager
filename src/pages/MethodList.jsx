import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Rerenders onload  Not a child of App.jsx
const MethodList = () => {
    const navigate = useNavigate()
    return (
        <motion.main
            className='w-full h-[100vh] relative '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <nav className='w-full p-4 flex gap-24 items-center'>
                <h2 className='font-semibold md:text-2xl xs:text-lg'>Bucket Money Manager</h2>
                <h1 className='font-semibold text-2xl underline'>Tools and Methods</h1>
            </nav>
            <div className='w-full h-[90vh] p-8'>
                <motion.div className="rounded w-full h-full p-4 overflow-auto grid md:grid-cols-3 xs:grid-cols-1 gap-4 ">
                    <div onClick={() => navigate('/calculator')} className='h-[100%] bg-primary rounded-xl xs:col-span-1 md:col-span-2 grid place-items-center text-light font-bold text-5xl hover:bg-accent cursor-pointer'>
                        Bucket Method
                    </div>
                    <div onClick={() => navigate('/expense-tracker')} className=' h-[100%] bg-primary rounded-xl col-span-1 grid place-items-center text-light font-bold text-5xl hover:bg-accent cursor-pointer'>
                        Expense Tracker
                    </div>
                    <div className=' h-[100%] bg-primary rounded-xl col-span-1 hover:bg-accent cursor-pointer'>
                    </div>
                    <div className='h-[100%] bg-primary rounded-xl xs:col-span-1 md:col-span-2 hover:bg-accent cursor-pointer'>
                    </div>


                </motion.div>
            </div>

        </motion.main>
    )
}

export default MethodList