import React, { useState } from 'react'
import Header from '../Other/Header'
const AdminDashboard = ({ handleLogout }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Task "${title}" Created successfully for ${assignTo}!`)
    setTitle('')
    setDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')
  }
  return (
    <div className='min-h-screen w-full p-10 bg-[#111]'>
      <Header handleLogout={handleLogout} />
      <div className='p-8 bg-[#1c1c1c] mt-8 rounded-xl shadow-lg'>
        <h2 className='text-xl font-bold mb-6 text-emerald-400'>Create New Task</h2>
        <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between gap-6'>
          
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <div>
              <label className='text-sm text-gray-400 block mb-1'>Task Title</label>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} required className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent border-2 border-gray-600 focus:border-emerald-500 text-white' type="text" placeholder='Make UI design' />
            </div>
            <div>
              <label className='text-sm text-gray-400 block mb-1'>Date</label>
              <input value={date} onChange={(e)=>setDate(e.target.value)} required className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent border-2 border-gray-600 focus:border-emerald-500 text-white' type="date" />
            </div>
            <div>
              <label className='text-sm text-gray-400 block mb-1'>Assign to</label>
              <input value={assignTo} onChange={(e)=>setAssignTo(e.target.value)} required className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent border-2 border-gray-600 focus:border-emerald-500 text-white' type="text" placeholder='Employee name (Rahul/Amit)' />
            </div>
            <div>
              <label className='text-sm text-gray-400 block mb-1'>Category</label>
              <input value={category} onChange={(e)=>setCategory(e.target.value)} required className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent border-2 border-gray-600 focus:border-emerald-500 text-white' type="text" placeholder='design, dev, etc' />
            </div>
          </div>

          <div className='w-full md:w-[45%] flex flex-col items-start h-full justify-between'>
            <label className='text-sm text-gray-400 block mb-1'>Description</label>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} required className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2 border-gray-600 focus:border-emerald-500 text-white resize-none' placeholder='Detailed description of the task...'></textarea>
            <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-md text-sm font-bold mt-5 w-full text-white transition-all'>Create Task</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdminDashboard;