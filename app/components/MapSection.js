"use client"
import AOS from 'aos';
import React, { useEffect } from 'react';

export default function MapSection() {
    useEffect(() => {
    AOS.init();
  }, [])
    return (
        <section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241733.4774779329!2d98.66108760528934!3d18.7943388266906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a7e90bb6f5d%3A0x98d46270a59b4367!2z4LmA4LiX4Lio4Lia4Liy4Lil4LiZ4LiE4Lij4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmIIOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iCDguYDguIrguLXguKLguIfguYPguKvguKHguYg!5e0!3m2!1sth!2sth!4v1737109037869!5m2!1sth!2sth"
                width="600"
                height="450"
                aria-hidden="false"
                tabindex="0"
                loading="lazy"
                className="w-full rounded-md"
                data-aos="fade-up"
            />
        </section>
    )
}