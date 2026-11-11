import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout, data, updateTaskStatus }) => {
  return (
    <div className='min-h-screen w-full bg-[#090d16] text-slate-100 p-5 md:p-8 lg:p-10'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <Header 
          handleLogout={handleLogout} 
          username={data?.name} 
          role="employee" 
        />

        {/* Employee Info Strip */}
        <div className='mt-6 p-4 bg-[#111827] border border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs shadow-lg'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 font-bold flex items-center justify-center text-sm border border-indigo-500/30'>
              {data?.name?.slice(0, 2).toUpperCase() || 'EM'}
            </div>
            <div>
              <p className='font-bold text-white text-sm'>{data?.name}</p>
              <p className='text-slate-400'>{data?.email}</p>
            </div>
          </div>

          <div className='flex items-center gap-6'>
            <div>
              <span className='text-slate-400 block'>Department</span>
              <span className='font-semibold text-slate-200'>{data?.department || 'Operations'}</span>
            </div>
            <div>
              <span className='text-slate-400 block'>Status</span>
              <span className='inline-flex items-center gap-1 font-semibold text-emerald-400'>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' /> Active
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Task Metric Numbers */}
        <TaskListNumber data={data} />

        {/* Horizontal Task List */}
        <TaskList data={data} updateTaskStatus={updateTaskStatus} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
