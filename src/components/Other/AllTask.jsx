import React from 'react'

const AllTask = ({ employees = [] }) => {
  return (
    <div className="bg-white border border-[#E5E2DA] p-6 sm:p-8 rounded-[12px] mt-8 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-[#1C1B18] font-heading">Team Workload & Progress</h3>
          <p className="text-xs text-[#6B6860] mt-1">
            Real-time status of assigned tasks across all organization members
          </p>
        </div>
        <span className="text-xs font-medium px-2.5 py-1 bg-[#F2EFE9] text-[#4E4C46] rounded-[6px] border border-[#E5E2DA]">
          {employees.length} {employees.length === 1 ? 'Member' : 'Members'}
        </span>
      </div>
      
      {/* Table Header */}
      <div className="bg-[#F9F8F5] border border-[#E5E2DA] mb-3 py-2.5 px-4 flex justify-between rounded-[8px] text-[11px] font-semibold text-[#6B6860] uppercase tracking-wider">
        <span className="w-2/6 text-left">Employee</span>
        <span className="w-1/6 text-center">New</span>
        <span className="w-1/6 text-center">In Progress</span>
        <span className="w-1/6 text-center">Completed</span>
        <span className="w-1/6 text-center">Failed</span>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-2 max-h-80 overflow-y-auto pr-1">
        {employees.length === 0 ? (
          <p className="text-[#8E8A80] text-xs text-center py-6">No employees registered in the system.</p>
        ) : (
          employees.map((emp) => (
            <div 
              key={emp.id} 
              className="border border-[#E5E2DA] bg-white hover:bg-[#F9F8F5] py-3 px-4 flex justify-between rounded-[8px] text-xs items-center transition-colors duration-150"
            >
              <div className="w-2/6 flex items-center gap-3 text-left">
                <span className="w-7 h-7 rounded-[6px] bg-[#0F3D3A] text-white font-semibold flex items-center justify-center text-[10px] shrink-0">
                  {emp.name ? emp.name.slice(0, 2).toUpperCase() : 'EM'}
                </span>
                <div className="min-w-0 pr-2">
                  <p className="font-medium text-[#1C1B18] text-xs truncate">{emp.name}</p>
                  <p className="text-[11px] text-[#6B6860] truncate">{emp.department || emp.email}</p>
                </div>
              </div>

              <div className="w-1/6 text-center">
                <span className="inline-block px-2.5 py-0.5 rounded-[4px] font-medium text-xs bg-[#F2EFE9] text-[#4E4C46] border border-[#E5E2DA]">
                  {emp.taskCounts?.newTask ?? 0}
                </span>
              </div>

              <div className="w-1/6 text-center">
                <span className="inline-block px-2.5 py-0.5 rounded-[4px] font-medium text-xs bg-[#FEF6EE] text-[#B54708] border border-[#F9DBAF]">
                  {emp.taskCounts?.active ?? 0}
                </span>
              </div>

              <div className="w-1/6 text-center">
                <span className="inline-block px-2.5 py-0.5 rounded-[4px] font-medium text-xs bg-[#ECFDF3] text-[#027A48] border border-[#A6F4C5]">
                  {emp.taskCounts?.completed ?? 0}
                </span>
              </div>

              <div className="w-1/6 text-center">
                <span className="inline-block px-2.5 py-0.5 rounded-[4px] font-medium text-xs bg-[#FEF3F2] text-[#B42318] border border-[#FECDCA]">
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
