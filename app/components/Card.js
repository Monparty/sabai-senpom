"use client"
import AOS from 'aos';
import React, { useEffect } from 'react';

export default function Card({ icon, title, detail }) {
  useEffect(() => {
      AOS.init();
  }, [])
  return (
      <div data-aos="fade-up" className="hover:bg-blue-50 p-6 rounded-xl h-full cursor-pointer w-auto ease-in duration-200 border border-blue-200">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <div className="flex justify-center mb-4 text-2xl text-center">
          {title}
        </div>
        <div className='font-light'>
          {detail}
        </div>
      </div>
  );
} 