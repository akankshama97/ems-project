import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout, data, updateTaskStatus }) => {
  return (
    <div className="min-h-screen w-full bg-[var(--ems-bg,#F7F5F0)] text-[var(--ems-text-primary,#1C1B18)] p-4 sm:p-6 md:p-8 lg:p-10 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header 
          handleLogout={handleLogout} 
          username={data?.name} 
          role="employee" 
        />

        {/* Employee Info Strip */}
        <div className="mt-6 p-4 sm:p-5 bg-white border border-[#E5E2DA] rounded-[12px] flex flex-wrap items-center justify-between gap-4 text-xs shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[#0F3D3A] text-white font-semibold flex items-center justify-center text-xs shrink-0">
              {data?.name?.slice(0, 2).toUpperCase() || 'EM'}
            </div>
            <div>
              <p className="font-semibold text-[#1C1B18] text-sm font-heading">{data?.name}</p>
              <p className="text-[#6B6860] text-xs">{data?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <span className="text-[#8E8A80] text-[11px] block">Department</span>
              <span className="font-medium text-[#1C1B18] text-xs">{data?.department || 'Operations'}</span>
            </div>
            <div>
              <span className="text-[#8E8A80] text-[11px] block">Workspace Status</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5] px-2 py-0.5 rounded-[4px] text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#027A48]" /> Active
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
