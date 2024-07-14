import React from 'react'
import SideBarDashboard from '../SideBarDashboard/SideBarDashboard'
import MainDashboard from '../MainDashboard/MainDashboard'

export default function HomeDashboard() {
  return (
    <div className="flex bg-primaryDashboard w-full min-h-screen">
      <SideBarDashboard />
      <MainDashboard />
    </div>
  );
}
