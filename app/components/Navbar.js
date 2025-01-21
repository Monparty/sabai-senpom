"use client"

import Link from 'next/link'
import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Navbar() {
  const navLink = ['/', 'services']
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav>
          <div className='z-20 flex justify-center md:justify-between py-4 md:px-10 lg:justify-between items-center w-full top-0 fixed border-b bg-white'>
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='hidden sm:hidden md:block focus:opacity-0 lg:hidden hover:bg-gray-100 p-1 rounded-full cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#000" d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"/></svg>
                </button>
                <Link href={navLink[0]} className='text-2xl font-semibold text-blue-400 dark:text-white cursor-pointer'>Sabai Senpom</Link>
                <div></div>
              <div className='hidden sm:hidden md:hidden md:items-center md:justify-between lg:flex item-center gap-10'>
                  <Link href={navLink[0]} className='hover:text-blue-400'>หน้าหลัก</Link>
                  <Link href={navLink[1]} className='hover:text-blue-400'>บริการของเรา</Link>
                  <Link href="/" className='hover:text-blue-400'>ข่าวสาร</Link>
                  <Link href="/" className='hover:text-blue-400'>ติดต่อเรา</Link>
              </div>
          </div>
          <div className="blok md:hidden lg:-hidden">
            <div className="z-20 fixed w-full bottom-0 py-3 px-5 flex justify-between items-center border-t bg-white">
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>
                </Link>
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M20 3H4a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.72V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.72A2 2 0 0 0 22 7V5a2 2 0 0 0-2-2M4 5h16v2H4zm1 14V9h14v10z"/><path fill="#000" d="M8 11h8v2H8z"/></svg>
                </Link>
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-4"/><path d="M3 4h14v14a2 2 0 0 0 2 2v0M13 8H7m6 4H9"/></g></svg>
                </Link>
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4zm3-2h6q.425 0 .713-.288T14 13t-.288-.712T13 12H7q-.425 0-.712.288T6 13t.288.713T7 14m0-3h10q.425 0 .713-.288T18 10t-.288-.712T17 9H7q-.425 0-.712.288T6 10t.288.713T7 11m0-3h10q.425 0 .713-.288T18 7t-.288-.712T17 6H7q-.425 0-.712.288T6 7t.288.713T7 8"/></svg>
                </Link>
            </div>
          </div>
          <div className='w-full h-0 fixed top-0 left-0 z-10'>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          </div>
        </nav>
    )
}