"use client"
import Image from "next/image"
import { p1, p2, p3, p4 } from '../public/exportImg';
import TitleBtn from "../components/TitleBtn";
import Link from "next/link";
import "@madzadev/image-slider/dist/index.css";
import BoxFilter from "../components/BoxFilter";
import CardProduct from "../components/CardProduct";
import BigCardNews from "../components/BigCardNews";
import BoxColsIcon from "../components/BoxColsIcon";
import NextSlider from "../components/NextSlider";
import CardFull from "../components/CardFull";

const images = [
    { url: p1.src },
    { url: p2.src },
    { url: p3.src },
];

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 24"><defs><path id="weuiArrowOutlined0" fill="#000" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"/></defs><use fill-rule="evenodd" href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)"/></svg> 

export default function page() {
    return (
        <div>
            <section className="breadcrumb text-sm py-3 mt-16 px-10 flex gap-2 items-center font-light">
                <div>หน้าหลัก</div>
                <div>{icon}</div>
                <div className="text-blue-300">บริการของเรา</div>
            </section>
            <section className="w-full flex gap-4 px-10">
                <BoxFilter />
                <div className="w-full p-3 gap-7 grid grid-cols-4 items-start">
                    <CardProduct img={p1} />
                    <CardProduct img={p1} />
                    <CardProduct img={p1} />
                    <CardProduct img={p1} />
                </div>
            </section>
            <section>
                <TitleBtn text={"บทความที่เกี่ยวข้องกับบริการของเรา"}  />
                <div className="flex items-start justify-between gap-10 pb-10 px-10">
                    <BigCardNews img={p1} />
                    <BigCardNews img={p2} />
                    <BigCardNews img={p3} />
                </div>
            </section>
            <BoxColsIcon />
            <section className="p-10 flex justify-between gap-10 w-full">
                <div className="w-full">
                    <CardFull title1={'test1'} title2={'test2'} 
                    detail={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ore th'} 
                    textBtn={'อ่านต่อ'} />
                </div>
                <div className="rounded-xl w-full">
                    <NextSlider images={images} />
                </div>
            </section>
        </div>
    )
}