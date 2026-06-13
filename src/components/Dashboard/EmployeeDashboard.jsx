import React from 'react'
import Header from '../Other/Header';
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout, data }) => {
  return (
    <div className='p-10 bg-[#111] h-screen w-screen overflow-hidden'>
      <Header handleLogout={handleLogout} username={data.name} />
      <TaskListNumber data={data} />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard;