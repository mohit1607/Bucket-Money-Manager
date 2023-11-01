import React from 'react'
import { motion } from 'framer-motion'
import BasicTabs from '../components/ExpenseTabs'
// Rerenders onload  Not a child of App.jsx
// used material ui here 
const ExpenseTracker = () => {
    return (
        <motion.div
            className='w-full h-[100vh] relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <nav className='w-full p-4 flex gap-24 items-center'>
                <h2 className='font-semibold md:text-2xl xs:text-lg'>Bucket Money Manager</h2>
            </nav>
            <BasicTabs />
        </motion.div>
    )
}

export default ExpenseTracker