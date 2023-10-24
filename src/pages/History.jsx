import React from 'react'
import { useContext } from 'react'
import { ThisContext } from '../context/index'
import { motion } from 'framer-motion'

//should bring the data from the backend directly.
const History = () => {
  const { data } = useContext(ThisContext)
  console.log(data)

  return (
    <motion.main
      className='w-full h-[100vh] relative p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className='text-4xl text-center font-semibold mb-3'>History</h1>
      <div className='rounded-xl px-4 py-2 h-[92%] overflow-auto'>

        {
          data ? data.map((curr, index) => {
            return (
              <div className='w-full mb-3 flex justify-between p-4 bg-secondary rounded-lg items-center' key={curr.date + index} >
                <h3 className='text-2xl font-semibold text-primary'>Amount: <span className='text-dark text-xl'>  12345</span></h3>
                <p className='font-semibold'>Dated: {curr.date}</p>
                <p className='font-semibold'>Timed: {curr.time}</p>
              </div>
            )
          }) : <div>Nothing to Show here right now</div>
        }
      </div>
    </motion.main>
  )
}

export default History