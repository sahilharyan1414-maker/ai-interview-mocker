import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
const page = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-10">
      <h2 className='font-bold text-2xl text-slate-50'>Dashboard</h2>
      <h2 className="mt-1 text-slate-400">Create and start your Ai mockup interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <AddNewInterview />
      </div>
      <InterviewList />
    </div>
  )
}

export default page