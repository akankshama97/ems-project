import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage } from './utils/localStorage'

export default function App() {
  const [user, setUser] = useState(null) // 'admin' | 'employee' | null
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [employeesData, setEmployeesData] = useState([])
  const [adminsData, setAdminsData] = useState([])

  // Load registered admins and employees from localStorage
  useEffect(() => {
    const { employees, admins } = getLocalStorage()
    setEmployeesData(employees)
    setAdminsData(admins)

    const savedUser = localStorage.getItem('loggedInUser')
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser)
        if (parsed?.role === 'admin') {
          setUser('admin')
          setLoggedInUserData(parsed.data || { name: 'Akanksha' })
        } else if (parsed?.role === 'employee') {
          setUser('employee')
          const currentEmp = employees.find((e) => e.id === parsed.data?.id) || parsed.data
          setLoggedInUserData(currentEmp)
        }
      } catch (err) {
        console.error('Session parse error:', err)
      }
    }
  }, [])

  // Multi-user Login Handler
  const handleLogin = (email, password) => {
    const cleanEmail = email.trim().toLowerCase()
    const cleanPass = password.trim()

    // 1. Check in Admins list (including Akanksha)
    const matchedAdmin = adminsData.find(
      (a) => a.email.toLowerCase() === cleanEmail && a.password === cleanPass
    )
    if (matchedAdmin) {
      setUser('admin')
      setLoggedInUserData(matchedAdmin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: matchedAdmin }))
      return true
    }

    // 2. Check in Employees list
    const matchedEmp = employeesData.find(
      (e) => e.email.toLowerCase() === cleanEmail && e.password === cleanPass
    )
    if (matchedEmp) {
      setUser('employee')
      setLoggedInUserData(matchedEmp)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: matchedEmp }))
      return true
    }

    return false
  }

  // Multi-user Registration Handler
  const handleRegister = (newUser) => {
    const cleanEmail = newUser.email.trim().toLowerCase()

    // Check if email already taken
    const adminExists = adminsData.some((a) => a.email.toLowerCase() === cleanEmail)
    const empExists = employeesData.some((e) => e.email.toLowerCase() === cleanEmail)

    if (adminExists || empExists) {
      return { success: false, message: 'This email is already registered. Please sign in.' }
    }

    if (newUser.role === 'admin') {
      const newAdmin = {
        id: Date.now(),
        name: newUser.name,
        email: cleanEmail,
        password: newUser.password,
        role: 'admin',
      }
      const updatedAdmins = [...adminsData, newAdmin]
      setAdminsData(updatedAdmins)
      localStorage.setItem('admins', JSON.stringify(updatedAdmins))
      return { success: true }
    } else {
      const newEmp = {
        id: Date.now(),
        name: newUser.name,
        email: cleanEmail,
        password: newUser.password,
        role: 'employee',
        department: newUser.department || 'Engineering',
        taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
        tasks: [],
      }
      const updatedEmployees = [...employeesData, newEmp]
      setEmployeesData(updatedEmployees)
      localStorage.setItem('employees', JSON.stringify(updatedEmployees))
      return { success: true }
    }
  }

  // Logout Handler
  const handleLogout = () => {
    setUser(null)
    setLoggedInUserData(null)
    localStorage.setItem('loggedInUser', '')
  }

  // Admin creates a task and assigns to an employee
  const createNewTask = (taskData) => {
    const targetEmp = employeesData.find(
      (e) => e.name.toLowerCase().trim() === taskData.assignTo.toLowerCase().trim()
    )

    if (!targetEmp) {
      alert(`Employee "${taskData.assignTo}" not found in team directory!`)
      return false
    }

    const newTask = {
      id: `task-${Date.now()}`,
      taskTitle: taskData.taskTitle,
      taskDescription: taskData.taskDescription,
      taskDate: taskData.taskDate,
      category: taskData.category,
      priority: taskData.priority || 'Medium',
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    }

    const updatedEmployees = employeesData.map((emp) => {
      if (emp.id === targetEmp.id) {
        const tasks = [newTask, ...(emp.tasks || [])]
        const taskCounts = {
          ...emp.taskCounts,
          newTask: (emp.taskCounts?.newTask || 0) + 1,
        }
        return {
          ...emp,
          tasks,
          taskCounts,
        }
      }
      return emp
    })

    setEmployeesData(updatedEmployees)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    alert(`Task "${taskData.taskTitle}" assigned to ${targetEmp.name} successfully!`)
    return true
  }

  // Employee updates status of a task
  const updateTaskStatus = (taskId, newStatus) => {
    if (!loggedInUserData) return

    let updatedCurrentEmp = null

    const updatedEmployees = employeesData.map((emp) => {
      if (emp.id === loggedInUserData.id) {
        let counts = { ...(emp.taskCounts || { active: 0, newTask: 0, completed: 0, failed: 0 }) }

        const updatedTasks = (emp.tasks || []).map((t) => {
          if (t.id === taskId) {
            if (newStatus === 'active') {
              if (t.newTask || t.status === 'newTask') counts.newTask = Math.max(0, counts.newTask - 1)
              counts.active = (counts.active || 0) + 1
              return { ...t, active: true, newTask: false, completed: false, failed: false }
            }
            if (newStatus === 'completed') {
              if (t.active || t.status === 'active') counts.active = Math.max(0, counts.active - 1)
              counts.completed = (counts.completed || 0) + 1
              return { ...t, active: false, newTask: false, completed: true, failed: false }
            }
            if (newStatus === 'failed') {
              if (t.active || t.status === 'active') counts.active = Math.max(0, counts.active - 1)
              counts.failed = (counts.failed || 0) + 1
              return { ...t, active: false, newTask: false, completed: false, failed: true }
            }
          }
          return t
        })

        updatedCurrentEmp = {
          ...emp,
          tasks: updatedTasks,
          taskCounts: counts,
        }
        return updatedCurrentEmp
      }
      return emp
    })

    if (updatedCurrentEmp) {
      setLoggedInUserData(updatedCurrentEmp)
      setEmployeesData(updatedEmployees)
      localStorage.setItem('employees', JSON.stringify(updatedEmployees))
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: updatedCurrentEmp })
      )
    }
  }

  return (
    <div className='min-h-screen bg-[#090d16] text-slate-100 font-sans antialiased'>
      {!user && (
        <Login 
          handleLogin={handleLogin} 
          handleRegister={handleRegister} 
        />
      )}

      {user === 'admin' && (
        <AdminDashboard 
          adminName={loggedInUserData?.name || 'Akanksha'}
          handleLogout={handleLogout} 
          employees={employeesData} 
          createNewTask={createNewTask} 
        />
      )}

      {user === 'employee' && loggedInUserData && (
        <EmployeeDashboard 
          handleLogout={handleLogout} 
          data={loggedInUserData} 
          updateTaskStatus={updateTaskStatus} 
        />
      )}
    </div>
  )
}
