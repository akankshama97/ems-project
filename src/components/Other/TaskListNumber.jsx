import React from 'react'
const TaskListNumber = ({ data }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-5'>
      <div className='rounded-xl py-6 px-9 bg-blue-500'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.newItem}</h2>
        <h3 className='text-lg font-medium mt-1'>New Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 bg-green-500'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
        <h3 className='text-lg font-medium mt-1'>Completed</h3>
      </div>
      <div className='rounded-xl py-6 px-9 bg-yellow-500 text-black'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.active}</h2>
        <h3 className='text-lg font-medium mt-1'>Accepted</h3>
      </div>
      <div className='rounded-xl py-6 px-9 bg-red-500'>
        <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
        <h3 className='text-lg font-medium mt-1'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumber;