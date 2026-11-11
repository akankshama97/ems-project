import React, { useState } from 'react'

export default function Login({ handleLogin, handleRegister }) {
  const [isRegistering, setIsRegistering] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('employee') // 'employee' | 'admin'
  const [department, setDepartment] = useState('Engineering')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setError('')
    setSuccessMsg('')

    if (isRegistering) {
      if (!name.trim() || !email.trim() || !password.trim()) {
        setError('Please fill all required fields.')
        return
      }

      const res = handleRegister({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
        role,
        department: role === 'employee' ? department : 'Administration',
      })

      if (!res.success) {
        setError(res.message || 'Registration failed.')
        return
      }

      setSuccessMsg('Account created successfully! Logging you in...')
      setTimeout(() => {
        handleLogin(email.trim().toLowerCase(), password.trim())
      }, 500)
    } else {
      if (!email.trim() || !password.trim()) {
        setError('Please enter your email and password.')
        return
      }

      const success = handleLogin(email.trim().toLowerCase(), password.trim())
      if (!success) {
        setError('Invalid email or password. Please verify or use the demo buttons below.')
      }
    }
  }

  const fillDemo = (demoEmail, demoPass = '123') => {
    setIsRegistering(false)
    setEmail(demoEmail)
    setPassword(demoPass)
    setError('')
    setSuccessMsg('')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090d16] px-4 py-8 relative overflow-hidden text-slate-100">
      {/* Subtle modern ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[320px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md rounded-3xl bg-[#111827]/95 backdrop-blur-2xl p-8 sm:p-9 shadow-2xl border border-slate-800/90 relative z-10 transition-all duration-300">
        
        {/* Brand Header with Glowing Emblem & Hover Animation */}
        <div className="text-center mb-6">
          <div className="relative group mx-auto mb-4 inline-block">
            {/* Ambient hover glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 rounded-2xl blur-md opacity-60 group-hover:opacity-100 group-hover:scale-110 transition duration-500" />
            
            {/* Icon Card */}
            <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#090d16] border border-slate-700/80 text-white font-black text-xl tracking-wider shadow-xl group-hover:border-indigo-500/80 transition-colors duration-300">
              <span className="bg-gradient-to-tr from-indigo-400 via-sky-300 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                EMS
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1.5">
            <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              {isRegistering ? 'Create Your Account' : 'Welcome to EMS'}
            </span>
          </h2>
          <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
            {isRegistering 
              ? 'Register as an Admin or Employee to access your workspace' 
              : 'Enterprise Employee & Task Management Workspace'}
          </p>
        </div>

        {/* Auth Mode Toggle Tabs with High-Quality Interactive Hover & Active States */}
        <div className="flex bg-[#090d16] p-1.5 rounded-2xl mb-6 border border-slate-800 shadow-inner">
          <button
            type="button"
            onClick={() => { setIsRegistering(false); setError(''); setSuccessMsg(''); }}
            className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              !isRegistering 
                ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]' 
                : 'text-slate-400 hover:text-white hover:bg-slate-850 hover:bg-slate-800/70 hover:scale-[1.01]'
            }`}
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Sign In</span>
          </button>

          <button
            type="button"
            onClick={() => { setIsRegistering(true); setError(''); setSuccessMsg(''); }}
            className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              isRegistering 
                ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]' 
                : 'text-slate-400 hover:text-white hover:bg-slate-850 hover:bg-slate-800/70 hover:scale-[1.01]'
            }`}
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>Register New User</span>
          </button>
        </div>

        {/* Feedback Alerts */}
        {error && (
          <div className="mb-4 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs p-3 rounded-xl text-center font-medium">
            {error}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs p-3 rounded-xl text-center font-medium">
            {successMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-4">
          {isRegistering && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Akanksha Maurya"
                className="w-full px-3.5 py-2.5 bg-[#090d16] border border-slate-700/80 hover:border-slate-600 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isRegistering ? "user@company.com" : "akanksha@admin.com or e1@m.com"}
              className="w-full px-3.5 py-2.5 bg-[#090d16] border border-slate-700/80 hover:border-slate-600 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-300">Password</label>
              {!isRegistering && <span className="text-[11px] text-slate-500">Default: 123</span>}
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 bg-[#090d16] border border-slate-700/80 hover:border-slate-600 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
            />
          </div>

          {isRegistering && (
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Account Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#090d16] border border-slate-700/80 hover:border-slate-600 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer transition-all duration-200"
                >
                  <option value="employee">Employee</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              {role === 'employee' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Department</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#090d16] border border-slate-700/80 hover:border-slate-600 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer transition-all duration-200"
                  >
                    <option value="Frontend Engineering">Frontend</option>
                    <option value="Backend Architecture">Backend</option>
                    <option value="Product Design">Design</option>
                    <option value="Quality Assurance">QA</option>
                    <option value="DevOps & Cloud">DevOps</option>
                  </select>
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 active:scale-[0.99] text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:scale-[1.01] transition-all duration-200 cursor-pointer text-sm"
          >
            {isRegistering ? 'Complete Registration' : 'Sign In to Workspace'}
          </button>
        </form>

        {/* Quick Demo Helper with Interactive Hover Cards */}
        {!isRegistering && (
          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <p className="text-[11px] font-semibold text-slate-400 mb-2.5">
              Instant Demo Access (Click to autofill):
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => fillDemo('akanksha@admin.com')}
                className="text-left px-3.5 py-2.5 bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/50 rounded-xl text-xs font-medium text-slate-200 transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-indigo-500/10 active:scale-[0.98] group"
              >
                <div className="font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">Admin: Akanksha</div>
                <div className="text-[10px] text-slate-400">akanksha@admin.com</div>
              </button>

              <button
                type="button"
                onClick={() => fillDemo('e1@m.com')}
                className="text-left px-3.5 py-2.5 bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl text-xs font-medium text-slate-200 transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-cyan-500/10 active:scale-[0.98] group"
              >
                <div className="font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">Employee: Mahesh</div>
                <div className="text-[10px] text-slate-400">e1@m.com</div>
              </button>

              <button
                type="button"
                onClick={() => fillDemo('e2@m.com')}
                className="text-left px-3.5 py-2.5 bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-xl text-xs font-medium text-slate-200 transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-amber-500/10 active:scale-[0.98] group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition-colors">Employee: Amrita</div>
                <div className="text-[10px] text-slate-400">e2@m.com</div>
              </button>

              <button
                type="button"
                onClick={() => fillDemo('e3@m.com')}
                className="text-left px-3.5 py-2.5 bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 rounded-xl text-xs font-medium text-slate-200 transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-md hover:shadow-emerald-500/10 active:scale-[0.98] group"
              >
                <div className="font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">Employee: Rahul</div>
                <div className="text-[10px] text-slate-400">e3@m.com</div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
