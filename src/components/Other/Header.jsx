import React from 'react'

const Header = ({ handleLogout, username, role = 'admin' }) => {
  const isAdmin = role === 'admin'
  const displayName = username || (isAdmin ? 'Akanksha' : 'Team Member')

  return (
    <header className='flex items-center justify-between p-5 md:p-6 bg-[#111827] border border-slate-800 rounded-2xl shadow-xl'>
      <div>
        <div className='flex items-center gap-2.5 mb-1'>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
            isAdmin 
              ? 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30' 
              : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
          }`}>
            {isAdmin ? 'Administrator Portal' : 'Employee Workspace'}
          </span>
        </div>
        <h1 className='text-lg md:text-2xl font-bold text-white'>
          Welcome Back, <span className={isAdmin ? 'text-indigo-400' : 'text-emerald-400'}>{displayName}</span> 👋
        </h1>
      </div>

      <button 
        onClick={handleLogout} 
        className='px-4 py-2 text-xs md:text-sm font-semibold text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl transition duration-150 cursor-pointer'
      >
        Log Out
      </button>
    </header>
  )
}

export default Header
