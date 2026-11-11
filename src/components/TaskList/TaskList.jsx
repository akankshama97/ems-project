import React from 'react'

const TaskList = ({ data, updateTaskStatus }) => {
  const tasks = data?.tasks || []

  if (tasks.length === 0) {
    return (
      <div className='mt-8 py-16 text-center bg-[#111827] border border-slate-800 rounded-2xl text-slate-400 shadow-xl'>
        <div className='w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center mx-auto mb-3 text-slate-300 text-xl font-bold'>
          ✓
        </div>
        <p className='text-base font-semibold text-white'>No tasks assigned yet</p>
        <p className='text-xs text-slate-400 mt-1 max-w-sm mx-auto'>
          When an administrator assigns tasks to you, they will appear here in real-time.
        </p>
      </div>
    )
  }

  return (
    <div className='mt-8'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-bold text-white flex items-center gap-2'>
          <span>Assigned Workload</span>
          <span className='text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700'>
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
          </span>
        </h3>
        <span className='text-xs text-slate-400'>
          Scroll horizontally to view all cards →
        </span>
      </div>

      <div 
        id='tasklist' 
        className='overflow-x-auto flex items-stretch justify-start gap-5 flex-nowrap w-full pb-4 pt-1'
      >
        {tasks.map((task) => {
          const isNew = task.newTask || task.status === 'newTask'
          const isActive = task.active || task.status === 'active'
          const isCompleted = task.completed || task.status === 'completed'
          const isFailed = task.failed || task.status === 'failed'

          // Status Badge styling
          let statusLabel = 'New Task'
          let statusStyle = 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
          let cardTopBorder = 'border-t-cyan-500'

          if (isActive) {
            statusLabel = 'In Progress'
            statusStyle = 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            cardTopBorder = 'border-t-amber-500'
          } else if (isCompleted) {
            statusLabel = 'Completed'
            statusStyle = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
            cardTopBorder = 'border-t-emerald-500'
          } else if (isFailed) {
            statusLabel = 'Failed / Blocked'
            statusStyle = 'bg-rose-500/10 text-rose-400 border-rose-500/30'
            cardTopBorder = 'border-t-rose-500'
          }

          // Priority badge
          const priority = task.priority || 'Medium'
          const priorityStyle = priority === 'High' 
            ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
            : priority === 'Medium' 
            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'

          return (
            <div 
              key={task.id}
              className={`flex-shrink-0 w-[310px] min-h-[310px] p-5 rounded-2xl bg-[#111827] border border-slate-800 border-t-2 ${cardTopBorder} flex flex-col justify-between shadow-xl hover:border-slate-700 transition duration-200 group`}
            >
              <div>
                {/* Card Header */}
                <div className='flex justify-between items-center gap-2 mb-3'>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${priorityStyle}`}>
                    {priority}
                  </span>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${statusStyle}`}>
                    {statusLabel}
                  </span>
                </div>

                {/* Due Date & Category */}
                <div className='flex items-center justify-between text-xs text-slate-400 mb-3 pb-3 border-b border-slate-800/80'>
                  <span className='font-medium text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-md'>
                    {task.category || 'General'}
                  </span>
                  <span>Due: {task.taskDate || task.date || task.deadline || 'Today'}</span>
                </div>

                {/* Title & Description */}
                <h4 className='text-base font-bold text-white group-hover:text-indigo-300 transition line-clamp-2 mb-2'>
                  {task.taskTitle || task.title}
                </h4>
                <p className='text-xs text-slate-400 leading-relaxed line-clamp-4'>
                  {task.taskDescription || task.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className='pt-4 border-t border-slate-800/80 mt-4'>
                {isNew && (
                  <button 
                    onClick={() => updateTaskStatus(task.id, 'active')}
                    className='w-full py-2.5 px-3 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-xl shadow-md transition cursor-pointer'
                  >
                    Accept Task
                  </button>
                )}

                {isActive && (
                  <div className='flex gap-2'>
                    <button 
                      onClick={() => updateTaskStatus(task.id, 'completed')}
                      className='flex-1 py-2 px-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer'
                    >
                      Complete
                    </button>
                    <button 
                      onClick={() => updateTaskStatus(task.id, 'failed')}
                      className='flex-1 py-2 px-2 bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer'
                    >
                      Report Block
                    </button>
                  </div>
                )}

                {isCompleted && (
                  <div className='w-full py-2 px-3 text-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-xl'>
                    ✓ Delivered & Completed
                  </div>
                )}

                {isFailed && (
                  <div className='w-full py-2 px-3 text-center bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold rounded-xl'>
                    ✗ Blocked / Stalled
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TaskList
