"use client";
import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar({ isOpen, setIsOpen }) {
  const sidebarRef = useRef(null);

  // Close the sidebar when clicking outside of it or on a menu item
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.tagName !== 'A' // Except for anchor tags (menu items)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className={`flex ${isOpen ? 'w-full' : 'w-0'} transition-all duration-200`}>
      <div ref={sidebarRef} className={`w-1/3 ${isOpen ? 'opacity-100' : 'opacity-0'} lg:hidden delay-100 flex flex-col h-dvh py-24 px-10 gap-3 bg-white border-r`}>
        <Link href="/" className="border-l pl-2 hover:border-blue-200 py-2 hover:font-medium" onClick={() => setIsOpen(false)}>
          menu1
        </Link>
        <Link href="services" className="border-l pl-2 hover:border-blue-200 py-2 hover:font-medium" onClick={() => setIsOpen(false)}>
          menu2
        </Link>
        <Link href="#" className="border-l pl-2 hover:border-blue-200 py-2 hover:font-medium" onClick={() => setIsOpen(false)}>
          menu3
        </Link>
        <Link href="#" className="border-l pl-2 hover:border-blue-200 py-2 hover:font-medium" onClick={() => setIsOpen(false)}>
          menu4
        </Link>
      </div>
      <div className="w-full backdrop-blur-sm bg-white/30"></div>
    </div>
  );
}