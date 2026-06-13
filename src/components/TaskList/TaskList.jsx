import React from 'react'
const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      
      {/* Task Card 1 */}
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl flex flex-col justify-between text-black'>
        <div>
          <div className='flex justify-between items-center'>
            <span className='bg-red-600 text-xs px-3 py-1 rounded text-white font-bold'>High</span>
            <h4 className='text-sm font-semibold'>12 June 2026</h4>
          </div>
          <h2 className='mt-5 text-xl font-bold'>Complete UI Design</h2>
          <p className='text-sm mt-2 font-medium opacity-90'>Design the dashboard for employee project tracking app.</p>
        </div>
        <div className='flex gap-2 mt-4'>
          <button className='bg-green-600 text-white text-xs py-1 px-2 rounded font-semibold'>Mark Completed</button>
          <button className='bg-red-600 text-white text-xs py-1 px-2 rounded font-semibold'>Mark Failed</button>
        </div>
      </div>

      {/* Task Card 2 */}
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl flex flex-col justify-between text-black'>
        <div>
          <div className='flex justify-between items-center'>
            <span className='bg-blue-600 text-xs px-3 py-1 rounded text-white font-bold'>Medium</span>
            <h4 className='text-sm font-semibold'>15 June 2026</h4>
          </div>
          <h2 className='mt-5 text-xl font-bold'>Fix Login Auth</h2>
          <p className='text-sm mt-2 font-medium opacity-90'>Resolve token management error on user dashboard reload.</p>
        </div>
        <div className='flex gap-2 mt-4'>
          <button className='bg-yellow-500 text-black text-xs py-1 px-3 rounded font-bold w-full'>Accept Task</button>
        </div>
      </div>

    </div>
  )
}

export default TaskList