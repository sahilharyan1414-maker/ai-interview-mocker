import { SignIn } from '@clerk/nextjs'
import React from 'react';
import { Video, BarChart3, FileText, Target } from 'lucide-react';

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-[#0d0a07] text-white font-sans overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12">

      {/* Background Decorative Tech Elements (Shifted to Deep Orange/Amber) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[30%] w-[50%] h-[50%] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />

      {/* Target ambient glow behind the Clerk element to make it blend natively */}
      <div className="absolute right-[-5%] top-[20%] w-[40%] h-[60%] rounded-full bg-gradient-to-br from-orange-500/10 to-amber-600/5 blur-[100px] pointer-events-none hidden lg:block" />

      {/* Abstract Tech Network Lines (Using warm dark borders) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2e1a0515_1px,transparent_1px),linear-gradient(to_bottom,#2e1a0515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Side: Marketing / App Showcase */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pr-0 lg:pr-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Welcome to <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                AI Interview Ace
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-300 max-w-xl font-medium">
              Elevate your interview skills with real-time AI feedback.
            </p>
            <p className="text-sm text-stone-400 max-w-md">
              Join over 50k users who have used our platform to land their dream job.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center space-x-4 bg-stone-900/30 border border-orange-950/40 p-4 rounded-xl backdrop-blur-sm transition-all hover:border-orange-500/30">
              <div className="p-2.5 bg-orange-500/10 text-orange-400 rounded-lg">
                <Video className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base font-medium text-stone-200">Mock Interviews with AI Persona</p>
            </div>

            <div className="flex items-center space-x-4 bg-stone-900/30 border border-amber-950/40 p-4 rounded-xl backdrop-blur-sm transition-all hover:border-amber-500/30">
              <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg">
                <BarChart3 className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base font-medium text-stone-200">Real-time Articulation & Confidence Metrics</p>
            </div>

            <div className="flex items-center space-x-4 bg-stone-900/30 border border-orange-950/40 p-4 rounded-xl backdrop-blur-sm transition-all hover:border-orange-400/30">
              <div className="p-2.5 bg-orange-400/10 text-orange-300 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base font-medium text-stone-200">Personalized Feedback Reports</p>
            </div>

            <div className="flex items-center space-x-4 bg-stone-900/30 border border-yellow-950/40 p-4 rounded-xl backdrop-blur-sm transition-all hover:border-yellow-500/30">
              <div className="p-2.5 bg-yellow-500/10 text-yellow-400 rounded-lg">
                <Target className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base font-medium text-stone-200">Job-Targeted Practice</p>
            </div>
          </div>
        </div>

        {/* Right Side: Wrapped Form Container */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="relative p-1 rounded-3xl group">
            {/* Soft background glow wrapping the Clerk box directly */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <SignIn />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}