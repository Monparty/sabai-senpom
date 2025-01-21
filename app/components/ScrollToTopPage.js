"use client"

import AOS from 'aos';
import { useEffect } from 'react';

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.scrollTo({top: 20, behavior: 'smooth'})

export default function ScrollToTopPage() {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <button data-aos="fade-up" className="fixed bottom-12  md:bottom-0 right-5 rounded-t-full p-1 w-12 bg-blue-400 flex justify-center" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M11.293 7.293a1 1 0 0 1 1.32-.083l.094.083l6 6l.083.094l.054.077l.054.096l.017.036l.027.067l.032.108l.01.053l.01.06l.004.057L19 14l-.002.059l-.005.058l-.009.06l-.01.052l-.032.108l-.027.067l-.07.132l-.065.09l-.073.081l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L18 15H6c-.852 0-1.297-.986-.783-1.623l.076-.084z"/></svg>
        </button>
    )
}