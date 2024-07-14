import React from 'react'
import HeaderDashboard from '../ComponantDashboard/HeaderDashboard'

import { Outlet } from 'react-router-dom'

export default function MainDashboard() {
  
  return (
    <div className='w-[85%] smm:w-[calc(100%-40px)] ml-[15%] smm:ml-[40px]'>
      <HeaderDashboard />
      <Outlet/>
     
    </div>
  )
}
