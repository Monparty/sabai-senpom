"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TitleBtn({text}) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="flex justify-between items-center p-10">
            <h2 data-aos="fade-up" className="text-2xl">{text}</h2>
            <Link data-aos="fade-up" href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 text-sm text-gray-700 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-700" role="alert">
                <span className="text-xs bg-blue-600 rounded-full text-white p-2 mr-3">ดูเพิ่ม</span> <span className="text-sm font-medium">รายละเอียด</span> 
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </Link>
        </section>
    )
}