"use client"
import { useState, useEffect } from 'react';
import { p1, p2, p3, p4 } from '../public/exportImg';
import TitleBtn from "../components/TitleBtn";
import "@madzadev/image-slider/dist/index.css";
import BoxFilter from "../components/BoxFilter";
import BigCardNews from "../components/BigCardNews";
import BoxColsIcon from "../components/BoxColsIcon";
import NextSlider from "../components/NextSlider";
import CardFull from "../components/CardFull";
import { cardNews } from "../data/data";
import Breadcrumb from '../components/Breadcrumb';
import CardProduct from '../components/CardProduct';

export const displayedCardNews = Object.values(cardNews).slice(0, 3);

const sliderImages = [
    { url: p1.src },
    { url: p2.src },
    { url: p3.src },
    { url: p4.src },
];

export default function page() {
    let allColor = ['orange', 'white', 'black'];
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [data, setData] = useState(null);
    const [display, setDisplay] = useState(allColor );
      
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('http://localhost:3000/api/services');
        const json = await response.json();
        setData(json);
        };
    
        fetchData();
    }, []);
    return (
        <div>
            <section className="py-4 mt-16 px-10 flex justify-between">
                <Breadcrumb
                    path2={"บริการของเรา"}
                    pathLink2={"/services"}
                    path3={""}
                    pathLink3={""}
                    arrow={false}
                    active2={true}
                    active3={false}
                />
                <button className='rounded-full p-2 bg-blue-500 block lg:hidden' onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="#fff" d="M6 1a3 3 0 0 0-2.83 2H0v2h3.17a3.001 3.001 0 0 0 5.66 0H16V3H8.83A3 3 0 0 0 6 1m4 8a3 3 0 0 0-2.83 2H0v2h7.17a3.001 3.001 0 0 0 5.66 0H16v-2h-3.17A3 3 0 0 0 10 9"/></svg>
                </button>
            </section>
            <section className="w-full flex items-start justify-start gap-7 px-10">
                <div className={`lg:block fixed left-0 top-0 mt-16 lg:mt-0 w-full lg:static lg:w-3/12 z-10`}>
                    <BoxFilter isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} setDisplay={setDisplay} display={display} allColor={allColor} />
                </div>
                <div className="w-full gap-7 grid grid-cols-2 md:grid-cols-4 items-start">
                {data ? (
                    data && data.map((item, index) => (
                        <CardProduct key={item.id} {...item} display={display} />
                    ))
                ) : (
                    <div>Loading...</div>
                )}
                </div>
            </section>
            <section>
                <TitleBtn text={"บริการของเรา"}  />
                <div className="flex md:flex-row flex-col items-start justify-between gap-10 pb-10 px-10">
                    {displayedCardNews.map(cardNew => (
                        <BigCardNews key={cardNew.id} {...cardNew} />
                    ))}
                </div>
            </section>
            <BoxColsIcon />
            <section className="p-10 flex md:flex-row flex-col-reverse justify-between gap-10 w-full">
                <div className="w-full">
                    <CardFull title1={'เกี่ยวกับ'} title2={'Sabai Senpom'} 
                    detail={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ore th of passages of Lorem Ipsum availa vof passages of Lorem Ipsum availa of passages of Lorem Ipsum availa'} 
                    textBtn={'อ่านต่อ'} />
                </div>
                <div className="rounded-xl w-full">
                    <NextSlider sliderImages={sliderImages} />
                </div>
            </section>
        </div>
    )
}