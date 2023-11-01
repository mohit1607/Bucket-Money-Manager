import React, { useRef, useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ThisContext } from '../context';
import { motion } from 'framer-motion'

// Rerenders onload  Not a child of App.jsx
const Calculator = () => {
    const [amount, setAmount] = useState('')
    // console.log(parseInt('1234'))
    const { setData } = useContext(ThisContext)

    const navigate = useNavigate()

    const inputAmount = useRef(null)
    const notify = (text) => toast.success(text, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const failNotify = (text) => {
        toast.error(text, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <motion.main
            className='w-full h-[100vh] relative'
            initial={{ position: 'absolute', left: '-100rem' }}
            animate={{ left: '0' }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <ToastContainer position='bottom-center' />
            <nav className='w-full p-4 text-start flex justify-between'>
                <div className='flex gap-4'>
                    <h1 className='font-semibold xs:text-lg md:text-2xl'>Bucket Money Manager</h1>
                </div>
                <div className='flex gap-4 '>
                    <button className='text-light font-semibold text-md md:mr-8 py-2 rounded-md px-3 bg-accent' onClick={() => navigate('/methods')}>Methods</button>
                    <button className='text-primary font-semibold text-md md:mr-8 py-2 rounded-md px-3 bg-secondary' onClick={() => navigate('/history')}>History</button>
                </div>
            </nav>

            <div className='flex flex-col w-full h-[35%] justify-center items-center gap-4'>
                {/* this should be fancy enough */}
                <input onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        if (!isNaN(parseInt(e.target.value))) {
                            let date = new Date()
                            let thisDate = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear()
                            setAmount(inputAmount.current.value)
                            setData(prev => [{
                                date: thisDate,
                                amount: inputAmount.current.value,
                                time: date.toLocaleTimeString()
                            }, ...prev])
                            notify('Added to history')
                            inputAmount.current.value = ''
                        }
                        else {
                            failNotify('Enter the valid amount')
                            inputAmount.current.value = ''
                        }
                    }
                }} ref={inputAmount} autoFocus type="text" placeholder='Enter the ₹ amount' className='text-center bg-secondary focus:outline-none rounded-[5px] p-4 text-xl ' pattern='^[0-9]' />
                <button onClick={() => {
                    if (!isNaN(parseInt(inputAmount.current.value))) {
                        let date = new Date()
                        let thisDate = date.getDate() + "/" + parseInt(date.getMonth() + 1) + "/" + date.getFullYear()
                        setAmount(inputAmount.current.value)
                        setData(prev => [{
                            date: thisDate,
                            amount: inputAmount.current.value,
                            time: date.toLocaleTimeString()
                        }, ...prev])
                        notify('Added to history')
                        inputAmount.current.value = ''
                    } else {
                        failNotify('Enter valid amount')
                        inputAmount.current.value = ''
                    }
                }} className='rounded-[5px] p-4 text-primary border active:scale-90 transition-all border-primary font-semibold'> Add Amount</button>
            </div>

            <div className={`w-full h-[45%] overflow-auto flex-wrap px-8 xs:hidden md:flex justify-center items-center gap-3`}>
                <motion.div className='bg-accent overflow-hidden h-full w-[36rem] rounded-xl transition-all p-4 text-light'>
                    <h3 className='font-semibold text-xl text-start'>50% expenses</h3>
                    <p className='text-center text-5xl font-bold mt-8'>₹{amount ? amount * 0.5 : 0}</p>
                </motion.div>
                <div className='grid grid-cols-2 gap-4 w-[36rem] h-full'>
                    <motion.div
                        className='bg-[#4CA239] overflow-hidden h-full w-[100%] rounded-xl transition-all p-4 text-light relative'>
                        <h3 className='font-semibold text-xl text-start'>10% Investment</h3>
                        <p className='text-center text-3xl tracking-wide font-bold mt-8'>₹{amount ? (amount * 0.1).toFixed(2) : 0}</p>
                    </motion.div>
                    <motion.div className='bg-[#B12F43] overflow-hidden h-full w-[100%] rounded-xl transition-all p-4 text-light relative'>
                        <h3 className='font-semibold text-xl text-start bottom-3'>10% Emergency</h3>
                        <p className='text-center text-3xl tracking-wide font-bold mt-8'>₹{amount ? (amount * 0.1).toFixed(2) : 0}</p>
                    </motion.div>
                    <motion.div className='bg-[#FCB6B8] overflow-hidden h-full w-[100%] rounded-xl transition-all p-4 text-dark relative break-words'>
                        <h3 className='font-semibold text-xl text-start line'>10% Entertainment</h3>
                        <p className='text-center text-3xl tracking-wide font-bold mt-8 '>₹{amount ? (amount * 0.1).toFixed(2) : 0}</p>
                    </motion.div>
                    <motion.div className='bg-primary overflow-hidden h-full w-[100%] rounded-xl transition-all p-4 text-light relative'>
                        <h3 className='font-semibold text-xl text-start'>10% Education</h3>
                        <p className='text-center text-3xl tracking-wide font-bold mt-8'>₹{amount ? (amount * 0.1).toFixed(2) : 0}</p>
                    </motion.div>
                </div>
            </div>

            {/* small screens */}
            <div className={`w-full h-auto overflow-auto px-8 md:hidden xs:flex flex-col justify-center items-center gap-4`}>
                <motion.div className='bg-accent overflow-hidden h-[10rem] w-full rounded-xl transition-all p-4 text-light'>
                    <h3 className='font-semibold text-xl text-start'>50% expenses</h3>
                    <p className='text-center text-5xl font-bold mt-8'>₹{amount ? (amount * 0.5).toFixed(2) : 0}</p>
                </motion.div>
                <motion.div
                    className='bg-[#4CA239] overflow-hidden h-[10rem] w-full rounded-xl transition-all p-4 text-light relative'>
                    <h3 className='font-semibold text-xl text-start'>10% Investment</h3>
                    <p className='text-center text-5xl font-bold mt-8'>₹{amount ? (amount * 0.1).toFixed(2) : 0}</p>
                </motion.div>
                <motion.div className='bg-[#B12F43] overflow-hidden h-[10rem] w-full rounded-xl transition-all p-4 text-light relative'>
                    <h3 className='font-semibold text-xl text-start bottom-3'>10% Emergency</h3>
                    <p className='text-center text-5xl font-bold mt-8'>₹{amount ? (amount * 0.1).toFixed(2) : 0}</p>
                </motion.div>
                <motion.div className='bg-[#FCB6B8] overflow-hidden h-[10rem] w-full rounded-xl transition-all p-4 text-dark relative break-words'>
                    <h3 className='font-semibold text-xl text-start line'>10% Entertainment</h3>
                    <p className='text-center text-5xl font-bold mt-8'>₹{amount ? (amount * 0.1).toFixed(2) : 0}</p>
                </motion.div>
                <motion.div className='bg-primary overflow-hidden h-[10rem] w-full rounded-xl transition-all p-4 text-light relative'>
                    <h3 className='font-semibold text-xl text-start'>10% Education</h3>
                    <p className='text-center text-5xl font-bold mt-8'>₹{amount ? (amount * 0.1).toFixed(2) : 0}</p>
                </motion.div>
            </div>
        </motion.main>
    )
}

export default Calculator