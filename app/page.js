"use client"
import { useEffect } from "react";
import { p1, p2, p3, p4 } from './public/exportImg';
import { cardItem, servicePrice } from './data/data';
import Image from "next/image"
import AOS from "aos";
import './globals.css'
import Service from './components/ServicePrice';
import Card from './components/Card';
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import TitleSection from "./components/TitleSection";
import Bigcard from "./components/BigCard";
import TitleBtn from "./components/TitleBtn";
import CardFull from "./components/CardFull";
import MapSection from "./components/MapSection";
import QuestionSection from "./components/QuestionSection";

export default function Home() {
  useEffect(() => {
      AOS.init();
  }, [])

  return (
    <div>
      <HeroSection />
      <ContactSection />
      <TitleBtn text={"ดูข้อมูลเพิ่มเติม"} />
      <section className="grid grid-cols-2 md:flex md:justify-between p-5 gap-5 md:p-10">
        <div data-aos="fade-up" data-aos-delay="50" className="md:w-full zoomImg rounded-xl">
          <Image src={p1} />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="md:w-full zoomImg rounded-xl">
          <Image src={p2} />
        </div>
        <div data-aos="fade-up" data-aos-delay="150" className="md:w-full zoomImg rounded-xl">
          <Image src={p3} />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="md:w-full zoomImg rounded-xl">
          <Image src={p4} />
        </div>
      </section>
      <TitleSection title1={'ทำไมต้องทำผม กับ'} title2={'Sabai Senpom'} />
      <section className="grid grid-cols-1  md:grid-cols-3 gap-8 p-10 align-top">
        {Object.values(cardItem).map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
      <TitleSection title1={'ราคาค่าบริการของร้าน'} title2={'Sabai Senpom'} />
      <section className="p-10">
        {Object.values(servicePrice).map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </section>
      <div className="p-10 bg-blue-50">
        <CardFull 
          img={p1} 
          title1={"ประวัติร้าน"}
          title2={" Sabai Senpom"}
          detail={"แค่ชื่อก็โหดแล้วสำหรับ ประคำดีควาย และบอกได้เลยว่าสรรพคุณก็โหดไม่แพ้กันเลยค่ะ เพราะน้ำสกัดประคำดีควายมีสรรพคุณช่วยลดรังแค และช่วยฆ่าเชื้อโรคบนหนังศีรษะ ทั้งเชื้อรา และแบคทีเรียที่เป็นตัวการผมร่วงได้เป็นอย่างดีเลยนะคะสาวๆ ขา นอกจากมุมโหดๆ ของนางแล้ว ประคำดีควายยังมีมุมสวยๆ อยู่ด้วยนะ ซึ่งก็คือช่วยให้ผมเงางามนั่นเอง เชื่อเถอะ…ว่าดีมากมาย"} 
          textBtn={"ดูเพิ่มเติม"} 
        />
      </div>
      <section className="grid grid-flow-row md:w-full md:flex md:justify-between gap-5 p-10">
        <Bigcard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#2563eb" d="m9 7l1-2V4H9V2h6q.425 0 .713.288T16 3v1l-1 2h-3V5l-2 2zM8 22v-6.85q0-.275.088-.587T8.3 14L12 7h3q.35.35.675.938T16 9v13zm2-2h4V9h-.8L10 15.1zm0 0h4z"/></svg>} 
            img={p1} 
            title={"ช่างมีฝีมือ"}
            detail={"หลายๆ คนไม่เคยรู้มาก่อนเลยว่าใบไผ่นั้นมีสรรพคุณช่วยให้ผมสวยได้ด้วย เพราะปกติเราก็ไม่เห็นมีใครเอาต้นไผ่หรือใบไผ่มากินเนอะ ที่กินๆ กันก็จะเป็นหน่อไม้ แต่จริงๆ"}
        />
        <Bigcard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#2563eb" d="m12.925 8.225l4.975-4.95q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-5.675 5.675q-.3.3-.7.3t-.7-.3L9.375 7.5q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288zM13.95 20.4l5.95-1.85q-.125-.225-.362-.388T19 18h-5.05q-.675 0-1.075-.05t-.825-.2l-1.425-.475q-.4-.125-.575-.5T10 16t.488-.588t.762-.062l1.05.35q.425.125.963.2t1.462.1H15q0-.275-.162-.525t-.388-.325L8.6 13H7v5.5zm-.525 1.95L7 20.55q-.2.65-.788 1.05T5 22H3q-.825 0-1.412-.587T1 20v-7q0-.825.588-1.412T3 11h5.6q.175 0 .35.038t.325.087L15.15 13.3q.825.3 1.338 1.05T17 16h2q1.25 0 2.125.825T22 19q0 .55-.288.863t-.887.512l-6.25 1.95q-.275.1-.575.1t-.575-.075M3 20h2v-7H3z"/></svg>} 
            img={p2} 
            title={"การรับรอง"}
            detail={"ว่านหางจระเข้ขึ้นชื่อเรื่องความชุ่มชื้น ให้ความรู้สึกเย็นๆ แน่นอนเลยสรรพคุณเด็ดๆ ที่มองข้ามไม่ได้เลยคือการมอบความชุ่มชื้นให้กับหนังศีรษะและเส้นผมของเรานั่นเอง"}
        />
        <Bigcard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#2563eb"><path d="M19 2.01H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.998 5 19.815 5 19.01c0-.101.009-.191.024-.273.112-.575.583-.717.987-.727H20c.018 0 .031-.009.049-.01H21V4.01c0-1.103-.897-2-2-2zm0 14H5v-11c0-.806.55-.988 1-1h7v7l2-1 2 1v-7h2v12z"></path></svg>} 
            img={p3} 
            title={"จองง่าย"}
            detail={"แค่ชื่อก็โหดแล้วสำหรับ ประคำดีควาย และบอกได้เลยว่าสรรพคุณก็โหดไม่แพ้กันเลยค่ะ เพราะน้ำสกัดประคำดีควายมีสรรพคุณช่วยลดรังแค และช่วยฆ่าเชื้อโรคบนหนังศีรษะ "}
        />
      </section>
      <TitleSection title1={'คำถามที่พบบ่อย'} title2={'Sabai Senpom'} />
      <section className="px-10 md:px-36 pb-10">
        <QuestionSection 
          question={"อยากได้ทรงผมที่เข้ากับรูปหน้าตัวเอง ควรทำอย่างไรดีคะ?"} 
          answer={"การเลือกทรงผมที่เข้ากับรูปหน้าเป็นสิ่งสำคัญค่ะ ช่างจะสามารถแนะนำทรงผมที่เหมาะสมกับคุณได้ โดยพิจารณาจากรูปหน้าของคุณ เช่น หน้ากลม หน้ายาว หน้ารูปไข่ เป็นต้น ลองนำภาพทรงผมที่ถูกใจไปให้ช่างดูเป็นไอเดียได้ค่ะ"}
        />
        <QuestionSection 
          question={"ผมบางควรตัดผมทรงไหนดีคะ?"} 
          answer={"สำหรับคนผมบาง การตัดผมเลเยอร์จะช่วยเพิ่มวอลลุ่มให้กับเส้นผม ทำให้ดูหนาขึ้น หรืออาจจะลองทำผมดัดลอนเล็กๆ เพื่อเพิ่มมิติให้กับเส้นผมก็ได้ค่ะ"} 
        />
        <QuestionSection 
          question={"อยากตัดผมสั้น แต่กลัวจะไม่เข้ากับตัวเอง ควรทำอย่างไรดีคะ?"} 
          answer={"การตัดผมสั้นเป็นการเปลี่ยนแปลงที่ค่อนข้างมาก อาจจะลองตัดผมประบ่าก่อน เพื่อดูว่าชอบหรือไม่ แล้วค่อยตัดสั้นลงเรื่อยๆ หรือปรึกษาช่างทำผมผู้เชี่ยวชาญเพื่อให้ช่วยแนะนำทรงผมที่เหมาะสมกับคุณค่ะ"} 
        />
        <QuestionSection 
          question={"อยากทำสีผม แต่กลัวผมเสีย ควรทำอย่างไรดีคะ?"} 
          answer={"การทำสีผมอาจทำให้ผมเสียได้หากไม่ได้ดูแลอย่างถูกวิธี ควรเลือกใช้ผลิตภัณฑ์บำรุงผมที่มีคุณภาพสูง และทำทรีทเมนต์บำรุงผมเป็นประจำ นอกจากนี้ ควรปรึกษาช่างทำผมเพื่อเลือกสีผมและเทคนิคการทำสีที่เหมาะสมกับสภาพเส้นผมของคุณค่ะ"} 
        />
        <QuestionSection 
          question={"ผมร่วงเยอะ ควรทำอย่างไรดีคะ?"} 
          answer={"ปัญหาผมร่วงอาจเกิดจากหลายสาเหตุ เช่น ความเครียด การขาดสารอาหาร หรือปัญหาสุขภาพ ควรปรึกษาแพทย์หรือผู้เชี่ยวชาญด้านเส้นผมเพื่อหาสาเหตุและวิธีแก้ไขที่เหมาะสม"} 
        />
        <QuestionSection 
          question={"ควรเลือกผลิตภัณฑ์ดูแลผมอย่างไรให้เหมาะกับสภาพเส้นผม?"} 
          answer={"ควรเลือกผลิตภัณฑ์ดูแลผมที่เหมาะสมกับสภาพเส้นผมของคุณ เช่น ถ้าผมแห้งเสีย ควรเลือกผลิตภัณฑ์ที่มีส่วนผสมของมอยเจอร์ไรเซอร์ ถ้าผมมัน ควรเลือกผลิตภัณฑ์ที่ควบคุมความมัน"} 
        />
      </section>
      <div className="bg-blue-50">
        <TitleSection title1={'แผนที่ร้าน'} title2={'Sabai Senpom'} />
      </div>
      <MapSection />
    </div>
  );
}
