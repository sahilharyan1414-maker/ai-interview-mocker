import { SignUp } from '@clerk/nextjs'
import React from 'react';
import { Eye, EyeOff, Video, BarChart3, FileText, Target, ArrowRight } from 'lucide-react';
export default function Page() {

  return (<div className="relative min-h-screen w-full bg-[#0a111e] text-white font-sans overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12">

    {/* Background Decorative Tech Elements */}
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

    {/* Abstract Tech Network Lines (Simulated via CSS gradients) */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

    {/* Main Container */}
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

      {/* Left Side: Marketing / App Showcase */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pr-0 lg:pr-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Welcome to <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              AI Interview Ace
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-medium">
            Elevate your interview skills with real-time AI feedback.
          </p>
          <p className="text-sm text-slate-400 max-w-md">
            Join over 50k users who have used our platform to land their dream job.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-4 max-w-lg">
          <div className="flex items-center space-x-4 bg-slate-900/40 border border-slate-800/50 p-4 rounded-xl backdrop-blur-sm transition-all hover:border-blue-500/30">
            <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
              <Video className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-200">Mock Interviews with AI Persona</p>
          </div>

          <div className="flex items-center space-x-4 bg-slate-900/40 border border-slate-800/50 p-4 rounded-xl backdrop-blur-sm transition-all hover:border-cyan-500/30">
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-lg">
              <BarChart3 className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-200">Real-time Articulation & Confidence Metrics</p>
          </div>

          <div className="flex items-center space-x-4 bg-slate-900/40 border border-slate-800/50 p-4 rounded-xl backdrop-blur-sm transition-all hover:border-indigo-500/30">
            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-200">Personalized Feedback Reports</p>
          </div>

          <div className="flex items-center space-x-4 bg-slate-900/40 border border-slate-800/50 p-4 rounded-xl backdrop-blur-sm transition-all hover:border-purple-500/30">
            <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-lg">
              <Target className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-200">Job-Targeted Practice</p>
          </div>
        </div>
      </div>

      {/* Right Side: Glassmorphic Auth Form */}
      <SignUp />

    </div>
  </div>)
}