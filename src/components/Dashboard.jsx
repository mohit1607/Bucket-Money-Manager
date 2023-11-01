import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'

const Dashboard = () => {

  // its best time to use react signals. => helps a great deal in performance

  return (
    <div className='w-full h-[75vh] relative '>
      Here the Analytics will reside
      <button className='fixed bottom-8 left-8 p-4 font-semibold rounded-lg text-light bg-accent hover:bg-primary flex gap-3 items-center'>
        <div className='scale-125 font-bold'>
        <BsPlusCircle></BsPlusCircle>
        </div>
        Add Expense / Income
      </button>
    </div>
  )
}

export default Dashboard