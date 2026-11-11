# EMS Pro — Employee Management System 🚀

A modern, responsive, and feature-packed Employee & Task Management System built with **React 19**, **Vite**, and **Tailwind CSS v4**.

---

## 📸 Screenshots

<img width="1920" height="1080" alt="Screenshot 2026-06-12 121644" src="https://github.com/user-attachments/assets/44d8e8dc-53e3-40b8-8ebf-b8de36a0d98b" />
<img width="1920" height="1080" alt="Screenshot 2026-06-12 121718" src="https://github.com/user-attachments/assets/d175b3ae-d21e-4839-9ae1-2407fe5664bd" />
<img width="1920" height="1080" alt="Screenshot 2026-06-12 121738" src="https://github.com/user-attachments/assets/5c0cf9b3-0e86-449e-bdb2-dcb4b0a292a3" />

---

## ✨ Key Features

### 1. 🛡️ Administrator Portal (Admin: Akanksha)
- **Real-Time Analytics Overview**:
  - Active Employees count across departments
  - Total tasks tracked
  - Company-wide Task Completion Rate %
  - Monthly Payroll calculator in INR (₹)
- **Task Management**:
  - Assign new tasks with Employee Selector, Category, Priority (High / Medium / Low), and Due Date.
  - Search and filter tasks by status (New, In Progress, Completed, Failed) or by Assignee.
  - Delete / manage tasks with immediate sync to employee state.
- **Team Workload Overview (`AllTask`)**:
  - Real-time status table showing all registered employees with their individual task counts (New, In Progress, Completed, Failed).

### 2. 💼 Employee Workspace
- **Personalized Header & Profile Banner**:
  - Shows Department, Status, and individual workload metrics.
- **Dynamic Interactive Task Counters**:
  - Status metric cards: **New Tasks**, **In Progress**, **Completed**, and **Failed/Blocked**.
- **Actionable Task Cards**:
  - Accept new tasks (transitions to *In Progress*).
  - Mark active tasks as *Completed* or report as *Blocked / Failed*.
  - View task details with formatted deadlines, categories, and priority badges.

### 3. 🔐 Multi-User Authentication & Registration
- **Support for Multiple Admins & Employees**:
  - Dedicated **Sign In** and **Register New User** tabs with interactive hover animations.
  - Anyone can register as an Employee or Administrator and log in right away.
- **1-Click Demo Logins**:
  - **Admin**: `akanksha@admin.com` / `123`
  - **Mahesh (Frontend Dev)**: `e1@m.com` / `123`
  - **Amrita (Lead Designer)**: `e2@m.com` / `123`
  - **Rahul (Backend Eng)**: `e3@m.com` / `123`
- Full session persistence in `localStorage`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (Ultra-Professional Dark SaaS Palette)
- **Typography**: Plus Jakarta Sans
- **Storage**: Browser `localStorage` with multi-user persistence

---

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```
