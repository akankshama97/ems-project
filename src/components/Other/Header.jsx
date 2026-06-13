import React from 'react'

const Header = ({ handleLogout, username }) => {
  return (
    <div className='flex items-end justify-between p-8 bg-[#1c1c1c] rounded-xl shadow-md'>
      <h1 className='text-xl font-medium'>
        Welcome Back <br /> 
        <span className='text-3xl font-bold text-emerald-500'>
          {username ? username : 'Admin '}
        </span>
      </h1>
      <button 
        onClick={handleLogout} 
        className='bg-red-600 text-base font-semibold text-white px-5 py-2 rounded-md hover:bg-red-700 transition'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header;