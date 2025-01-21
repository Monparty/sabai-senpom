"use client"
import AOS from 'aos';
import React, { useEffect } from 'react';

export default function Service({name, detail, price}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up" className="border-b md:flex md:justify-between gap-10 items-center p-5 rounded-md cursor-pointer hover:bg-blue-50">
      <div className="font-semibold text-blue-600 md:w-40">
        {name}
      </div>
      <div className="py-2 text-gray-600 text-left md:w-1/2">
        {detail}
      </div>
      <div className="font-semibold text-blue-600 md:w-40 md:text-right">
        {price}
      </div>
  </div>
  )
}