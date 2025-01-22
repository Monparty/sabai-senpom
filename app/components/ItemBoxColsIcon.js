"use client"
import AOS from 'aos';
import { useEffect } from 'react';

export default function ItemBoxColsIcon({ icon, title, detail }) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" className="flex items-center gap-2">
            <div className="bg-blue-600 rounded-full p-2 flex justify-center items-center">
                {icon}
            </div>
            <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="font-light text-sm">{detail}</p>
            </div>
        </div>
    )
}