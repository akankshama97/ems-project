import { useState } from 'react'

export default function Login({ handleLogin, handleRegister }) {
  const [isRegistering, setIsRegistering] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('employee') // 'employee' | 'admin'
  const [department, setDepartment] = useState('Frontend Engineering')
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setError('')
    setSuccessMsg('')

    if (isRegistering) {
      if (!name.trim() || !email.trim() || !password.trim()) {
        setError('Please fill in all required fields.')
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

      setSuccessMsg('Account created successfully. Logging you in...')
      setTimeout(() => {
        handleLogin(email.trim().toLowerCase(), password.trim())
      }, 500)
    } else {
      if (!email.trim() || !password.trim()) {
        setError('Please enter your work email and password.')
        return
      }

      const success = handleLogin(email.trim().toLowerCase(), password.trim())
      if (!success) {
        setError('Invalid email or password. Please verify your details or use demo access below.')
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
    <div className="min-h-screen flex flex-col lg:flex-row bg-[var(--ems-bg,#F7F5F0)] text-[var(--ems-text-primary,#1C1B18)] font-body">
      
      {/* Left Panel: Desktop Solid Brand Panel (#0F3D3A) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[var(--ems-panel-bg,#0F3D3A)] text-white flex-col justify-between p-12 xl:p-16 select-none">
        
        {/* Brand / Logo */}
        <div>
          <div className="inline-flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] bg-white/10 border border-white/15 flex items-center justify-center font-semibold text-xs tracking-wider text-white">
              EMS
            </div>
            <span className="font-heading font-semibold text-lg tracking-tight text-white">
              EMS Workspace
            </span>
          </div>
        </div>

        {/* Hero Copy & 3 Structured Feature Lines */}
        <div className="max-w-md my-auto py-12">
          <h1 className="font-heading text-3xl xl:text-4xl font-semibold leading-tight text-white mb-4">
            {isRegistering 
              ? 'Join your team workspace and start collaborating.' 
              : 'Streamlined operations for modern teams.'}
          </h1>
          <p className="text-sm leading-relaxed text-[#A3C9C5] mb-10">
            {isRegistering 
              ? 'Register your profile to access tasks, share status updates, and coordinate with administrators.' 
              : 'A single, focused workspace to coordinate task lifecycles, monitor progress, and manage departmental responsibilities.'}
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-[4px] bg-[#115E59] border border-teal-600/30 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Assign tasks</div>
                <div className="text-xs text-[#A3C9C5] mt-0.5">Direct assignment with clear priority levels and scope.</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-[4px] bg-[#115E59] border border-teal-600/30 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Track progress</div>
                <div className="text-xs text-[#A3C9C5] mt-0.5">Real-time status visibility across active and completed tasks.</div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-[4px] bg-[#115E59] border border-teal-600/30 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Manage team</div>
                <div className="text-xs text-[#A3C9C5] mt-0.5">Structured employee directory and role-based permissions.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-xs text-[#A3C9C5]/80 flex items-center justify-between border-t border-teal-800/60 pt-6">
          <span>Enterprise Management Suite</span>
          <span>v2.4</span>
        </div>
      </div>

      {/* Right Panel: Left-aligned Login Form (Stacked on Mobile) */}
      <div className="w-full lg:w-1/2 flex items-center justify-start p-6 sm:p-10 lg:p-12 xl:p-16 overflow-y-auto">
        <div className="w-full max-w-[440px] lg:mr-auto">
          
          {/* Mobile Brand Header */}
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="w-8 h-8 rounded-[8px] bg-[#0F3D3A] flex items-center justify-center font-semibold text-xs tracking-wider text-white">
              EMS
            </div>
            <span className="font-heading font-semibold text-base tracking-tight text-[var(--ems-text-primary,#1C1B18)]">
              EMS Workspace
            </span>
          </div>

          {/* Form Surface Card: 1px border, no blur, no glow, max soft shadow */}
          <div className="bg-[var(--ems-surface,#FFFFFF)] border border-[var(--ems-border,#E5E2DA)] rounded-[12px] p-6 sm:p-8 shadow-[var(--ems-shadow-soft,0_1px_2px_rgba(0,0,0,0.06))]">
            
            {/* Heading and Subtitle */}
            <div className="mb-6">
              <h2 className="font-heading text-2xl font-semibold text-[var(--ems-text-primary,#1C1B18)] tracking-normal">
                {isRegistering ? 'Create your workspace account' : 'Sign in to your workspace'}
              </h2>
              <p className="text-sm text-[var(--ems-text-secondary,#6B6860)] mt-1.5 leading-normal">
                {isRegistering 
                  ? 'Enter your details to register as an administrator or employee.' 
                  : 'Enter your credentials to access your account.'}
              </p>
            </div>

            {/* Underlined Tabs (Sign In / Register) */}
            <div className="flex border-b border-[var(--ems-border,#E5E2DA)] mb-6">
              <button
                type="button"
                onClick={() => { setIsRegistering(false); setError(''); setSuccessMsg(''); }}
                className={`pb-2.5 px-1 mr-6 text-sm font-medium transition-colors duration-150 cursor-pointer border-b-2 -mb-[1px] ${
                  !isRegistering
                    ? 'text-[var(--ems-accent,#0F766E)] border-[var(--ems-accent,#0F766E)]'
                    : 'text-[var(--ems-text-secondary,#6B6860)] border-transparent hover:text-[var(--ems-text-primary,#1C1B18)]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => { setIsRegistering(true); setError(''); setSuccessMsg(''); }}
                className={`pb-2.5 px-1 text-sm font-medium transition-colors duration-150 cursor-pointer border-b-2 -mb-[1px] ${
                  isRegistering
                    ? 'text-[var(--ems-accent,#0F766E)] border-[var(--ems-accent,#0F766E)]'
                    : 'text-[var(--ems-text-secondary,#6B6860)] border-transparent hover:text-[var(--ems-text-primary,#1C1B18)]'
                }`}
              >
                Register
              </button>
            </div>

            {/* Error / Success Feedback Alerts */}
            {error && (
              <div className="mb-5 p-3 rounded-[8px] bg-[var(--ems-danger-bg,#FEF3F2)] border border-[var(--ems-danger-border,#FECDCA)] text-xs text-[var(--ems-danger,#B42318)] font-medium leading-relaxed">
                {error}
              </div>
            )}
            {successMsg && (
              <div className="mb-5 p-3 rounded-[8px] bg-[var(--ems-success-bg,#ECFDF3)] border border-[var(--ems-success-border,#A6F4C5)] text-xs text-[var(--ems-success,#027A48)] font-medium leading-relaxed">
                {successMsg}
              </div>
            )}

            {/* Authentication Form */}
            <form onSubmit={submitHandler} className="space-y-4">
              {isRegistering && (
                <div>
                  <label className="block text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Akanksha Maurya"
                    className="w-full h-[44px] px-3.5 bg-white border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-sm text-[var(--ems-text-primary,#1C1B18)] placeholder-[var(--ems-text-muted,#8E8A80)] focus:outline-none focus:border-[var(--ems-accent,#0F766E)] focus:ring-1 focus:ring-[var(--ems-accent,#0F766E)] transition-colors duration-150"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] mb-1.5">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full h-[44px] px-3.5 bg-white border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-sm text-[var(--ems-text-primary,#1C1B18)] placeholder-[var(--ems-text-muted,#8E8A80)] focus:outline-none focus:border-[var(--ems-accent,#0F766E)] focus:ring-1 focus:ring-[var(--ems-accent,#0F766E)] transition-colors duration-150"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-[44px] px-3.5 bg-white border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-sm text-[var(--ems-text-primary,#1C1B18)] placeholder-[var(--ems-text-muted,#8E8A80)] focus:outline-none focus:border-[var(--ems-accent,#0F766E)] focus:ring-1 focus:ring-[var(--ems-accent,#0F766E)] transition-colors duration-150"
                />
              </div>

              {isRegistering && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] mb-1.5">
                      Account role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full h-[44px] px-3 bg-white border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-sm text-[var(--ems-text-primary,#1C1B18)] focus:outline-none focus:border-[var(--ems-accent,#0F766E)] focus:ring-1 focus:ring-[var(--ems-accent,#0F766E)] transition-colors duration-150 cursor-pointer"
                    >
                      <option value="employee">Employee</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </div>

                  {role === 'employee' && (
                    <div>
                      <label className="block text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] mb-1.5">
                        Department
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full h-[44px] px-3 bg-white border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-sm text-[var(--ems-text-primary,#1C1B18)] focus:outline-none focus:border-[var(--ems-accent,#0F766E)] focus:ring-1 focus:ring-[var(--ems-accent,#0F766E)] transition-colors duration-150 cursor-pointer"
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
                className="w-full h-[44px] mt-2 bg-[var(--ems-accent,#0F766E)] hover:bg-[var(--ems-accent-hover,#115E59)] active:bg-[var(--ems-accent-active,#0D625C)] text-white text-sm font-medium rounded-[8px] transition-colors duration-150 cursor-pointer flex items-center justify-center"
              >
                {isRegistering ? 'Create account' : 'Sign in'}
              </button>
            </form>

            {/* Demo Accounts Section */}
            {!isRegistering && (
              <div className="mt-8 pt-6 border-t border-[var(--ems-border,#E5E2DA)]">
                <div className="text-xs font-medium text-[var(--ems-text-secondary,#6B6860)] mb-3">
                  Demo accounts
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Akanksha - Admin */}
                  <button
                    type="button"
                    onClick={() => fillDemo('akanksha@admin.com')}
                    className="flex items-center justify-between p-2.5 bg-white hover:bg-[#F9F8F5] border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-left transition-colors duration-150 cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] truncate">
                        Akanksha
                      </div>
                      <div className="text-[11px] text-[var(--ems-text-secondary,#6B6860)] truncate">
                        akanksha@admin.com
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-[4px] bg-[var(--ems-badge-bg,#F2EFE9)] text-[var(--ems-badge-text,#4E4C46)] border border-[var(--ems-border,#E5E2DA)]">
                      Admin
                    </span>
                  </button>

                  {/* Mahesh - Employee */}
                  <button
                    type="button"
                    onClick={() => fillDemo('e1@m.com')}
                    className="flex items-center justify-between p-2.5 bg-white hover:bg-[#F9F8F5] border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-left transition-colors duration-150 cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] truncate">
                        Mahesh
                      </div>
                      <div className="text-[11px] text-[var(--ems-text-secondary,#6B6860)] truncate">
                        e1@m.com
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-[4px] bg-[var(--ems-badge-bg,#F2EFE9)] text-[var(--ems-badge-text,#4E4C46)] border border-[var(--ems-border,#E5E2DA)]">
                      Employee
                    </span>
                  </button>

                  {/* Amrita - Employee */}
                  <button
                    type="button"
                    onClick={() => fillDemo('e2@m.com')}
                    className="flex items-center justify-between p-2.5 bg-white hover:bg-[#F9F8F5] border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-left transition-colors duration-150 cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] truncate">
                        Amrita
                      </div>
                      <div className="text-[11px] text-[var(--ems-text-secondary,#6B6860)] truncate">
                        e2@m.com
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-[4px] bg-[var(--ems-badge-bg,#F2EFE9)] text-[var(--ems-badge-text,#4E4C46)] border border-[var(--ems-border,#E5E2DA)]">
                      Employee
                    </span>
                  </button>

                  {/* Rahul - Employee */}
                  <button
                    type="button"
                    onClick={() => fillDemo('e3@m.com')}
                    className="flex items-center justify-between p-2.5 bg-white hover:bg-[#F9F8F5] border border-[var(--ems-border,#E5E2DA)] hover:border-[var(--ems-border-hover,#D1CDC4)] rounded-[8px] text-left transition-colors duration-150 cursor-pointer"
                  >
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-medium text-[var(--ems-text-primary,#1C1B18)] truncate">
                        Rahul
                      </div>
                      <div className="text-[11px] text-[var(--ems-text-secondary,#6B6860)] truncate">
                        e3@m.com
                      </div>
                    </div>
                    <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-[4px] bg-[var(--ems-badge-bg,#F2EFE9)] text-[var(--ems-badge-text,#4E4C46)] border border-[var(--ems-border,#E5E2DA)]">
                      Employee
                    </span>
                  </button>
                </div>

                {/* Muted Default Password Note */}
                <p className="text-[11px] text-[var(--ems-text-secondary,#6B6860)] mt-3">
                  Default password for demo accounts is <span className="font-medium text-[var(--ems-text-primary,#1C1B18)]">123</span>
                </p>
              </div>
            )}

            {/* Bottom Mode Switch Link */}
            <div className="mt-6 pt-5 border-t border-[var(--ems-border,#E5E2DA)] text-center text-xs text-[var(--ems-text-secondary,#6B6860)]">
              {!isRegistering ? (
                <span>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => { setIsRegistering(true); setError(''); setSuccessMsg(''); }}
                    className="font-medium text-[var(--ems-accent,#0F766E)] hover:text-[var(--ems-accent-hover,#115E59)] hover:underline cursor-pointer"
                  >
                    Register new user
                  </button>
                </span>
              ) : (
                <span>
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => { setIsRegistering(false); setError(''); setSuccessMsg(''); }}
                    className="font-medium text-[var(--ems-accent,#0F766E)] hover:text-[var(--ems-accent-hover,#115E59)] hover:underline cursor-pointer"
                  >
                    Sign in to your account
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
