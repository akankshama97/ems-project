import React from 'react'

const TaskList = ({ data, updateTaskStatus }) => {
  const tasks = data?.tasks || []

  if (tasks.length === 0) {
    return (
      <div className="mt-8 py-16 text-center bg-white border border-[#E5E2DA] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="w-10 h-10 rounded-full bg-[#F2EFE9] border border-[#E5E2DA] flex items-center justify-center mx-auto mb-3 text-[#4E4C46] text-base font-semibold">
          ✓
        </div>
        <p className="text-base font-semibold text-[#1C1B18] font-heading">No tasks assigned yet</p>
        <p className="text-xs text-[#6B6860] mt-1 max-w-sm mx-auto">
          When an administrator assigns tasks to your workspace, they will appear here in real-time.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#1C1B18] font-heading flex items-center gap-2">
          <span>Assigned Workload</span>
          <span className="text-xs px-2.5 py-0.5 rounded-[4px] bg-[#F2EFE9] text-[#4E4C46] border border-[#E5E2DA] font-medium">
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
          </span>
        </h3>
        <span className="text-xs text-[#8E8A80]">
          Scroll horizontally to view all cards →
        </span>
      </div>

      <div 
        id="tasklist" 
        className="overflow-x-auto flex items-stretch justify-start gap-5 flex-nowrap w-full pb-4 pt-1"
      >
        {tasks.map((task) => {
          const isNew = task.newTask || task.status === 'newTask'
          const isActive = task.active || task.status === 'active'
          const isCompleted = task.completed || task.status === 'completed'
          const isFailed = task.failed || task.status === 'failed'

          // Status Badge styling
          let statusLabel = 'New Task'
          let statusStyle = 'bg-[#F2EFE9] text-[#4E4C46] border-[#E5E2DA]'

          if (isActive) {
            statusLabel = 'In Progress'
            statusStyle = 'bg-[#FEF6EE] text-[#B54708] border-[#F9DBAF]'
          } else if (isCompleted) {
            statusLabel = 'Completed'
            statusStyle = 'bg-[#ECFDF3] text-[#027A48] border-[#A6F4C5]'
          } else if (isFailed) {
            statusLabel = 'Blocked / Stalled'
            statusStyle = 'bg-[#FEF3F2] text-[#B42318] border-[#FECDCA]'
          }

          // Priority badge
          const priority = task.priority || 'Medium'
          const priorityStyle = priority === 'High' 
            ? 'bg-[#FEF3F2] text-[#B42318] border-[#FECDCA]' 
            : priority === 'Medium' 
            ? 'bg-[#FEF6EE] text-[#B54708] border-[#F9DBAF]' 
            : 'bg-[#F2EFE9] text-[#4E4C46] border-[#E5E2DA]'

          return (
            <div 
              key={task.id}
              className="flex-shrink-0 w-[310px] min-h-[310px] p-5 rounded-[12px] bg-white border border-[#E5E2DA] hover:border-[#D1CDC4] flex flex-col justify-between shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors duration-150"
            >
              <div>
                {/* Card Header */}
                <div className="flex justify-between items-center gap-2 mb-3">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-[4px] border ${priorityStyle}`}>
                    {priority} Priority
                  </span>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-[4px] border ${statusStyle}`}>
                    {statusLabel}
                  </span>
                </div>

                {/* Due Date & Category */}
                <div className="flex items-center justify-between text-xs text-[#6B6860] mb-3 pb-3 border-b border-[#E5E2DA]">
                  <span className="font-medium text-[#4E4C46] bg-[#F9F8F5] border border-[#E5E2DA] px-2 py-0.5 rounded-[4px] text-[11px]">
                    {task.category || 'General'}
                  </span>
                  <span className="text-[11px]">Due: {task.taskDate || task.date || task.deadline || 'Today'}</span>
                </div>

                {/* Title & Description */}
                <h4 className="text-base font-semibold text-[#1C1B18] font-heading line-clamp-2 mb-2">
                  {task.taskTitle || task.title}
                </h4>
                <p className="text-xs text-[#6B6860] leading-relaxed line-clamp-4">
                  {task.taskDescription || task.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E5E2DA] mt-4">
                {isNew && (
                  <button 
                    onClick={() => updateTaskStatus(task.id, 'active')}
                    className="w-full h-[38px] bg-[var(--ems-accent,#0F766E)] hover:bg-[var(--ems-accent-hover,#115E59)] text-white text-xs font-medium rounded-[8px] transition-colors duration-150 cursor-pointer flex items-center justify-center"
                  >
                    Accept Task
                  </button>
                )}

                {isActive && (
                  <div className="flex gap-2">
                    <button 
                      onClick={() => updateTaskStatus(task.id, 'completed')}
                      className="flex-1 h-[38px] bg-[#027A48] hover:bg-[#05603A] text-white text-xs font-medium rounded-[8px] transition-colors duration-150 cursor-pointer flex items-center justify-center"
                    >
                      Complete
                    </button>
                    <button 
                      onClick={() => updateTaskStatus(task.id, 'failed')}
                      className="flex-1 h-[38px] bg-white hover:bg-[#FEF3F2] border border-[#E5E2DA] hover:border-[#FECDCA] text-[#B42318] text-xs font-medium rounded-[8px] transition-colors duration-150 cursor-pointer flex items-center justify-center"
                    >
                      Report Block
                    </button>
                  </div>
                )}

                {isCompleted && (
                  <div className="w-full py-2 px-3 text-center bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-xs font-medium rounded-[8px]">
                    ✓ Delivered & Completed
                  </div>
                )}

                {isFailed && (
                  <div className="w-full py-2 px-3 text-center bg-[#FEF3F2] border border-[#FECDCA] text-[#B42318] text-xs font-medium rounded-[8px]">
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
