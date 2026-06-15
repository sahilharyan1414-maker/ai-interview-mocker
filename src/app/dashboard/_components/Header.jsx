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
        <div className='flex  p-4  justify-between items-center  bg-secondary shadow-md '>
            <img src="/logo.svg" alt="logo" width={120} height={100} />
            <ul className='hidden md:flex gap-10'>
                <Link href='/dashboard'>
                    <li className={`${path == '/dashboard' && 'text-blue-800 font-bold'} hover:text-blue-800 cursor-pointer hover:font-bold transition-all`} >
                        Dashboard
                    </li>
                </Link>
                <Link href='/questions'>
                    <li className={`${path == '/questions' && 'text-blue-800 font-bold'} hover:text-blue-800 cursor-pointer hover:font-bold transition-all`}>
                        Questions
                    </li>
                </Link>
                <Link href='/dashboard/upgrade'>
                    <li className={`${path == '/dashboard/upgrade' && 'text-blue-800 font-bold'} hover:text-blue-800 cursor-pointer hover:font-bold transition-all`}>
                        Upgrade
                    </li>
                </Link>

            </ul>
            <UserButton />
        </div>
    )
}

export default Header;