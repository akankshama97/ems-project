import React from 'react'

const TaskListNumber = ({ data }) => {
  const taskCounts = data?.taskCounts || {
    newTask: 0,
    completed: 0,
    active: 0,
    failed: 0,
  }

  const cards = [
    {
      title: 'New Tasks',
      count: taskCounts.newTask ?? 0,
      subtext: 'Awaiting your acceptance',
      badge: 'bg-[#F2EFE9] text-[#4E4C46] border-[#E5E2DA]',
      valueColor: 'text-[#1C1B18]',
    },
    {
      title: 'In Progress',
      count: taskCounts.active ?? 0,
      subtext: 'Currently being executed',
      badge: 'bg-[#FEF6EE] text-[#B54708] border-[#F9DBAF]',
      valueColor: 'text-[#B54708]',
    },
    {
      title: 'Completed',
      count: taskCounts.completed ?? 0,
      subtext: 'Successfully delivered',
      badge: 'bg-[#ECFDF3] text-[#027A48] border-[#A6F4C5]',
      valueColor: 'text-[#027A48]',
    },
    {
      title: 'Failed / Blocked',
      count: taskCounts.failed ?? 0,
      subtext: 'Issues or blockers reported',
      badge: 'bg-[#FEF3F2] text-[#B42318] border-[#FECDCA]',
      valueColor: 'text-[#B42318]',
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="p-5 rounded-[12px] bg-white border border-[#E5E2DA] hover:border-[#D1CDC4] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors duration-150"
        >
          <div className="flex items-center justify-between mb-3">
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-[4px] border ${card.badge}`}>
              {card.title}
            </span>
          </div>
          <h2 className={`text-3xl lg:text-4xl font-semibold tracking-tight font-heading ${card.valueColor}`}>
            {card.count}
          </h2>
          <p className="text-xs text-[#6B6860] mt-1">
            {card.subtext}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber
