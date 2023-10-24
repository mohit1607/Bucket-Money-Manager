import React, { useRef, useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ThisContext } from '../context';
import { motion } from 'framer-motion'


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
                <h1 className='font-semibold text-2xl'>Bucket Money Manager</h1>
                <button className='text-primary font-semibold text-md mr-8 py-2 rounded-md px-3 bg-secondary' onClick={() => navigate('/history')}>History</button>
            </nav>

            <div className='flex flex-col w-full h-[35%] justify-center items-center gap-4'>
                {/* this should be fancy enough */}
                <input onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        if (!isNaN(parseInt(e.target.value))) {
                            let date = new Date()
                            setAmount(inputAmount.current.value)
                            setData(prev => [{
                                date: `${date.getDate}/${date.getMonth}/${date.getFullYear}`,
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
                        setAmount(inputAmount.current.value)
                        setData(prev => [{
                            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
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

            <div className={`w-full mt-[5rem] h-[25%] px-8 flex justify-center items-center gap-3`}>
                <div className='bg-accent overflow-hidden h-full w-[50%] rounded-xl transition-all p-4 text-light'>
                    <h3 className='font-semibold text-xl text-start'>50% expenses</h3>
                    <p className='text-center text-5xl font-bold mt-8'>₹{amount && amount * 0.5}</p>
                </div>
                <div className='bg-accent overflow-hidden h-full w-[10%] rounded-xl transition-all p-4 text-light relative'>
                    <h3 className='font-semibold text-xl text-start'>10% Investment</h3>
                    <p className='text-center text-lg mt-8 absolute left-3 bottom-3'>₹{amount && (amount * 0.1).toFixed(2)}</p>
                </div>
                <div className='bg-accent overflow-hidden h-full w-[10%] rounded-xl transition-all p-4 text-light relative'>
                    <h3 className='font-semibold text-xl text-start bottom-3'>10% Emergency</h3>
                    <p className='text-center text-lg mt-8 absolute left-3 bottom-3'>₹{amount && (amount * 0.1).toFixed(2)}</p>
                </div>
                <div className='bg-accent overflow-hidden h-full w-[10%] rounded-xl transition-all p-4 text-light relative break-words'>
                    <h3 className='font-semibold text-xl text-start line'>10% Entertainment</h3>
                    <p className='text-center text-lg mt-8 absolute bottom-3 left-3'>₹{amount && (amount * 0.1).toFixed(2)}</p>
                </div>
                <div className='bg-accent overflow-hidden h-full w-[10%] rounded-xl transition-all p-4 text-light relative'>
                    <h3 className='font-semibold text-xl text-start'>10% Education</h3>
                    <p className='text-center text-lg mt-8 absolute bottom-3 left-3'>₹{amount && (amount * 0.1).toFixed(2)}</p>
                </div>
            </div>
        </motion.main>
    )
}

export default Calculator