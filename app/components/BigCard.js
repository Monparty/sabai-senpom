"use client"
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Bigcard({icon, title, img, detail}) {
  useEffect(() => {
      AOS.init();
  }, [])
    return (
        <div data-aos="fade-up" className="md:w-full bg-blue-50 p-5 rounded-xl flex justify-center flex-col items-center hover:outline outline-1 hover:outline-blue-200">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-full p-2">
              {icon}
            </div>
            <h2 className="py-4 text-2xl text-blue-600">{title}</h2>
            <p className="mb-4">{detail}</p>
          </div>
          <div data-aos="fade-up" className="w-full zoomImg rounded-xl">
            <Image src={img} className="w-full" />
          </div>
        </div>
    )
}