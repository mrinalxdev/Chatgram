import Messages from '@/components/Chat-Threads/Messages'
import Sidebar from '@/components/SideBar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className=' min-h-screen'>
      <div className='mx-auto flex'>
        <Sidebar />
        <Messages />
      </div>
    </div>
  )
}

export default page