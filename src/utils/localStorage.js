// Initial Admins List - Default Admin Akanksha
export const initialAdmins = [
  {
    id: 1,
    name: 'Akanksha',
    email: 'akanksha@admin.com',
    password: '123',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Akanksha Maurya',
    email: 'admin@me.com',
    password: '123',
    role: 'admin',
  },
]

// Initial Employees List
export const initialEmployees = [
  {
    id: 1,
    name: 'Mahesh Sharma',
    email: 'e1@m.com',
    password: '123',
    role: 'employee',
    department: 'Frontend Engineering',
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        id: 't-1',
        taskTitle: 'Design Modern UI System',
        taskDescription: 'Create responsive, professional enterprise UI components with high-contrast accessibility.',
        taskDate: '2026-11-20',
        category: 'UI/UX',
        priority: 'High',
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 't-2',
        taskTitle: 'Fix Authentication Token Flow',
        taskDescription: 'Streamline multi-user session persistence and seamless role-based routing.',
        taskDate: '2026-11-22',
        category: 'Development',
        priority: 'Medium',
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 't-3',
        taskTitle: 'Performance & Bundle Audit',
        taskDescription: 'Optimize asset loading and achieve sub-second render speeds.',
        taskDate: '2026-11-05',
        category: 'Optimization',
        priority: 'Low',
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Amrita Verma',
    email: 'e2@m.com',
    password: '123',
    role: 'employee',
    department: 'Product Design',
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        id: 't-4',
        taskTitle: 'Figma Dashboard Prototypes',
        taskDescription: 'Finalize high-fidelity interactive wireframes for employee attendance and task tracker.',
        taskDate: '2026-11-21',
        category: 'Design',
        priority: 'High',
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 't-5',
        taskTitle: 'Export Vector Icon Set',
        taskDescription: 'Deliver clean SVG icons matching the new dark professional palette.',
        taskDate: '2026-11-24',
        category: 'Design',
        priority: 'Medium',
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 't-6',
        taskTitle: 'Brand Typography Guidelines',
        taskDescription: 'Document typography hierarchy and layout spacing scale.',
        taskDate: '2026-11-08',
        category: 'Branding',
        priority: 'Low',
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Rahul Nair',
    email: 'e3@m.com',
    password: '123',
    role: 'employee',
    department: 'Backend Architecture',
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        id: 't-7',
        taskTitle: 'Build Scalable REST APIs',
        taskDescription: 'Develop modular endpoints for multi-user authentication and task state changes.',
        taskDate: '2026-11-25',
        category: 'Backend',
        priority: 'High',
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 't-8',
        taskTitle: 'PostgreSQL Database Indexing',
        taskDescription: 'Optimize query execution plans on task status and employee foreign keys.',
        taskDate: '2026-11-02',
        category: 'Database',
        priority: 'Medium',
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        id: 't-9',
        taskTitle: 'Webhook Retry Pipeline',
        taskDescription: 'Legacy webhook timed out due to 3rd party server unavailability.',
        taskDate: '2026-10-28',
        category: 'Integration',
        priority: 'Low',
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    name: 'Priya Singh',
    email: 'e4@m.com',
    password: '123',
    role: 'employee',
    department: 'Quality Assurance',
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        id: 't-10',
        taskTitle: 'End-to-End Regression Testing',
        taskDescription: 'Automate verification of task status transitions from New to Completed.',
        taskDate: '2026-11-26',
        category: 'QA',
        priority: 'High',
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        id: 't-11',
        taskTitle: 'Mobile Responsiveness Check',
        taskDescription: 'Verify task cards scrolling and table wrapping on tablets and mobile screens.',
        taskDate: '2026-11-28',
        category: 'QA',
        priority: 'Medium',
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 't-12',
        taskTitle: 'Cross-Browser Audit',
        taskDescription: 'Ensure zero layout shifts on Safari, Chrome, and Edge.',
        taskDate: '2026-11-09',
        category: 'Testing',
        priority: 'Low',
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    name: 'Karan Verma',
    email: 'e5@m.com',
    password: '123',
    role: 'employee',
    department: 'DevOps & Infrastructure',
    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        id: 't-13',
        taskTitle: 'Setup Cloud CI/CD Pipeline',
        taskDescription: 'Automate build, lint, and deployment workflows with zero downtime.',
        taskDate: '2026-11-29',
        category: 'DevOps',
        priority: 'High',
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        id: 't-14',
        taskTitle: 'SSL & Security Headers',
        taskDescription: 'Configure HTTPS redirection and Content Security Policy headers.',
        taskDate: '2026-11-07',
        category: 'Security',
        priority: 'Medium',
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(initialEmployees))
  localStorage.setItem('admins', JSON.stringify(initialAdmins))
}

export const getLocalStorage = () => {
  let storedEmployees = localStorage.getItem('employees')
  let storedAdmins = localStorage.getItem('admins')

  // Backwards compatibility for single admin object
  if (!storedAdmins) {
    const legacyAdmin = localStorage.getItem('admin')
    if (legacyAdmin) {
      try {
        const parsed = JSON.parse(legacyAdmin)
        storedAdmins = JSON.stringify(Array.isArray(parsed) ? parsed : [parsed])
      } catch {
        storedAdmins = null
      }
    }
  }

  if (!storedEmployees || !storedAdmins) {
    setLocalStorage()
    storedEmployees = localStorage.getItem('employees')
    storedAdmins = localStorage.getItem('admins')
  }

  let parsedEmployees = []
  let parsedAdmins = []

  try {
    parsedEmployees = JSON.parse(storedEmployees) || initialEmployees
  } catch {
    parsedEmployees = initialEmployees
  }

  try {
    parsedAdmins = JSON.parse(storedAdmins) || initialAdmins
    // Ensure Akanksha is always included in admins list
    const hasAkanksha = parsedAdmins.some((a) => a.name.toLowerCase().includes('akanksha'))
    if (!hasAkanksha) {
      parsedAdmins = [...initialAdmins, ...parsedAdmins]
      localStorage.setItem('admins', JSON.stringify(parsedAdmins))
    }
  } catch {
    parsedAdmins = initialAdmins
  }

  return {
    employees: parsedEmployees,
    admins: parsedAdmins,
  }
}
