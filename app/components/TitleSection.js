"use client"
import AOS from "aos";
import { useEffect } from "react";

export default function TitleSection({title1, title2}) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='p-10 text-center'>
            <h2 data-aos="fade-up" className='text-4xl font-semibold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white'>{title1} <span className='text-blue-600 font-semibold px-1'>{title2}</span></h2>
        </section>
    )
}