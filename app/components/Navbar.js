"use client"
import Link from 'next/link'
import { useState } from 'react'
import Sidebar from './Sidebar'
import NavbarMobile from './NavbarMobile'

export default function Navbar() {
  const navLink = ['/', '/services', '/news', '/contact']
  const navName = ['หน้าหลัก', 'บริการของเรา', 'ข่าวสาร', 'ติดต่อเรา']
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav>
      <div className='z-50 flex justify-center md:justify-between py-4 md:px-10 lg:justify-between items-center w-full top-0 fixed border-b bg-white'>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='hidden sm:hidden md:block focus:opacity-0 lg:hidden hover:bg-gray-100 p-1 rounded-full cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#000" d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"/></svg>
            </button>
            <Link href={navLink[0]} className='text-2xl font-semibold text-blue-400 dark:text-white cursor-pointer'>Sabai Senpom</Link>
            <div></div>
          <div className='hidden sm:hidden md:hidden md:items-center md:justify-between lg:flex item-center gap-10'>
              <Link href={navLink[0]} className='hover:text-blue-400'>{navName[0]}</Link>
              <Link href={navLink[1]} className='hover:text-blue-400'>{navName[1]}</Link>
              <Link href={navLink[2]} className='hover:text-blue-400'>{navName[2]}</Link>
              <Link href={navLink[3]} className='hover:text-blue-400'>{navName[3]}</Link>
          </div>
      </div>
      <div className="blok md:hidden lg:-hidden">
        <NavbarMobile navLink={navLink} />
      </div>
      <div className='w-full h-0 fixed top-0 left-0 z-20'>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} navLink={navLink} navName={navName} />
      </div>
    </nav>
  )
}