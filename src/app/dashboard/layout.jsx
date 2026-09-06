import React from 'react'
import Header from "./_components/Header"
const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout