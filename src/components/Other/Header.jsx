import React from 'react'

const Header = ({ handleLogout, username, role = 'admin' }) => {
  const isAdmin = role === 'admin'
  const displayName = username || (isAdmin ? 'Akanksha' : 'Team Member')

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 p-5 md:p-6 bg-white border border-[#E5E2DA] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-4">
        {/* Crisp EMS Brand Mark */}
        <div className="w-10 h-10 rounded-[8px] bg-[#0F3D3A] text-white font-semibold text-xs flex items-center justify-center shrink-0 tracking-wider">
          EMS
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-[#1C1B18] font-heading">
              EMS Workspace
            </span>
            <span className="text-xs text-[#8E8A80]">•</span>
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-[4px] border ${
                isAdmin
                  ? 'bg-teal-50 text-[#0F766E] border-teal-200'
                  : 'bg-[#F2EFE9] text-[#4E4C46] border-[#E5E2DA]'
              }`}
            >
              {isAdmin ? 'Administrator Portal' : 'Employee Workspace'}
            </span>
          </div>
          <h1 className="text-lg md:text-xl font-semibold text-[#1C1B18] font-heading">
            Welcome back, <span className="text-[#0F766E]">{displayName}</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={handleLogout} 
          className="h-[38px] px-3.5 text-xs font-medium text-[#6B6860] hover:text-[#B42318] bg-white hover:bg-[#FEF3F2] border border-[#E5E2DA] hover:border-[#FECDCA] rounded-[8px] transition-colors duration-150 cursor-pointer flex items-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          <span>Sign Out</span>
        </button>
      </div>
    </header>
  )
}

export default Header
