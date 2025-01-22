"use client"
import Link from "next/link"
import Image from "next/image"
import AOS from "aos";
import React, { useEffect } from "react";

export default function BigCardNews({img, title, detail}) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" className="w-full grid gap-3">
            <Image src={img} className="w-full h-60 rounded-xl object-cover" />
            <h2>{title}</h2>
            <p className="font-light break-all leading-5 h-16 text-ellipsis overflow-hidden text-gray-600">{detail}</p>
            <Link href="/" className="flex items-center gap-1 text-blue-600 hover:underline w-fit">
                ดูเพิ่มเติม
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    )
}