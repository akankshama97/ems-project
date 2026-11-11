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
    <div className='min-h-screen w-full bg-[#090d16] text-slate-100 p-5 md:p-8 lg:p-10'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Header */}
        <Header 
          handleLogout={handleLogout} 
          username={adminName} 
          role="admin" 
        />

        {/* Quick Enterprise Metric Counters */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
          <div className='p-5 rounded-2xl bg-[#111827] border border-slate-800 shadow-lg'>
            <span className='text-[11px] font-semibold text-slate-400 block mb-1'>Total Members</span>
            <span className='text-3xl font-extrabold text-white'>{totalEmployees}</span>
            <span className='text-[10px] text-slate-500 block mt-0.5'>Active Employees</span>
          </div>

          <div className='p-5 rounded-2xl bg-[#111827] border border-slate-800 shadow-lg'>
            <span className='text-[11px] font-semibold text-cyan-400 block mb-1'>Total Tasks</span>
            <span className='text-3xl font-extrabold text-cyan-400'>{totalTasks}</span>
            <span className='text-[10px] text-slate-500 block mt-0.5'>Assigned Workload</span>
          </div>

          <div className='p-5 rounded-2xl bg-[#111827] border border-slate-800 shadow-lg'>
            <span className='text-[11px] font-semibold text-amber-400 block mb-1'>In Progress</span>
            <span className='text-3xl font-extrabold text-amber-400'>{activeTasks}</span>
            <span className='text-[10px] text-slate-500 block mt-0.5'>Currently Active</span>
          </div>

          <div className='p-5 rounded-2xl bg-[#111827] border border-slate-800 shadow-lg'>
            <span className='text-[11px] font-semibold text-emerald-400 block mb-1'>Delivered</span>
            <span className='text-3xl font-extrabold text-emerald-400'>{completedTasks}</span>
            <span className='text-[10px] text-slate-500 block mt-0.5'>Completed Tasks</span>
          </div>
        </div>

        {/* Create Task Form */}
        <div className='p-6 md:p-8 bg-[#111827] border border-slate-800 mt-8 rounded-2xl shadow-xl'>
          <div className='mb-6'>
            <h2 className='text-xl font-bold text-white'>Assign New Task</h2>
            <p className='text-xs text-slate-400 mt-0.5'>
              Delegate workload to team members with clear deadlines and priority
            </p>
          </div>

          <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between gap-6'>
            
            <div className='w-full md:w-[48%] flex flex-col gap-4'>
              <div>
                <label className='text-xs font-semibold text-slate-300 block mb-1'>Task Title *</label>
                <input 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
                  className='text-sm py-2.5 px-3.5 w-full rounded-xl outline-none bg-[#090d16] border border-slate-700/80 focus:border-indigo-500 text-white placeholder-slate-500 transition' 
                  type="text" 
                  placeholder='e.g. Design Customer Onboarding Flow' 
                />
              </div>
              
              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label className='text-xs font-semibold text-slate-300 block mb-1'>Due Date *</label>
                  <input 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                    className='text-sm py-2 px-3 w-full rounded-xl outline-none bg-[#090d16] border border-slate-700/80 focus:border-indigo-500 text-white cursor-pointer transition' 
                    type="date" 
                  />
                </div>

                <div>
                  <label className='text-xs font-semibold text-slate-300 block mb-1'>Priority</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className='text-sm py-2 px-3 w-full rounded-xl outline-none bg-[#090d16] border border-slate-700/80 focus:border-indigo-500 text-white cursor-pointer transition'
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label className='text-xs font-semibold text-slate-300 block mb-1'>Assign To *</label>
                  <select
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
                    required
                    className='text-sm py-2 px-3 w-full rounded-xl outline-none bg-[#090d16] border border-slate-700/80 focus:border-indigo-500 text-white cursor-pointer transition'
                  >
                    {employees.map(emp => (
                      <option key={emp.id} value={emp.name}>
                        {emp.name} ({emp.department || 'Employee'})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='text-xs font-semibold text-slate-300 block mb-1'>Category</label>
                  <input 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className='text-sm py-2 px-3 w-full rounded-xl outline-none bg-[#090d16] border border-slate-700/80 focus:border-indigo-500 text-white placeholder-slate-500 transition' 
                    type="text" 
                    placeholder='Design, Backend, QA...' 
                  />
                </div>
              </div>
            </div>

            <div className='w-full md:w-[48%] flex flex-col items-start h-full justify-between'>
              <div className='w-full'>
                <label className='text-xs font-semibold text-slate-300 block mb-1'>Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                  className='w-full h-36 text-sm py-2.5 px-3.5 rounded-xl outline-none bg-[#090d16] border border-slate-700/80 focus:border-indigo-500 text-white resize-none placeholder-slate-500 transition' 
                  placeholder='Detailed instructions, deliverables, and acceptance criteria...'
                />
              </div>

              <button 
                type="submit" 
                className='w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-600/25 transition cursor-pointer'
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
