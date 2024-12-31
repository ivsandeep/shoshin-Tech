import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <main className='w-[82%]'>
      <Navbar/>
      <Dashboard/>
      </main>
    </div>
  )
}

export default App