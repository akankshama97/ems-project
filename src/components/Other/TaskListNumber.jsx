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
      color: 'text-cyan-400',
      border: 'border-cyan-500/20 hover:border-cyan-500/40',
      badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      gradient: 'from-cyan-500/5 to-transparent',
    },
    {
      title: 'In Progress',
      count: taskCounts.active ?? 0,
      subtext: 'Currently being executed',
      color: 'text-amber-400',
      border: 'border-amber-500/20 hover:border-amber-500/40',
      badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      gradient: 'from-amber-500/5 to-transparent',
    },
    {
      title: 'Completed',
      count: taskCounts.completed ?? 0,
      subtext: 'Successfully delivered',
      color: 'text-emerald-400',
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      gradient: 'from-emerald-500/5 to-transparent',
    },
    {
      title: 'Failed / Blocked',
      count: taskCounts.failed ?? 0,
      subtext: 'Stalled or issues reported',
      color: 'text-rose-400',
      border: 'border-rose-500/20 hover:border-rose-500/40',
      badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      gradient: 'from-rose-500/5 to-transparent',
    },
  ]

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 mt-8 gap-4'>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`p-5 rounded-2xl bg-[#111827] bg-gradient-to-br ${card.gradient} border ${card.border} shadow-lg transition-all duration-200`}
        >
          <div className='flex items-center justify-between mb-3'>
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${card.badge}`}>
              {card.title}
            </span>
          </div>
          <h2 className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${card.color}`}>
            {card.count}
          </h2>
          <p className='text-xs text-slate-400 mt-1 font-medium'>
            {card.subtext}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber
