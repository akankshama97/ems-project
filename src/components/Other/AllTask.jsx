import React from 'react'

const AllTask = ({ employees = [] }) => {
  return (
    <div className='bg-[#111827] border border-slate-800 p-6 rounded-2xl mt-8 shadow-xl'>
      <div className='flex items-center justify-between mb-5'>
        <div>
          <h3 className='text-lg font-bold text-white'>Team Workload & Progress</h3>
          <p className='text-xs text-slate-400 mt-0.5'>
            Real-time status of assigned tasks across all organization members
          </p>
        </div>
        <span className='text-xs font-semibold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700'>
          {employees.length} {employees.length === 1 ? 'Member' : 'Members'}
        </span>
      </div>
      
      {/* Table Header */}
      <div className='bg-[#090d16] border border-slate-800/90 mb-3 py-3 px-4 flex justify-between rounded-xl text-xs font-bold text-slate-400 uppercase tracking-wider'>
        <span className='w-2/6 text-left'>Employee</span>
        <span className='w-1/6 text-cyan-400 text-center'>New Task</span>
        <span className='w-1/6 text-amber-400 text-center'>In Progress</span>
        <span className='w-1/6 text-emerald-400 text-center'>Completed</span>
        <span className='w-1/6 text-rose-400 text-center'>Failed</span>
      </div>

      {/* Rows */}
      <div className='flex flex-col gap-2 max-h-80 overflow-y-auto pr-1'>
        {employees.length === 0 ? (
          <p className='text-slate-400 text-xs text-center py-6'>No employees registered in the system.</p>
        ) : (
          employees.map((emp) => (
            <div 
              key={emp.id} 
              className='border border-slate-800/80 bg-[#0d1322] hover:bg-[#131c31] py-3.5 px-4 flex justify-between rounded-xl text-xs items-center transition shadow-sm'
            >
              <div className='w-2/6 flex items-center gap-3 text-left'>
                <span className='w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-[11px] border border-indigo-500/30'>
                  {emp.name.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className='font-semibold text-white text-xs'>{emp.name}</p>
                  <p className='text-[10px] text-slate-400'>{emp.department || emp.email}</p>
                </div>
              </div>

              <div className='w-1/6 text-center'>
                <span className='inline-block px-2.5 py-0.5 rounded-full font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'>
                  {emp.taskCounts?.newTask ?? 0}
                </span>
              </div>

              <div className='w-1/6 text-center'>
                <span className='inline-block px-2.5 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20'>
                  {emp.taskCounts?.active ?? 0}
                </span>
              </div>

              <div className='w-1/6 text-center'>
                <span className='inline-block px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'>
                  {emp.taskCounts?.completed ?? 0}
                </span>
              </div>

              <div className='w-1/6 text-center'>
                <span className='inline-block px-2.5 py-0.5 rounded-full font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20'>
                  {emp.taskCounts?.failed ?? 0}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AllTask
