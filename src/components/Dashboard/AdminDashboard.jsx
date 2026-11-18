import React, { useState } from 'react'
import Header from '../Other/Header'
import AllTask from '../Other/AllTask'

const AdminDashboard = ({ 
  adminName = 'Akanksha', 
  handleLogout, 
  employees = [], 
  createNewTask 
}) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState(employees[0]?.name || '')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [description, setDescription] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title.trim() || !assignTo.trim() || !date) {
      alert('Please fill all required task details!')
      return
    }

    const success = createNewTask({
      taskTitle: title.trim(),
      taskDate: date,
      assignTo: assignTo.trim(),
      category: category.trim() || 'General',
      priority,
      taskDescription: description.trim() || 'No description provided.',
    })

    if (success) {
      setTitle('')
      setDate('')
      setCategory('')
      setDescription('')
      setPriority('Medium')
    }
  }

  // Calculate high-level stats
  const totalEmployees = employees.length
  const totalTasks = employees.reduce((sum, emp) => sum + (emp.tasks?.length || 0), 0)
  const completedTasks = employees.reduce((sum, emp) => sum + (emp.taskCounts?.completed || 0), 0)
  const activeTasks = employees.reduce((sum, emp) => sum + (emp.taskCounts?.active || 0), 0)

  return (
    <div className="min-h-screen w-full bg-[var(--ems-bg,#F7F5F0)] text-[var(--ems-text-primary,#1C1B18)] p-4 sm:p-6 md:p-8 lg:p-10 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <Header 
          handleLogout={handleLogout} 
          username={adminName} 
          role="admin" 
        />

        {/* Enterprise Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-5 rounded-[12px] bg-white border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
            <span className="text-xs font-medium text-[#6B6860] block mb-1">Total Members</span>
            <span className="text-3xl font-semibold text-[#1C1B18] font-heading">{totalEmployees}</span>
            <span className="text-[11px] text-[#8E8A80] block mt-1">Active team directory</span>
          </div>

          <div className="p-5 rounded-[12px] bg-white border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
            <span className="text-xs font-medium text-[#6B6860] block mb-1">Total Tasks</span>
            <span className="text-3xl font-semibold text-[#1C1B18] font-heading">{totalTasks}</span>
            <span className="text-[11px] text-[#8E8A80] block mt-1">Assigned workload</span>
          </div>

          <div className="p-5 rounded-[12px] bg-white border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
            <span className="text-xs font-medium text-[#6B6860] block mb-1">In Progress</span>
            <span className="text-3xl font-semibold text-[#B54708] font-heading">{activeTasks}</span>
            <span className="text-[11px] text-[#8E8A80] block mt-1">Currently being executed</span>
          </div>

          <div className="p-5 rounded-[12px] bg-white border border-[#E5E2DA] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
            <span className="text-xs font-medium text-[#6B6860] block mb-1">Delivered</span>
            <span className="text-3xl font-semibold text-[#027A48] font-heading">{completedTasks}</span>
            <span className="text-[11px] text-[#8E8A80] block mt-1">Completed assignments</span>
          </div>
        </div>

        {/* Create Task Form */}
        <div className="p-6 md:p-8 bg-white border border-[#E5E2DA] mt-8 rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#1C1B18] font-heading">Assign New Task</h2>
            <p className="text-xs text-[#6B6860] mt-1">
              Delegate workload to team members with clear deadlines, instructions, and priority levels.
            </p>
          </div>

          <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between gap-6">
            
            <div className="w-full md:w-[48%] flex flex-col gap-4">
              <div>
                <label className="text-xs font-medium text-[#1C1B18] block mb-1.5">Task Title *</label>
                <input 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                  className="h-[44px] text-sm px-3.5 w-full rounded-[8px] outline-none bg-white border border-[#E5E2DA] hover:border-[#D1CDC4] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-[#1C1B18] placeholder-[#8E8A80] transition-colors duration-150" 
                  type="text" 
                  placeholder="e.g. Design Customer Onboarding Flow" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#1C1B18] block mb-1.5">Due Date *</label>
                  <input 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                    className="h-[44px] text-sm px-3.5 w-full rounded-[8px] outline-none bg-white border border-[#E5E2DA] hover:border-[#D1CDC4] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-[#1C1B18] cursor-pointer transition-colors duration-150" 
                    type="date" 
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1C1B18] block mb-1.5">Priority</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="h-[44px] text-sm px-3 w-full rounded-[8px] outline-none bg-white border border-[#E5E2DA] hover:border-[#D1CDC4] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-[#1C1B18] cursor-pointer transition-colors duration-150"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#1C1B18] block mb-1.5">Assign To *</label>
                  <select
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
                    required
                    className="h-[44px] text-sm px-3 w-full rounded-[8px] outline-none bg-white border border-[#E5E2DA] hover:border-[#D1CDC4] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-[#1C1B18] cursor-pointer transition-colors duration-150"
                  >
                    {employees.map(emp => (
                      <option key={emp.id} value={emp.name}>
                        {emp.name} ({emp.department || 'Employee'})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1C1B18] block mb-1.5">Category</label>
                  <input 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className="h-[44px] text-sm px-3.5 w-full rounded-[8px] outline-none bg-white border border-[#E5E2DA] hover:border-[#D1CDC4] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-[#1C1B18] placeholder-[#8E8A80] transition-colors duration-150" 
                    type="text" 
                    placeholder="e.g. Design, Backend, QA" 
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[48%] flex flex-col items-start h-full justify-between">
              <div className="w-full">
                <label className="text-xs font-medium text-[#1C1B18] block mb-1.5">Task Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  className="w-full h-36 text-sm p-3.5 rounded-[8px] outline-none bg-white border border-[#E5E2DA] hover:border-[#D1CDC4] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-[#1C1B18] resize-none placeholder-[#8E8A80] transition-colors duration-150" 
                  placeholder="Detailed instructions, deliverables, and acceptance criteria..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full h-[44px] mt-4 bg-[var(--ems-accent,#0F766E)] hover:bg-[var(--ems-accent-hover,#115E59)] active:bg-[var(--ems-accent-active,#0D625C)] text-white font-medium text-sm rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors duration-150 cursor-pointer flex items-center justify-center"
              >
                Assign Task to Team Member
              </button>
            </div>

          </form>
        </div>

        {/* All Tasks Table */}
        <AllTask employees={employees} />
      </div>
    </div>
  )
}

export default AdminDashboard
