"use client"
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const Header = () => {
    const path = usePathname();
    useEffect(() => {
        console.log(path)
    })

    return (
        <div className='flex px-6 py-4 justify-between items-center bg-slate-950 border-b border-slate-800'>
            <img src="/logo.svg" alt="logo" width={120} height={100} />
            <ul className='hidden md:flex gap-8 text-sm text-slate-400'>
                <Link href='/dashboard'>
                    <li className={`${path == '/dashboard' && 'text-sky-400 font-semibold'} hover:text-sky-400 cursor-pointer transition-colors`} >
                        Dashboard
                    </li>
                </Link>
                <Link href='/dashboard/questions'>
                    <li className={`${path == '/questions' && 'text-sky-400 font-semibold'} hover:text-sky-400 cursor-pointer transition-colors`}>
                        Questions
                    </li>
                </Link>
                <Link href='/dashboard/upgrade'>
                    <li className={`${path == '/dashboard/upgrade' && 'text-sky-400 font-semibold'} hover:text-sky-400 cursor-pointer transition-colors`}>
                        Upgrade
                    </li>
                </Link>

            </ul>
            <UserButton />
        </div>
    )
}

export default Header;