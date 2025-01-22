"use client"
import AOS from "aos";
import Image from "next/image"
import Link from "next/link";
import React, { useEffect } from "react";

export default function CardFull({img, title1, title2, detail, textBtn}) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" className="grid md:flex rounded-md h-full border bg-white">
            <Image src={img} className="w-full md:rounded-l-md md:w-auto md:h-auto object-cover" />
            <div className="p-10">
                <h2 data-aos="fade-up" data-aos-delay="50" className="text-2xl">{title1} <span className="text-blue-600">{title2}</span></h2>
                <p data-aos="fade-up" data-aos-delay="100" className="py-10 font-light">{detail}</p>
                <Link data-aos="fade-up" href="#" data-aos-delay="150" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-md border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    {textBtn}
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    )
}