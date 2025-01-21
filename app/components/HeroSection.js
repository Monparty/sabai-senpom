"use client"
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="bg-white dark:bg-gray-900 w-full mt-16">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:p-24">
                <Link href="#" data-aos="fade-down" className="inline-flex justify-between items-center py-1 px-1 pr-4 text-sm text-gray-700 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-700 mb-10" role="alert">
                    <span className="text-xs bg-blue-600 rounded-full text-white p-2 mr-3">ใหม่</span> <span className="text-sm font-medium">มีอะไรใหม่ๆ</span> 
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </Link>
                <h1 data-aos="fade-up" className="mb-10 text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Sabai Senpom ร้านทำผมในเชียงใหม่</h1>
                <p  data-aos="zoom-in" className="mb-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">เพื่อสุขภาพผมที่แข็งแรง สวย เงางาม ที่สำคัญไม่ขาดหลุดร่วงง่ายแล้ว สาวๆ การหลีกเลี่ยงสารเคมีที่เป็นตัวการทำร้ายเส้นผม</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link href="#" data-aos="fade-up" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        ติดต่อเรา
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                    <Link href="#" data-aos="fade-up" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M5 8v11h14V8h-3v6.375q0 .575-.475.863t-.975.037L12 14l-2.55 1.275q-.5.25-.975-.038T8 14.376V8zm0 13q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zM10 8v4.75l2-1l2 1V8zM5 8h14z"/></svg>
                        บริการของเรา
                    </Link>  
                </div>
            </div>
        </section>
    )
}