"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactSection() {
    const textDesc = [
        'ร้าน Sabai Senpom เปิดใหม่พรุ่งนี้ โปรโมชั่นสระไดร์ 49 บาท เฉพาะวันที่ 7-9 เท่านั้น เวลา 10:00-20:00 แวะมาอุดหนุนได้ ขอบคุณค่ะ',
        'การเลือกทรงผมที่เข้ากับรูปหน้าเป็นสิ่งสำคัญค่ะ ช่างจะสามารถแนะนำทรงผมที่เหมาะสมกับคุณได้ โดยพิจารณาจากรูปหน้าของคุณ', 
        'การตัดผมสั้นเป็นการเปลี่ยนแปลงที่ค่อนข้างมาก อาจจะลองตัดผมประบ่าก่อน เพื่อดูว่าชอบหรือไม่ แล้วค่อยตัดสั้นลงเรื่อยๆ', 
        'ปัญหาผมร่วงอาจเกิดจากหลายสาเหตุ เช่น ความเครียด การขาดสารอาหาร หรือปัญหาสุขภาพ ควรปรึกษาแพทย์หรือผู้เชี่ยวชาญด้านเส้นผม'
    ]
    const [display, setDisplay] = useState("#bfdbfe");
    const [text, setText] = useState(textDesc[0])
    
    useEffect(() => {
        AOS.init();
    }, [setDisplay])

    return (
        <section className='bg-blue-50 p-10'>
            <div className='text-center'>
                <h2 data-aos="fade-up" className='text-4xl font-semibold'>เสียงตอบรับจากผู้ใช้บริการ</h2>
                <h3 data-aos="fade-up" className='text-xl p-10'>แค่ชื่อก็โหดแล้วสำหรับ ประคำดีควาย และบอกได้เลยว่าสรรพคุณก็โหดไม่แพ้กันเลยค่ะ</h3>
            </div>
            <div className='text-center w-full flex justify-center px-4 lg:px-44'>
                <button data-aos="fade-up" className="w-full px-2 py-2 focus:bg-blue-200 hover:bg-blue-200 md:px-12 text-blue-800 mb-10 cursor-pointer outline-none rounded-l-lg" data-aos-delay="50" onClick={() => {setText(textDesc[0]); setDisplay('#bfdbfe')}} style={{background: display}}>สระไดร์</button>
                <button data-aos="fade-up" className="w-full px-2 py-2 focus:bg-blue-200 hover:bg-blue-200 md:px-12 bg-blue-100 text-blue-800 mb-10 cursor-pointer" data-aos-delay="100" onClick={() => {setText(textDesc[1]); setDisplay('#dbeafe')}} >ทำเคมี</button>
                <button data-aos="fade-up" className="w-full px-2 py-2 focus:bg-blue-200 hover:bg-blue-200 md:px-12 bg-blue-100 text-blue-800 mb-10 cursor-pointer" data-aos-delay="150" onClick={() => {setText(textDesc[2]); setDisplay('#dbeafe')}}>ยืดผม</button>
                <button data-aos="fade-up" className="w-full px-2 py-2 focus:bg-blue-200 hover:bg-blue-200 md:px-12 bg-blue-100 text-blue-800 mb-10 cursor-pointer rounded-r-lg" data-aos-delay="150" onClick={() => {setText(textDesc[3]); setDisplay('#dbeafe')}}>ดัดผม</button>
            </div>
            <div className='flex justify-center text-xl flex-col'>
                <div className='text-center px-4 lg:px-10' data-aos="fade-up">
                    <p className='bg-white p-6 rounded-xl'>
                        {text}
                    </p>
                </div>
                <div className='flex justify-center pt-10'>
                    <Link data-aos="fade-up" href="https://line.me/ti/p/~mon_suniti" target='blank_' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        ปรึกษาฟรี @Line_contact
                    </Link>
                </div>
            </div>
        </section>
    )
}