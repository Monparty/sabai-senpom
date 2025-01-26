import { p1, p2, p3, p4 } from '../public/exportImg';

export const cardItem = {
    card1: { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.425 0-.712-.288T4 20v-1q-1.25 0-2.125-.875T1 16v-5q0-1.25.875-2.125T4 8V6q0-1.25.875-2.125T7 3h10q1.25 0 2.125.875T20 6v2q1.25 0 2.125.875T23 11v5q0 1.25-.875 2.125T20 19v1q0 .425-.288.713T19 21t-.712-.288T18 20v-1H6v1q0 .425-.288.713T5 21m-1-4h16q.425 0 .713-.288T21 16v-5q0-.425-.288-.712T20 10t-.712.288T19 11v4H5v-4q0-.425-.288-.712T4 10t-.712.288T3 11v5q0 .425.288.713T4 17m3-4h10v-2q0-.675.275-1.225T18 8.8V6q0-.425-.288-.712T17 5H7q-.425 0-.712.288T6 6v2.8q.45.425.725.975T7 11zm5 2"/></svg>,
        title: 'ผลิตภัณฑ์บำรุงผมชนิดไหนดีที่สุด', 
        detail: 'ผลิตภัณฑ์บำรุงผมที่ดีที่สุดจะขึ้นอยู่กับสภาพเส้นผมและปัญหาที่คุณต้องการแก้ไข ควรปรึกษาช่างทำผมหรือผู้เชี่ยวชาญด้านเส้นผมเพื่อขอคำแนะนำ' 
    },
    card2: { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 20q-.8 0-1.487-.4T8.9 18.5q-.275-.5-.012-1T9.7 17q.325 0 .575.2t.45.45q.125.175.338.263T11.5 18q.425 0 .713-.288T12.5 17t-.288-.712T11.5 16H3q-.425 0-.712-.288T2 15t.288-.712T3 14h8.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M3 10q-.425 0-.712-.288T2 9t.288-.712T3 8h12.5q.625 0 1.063-.437T17 6.5t-.437-1.062T15.5 5q-.4 0-.75.188t-.55.537q-.175.3-.425.538t-.6.237q-.5 0-.812-.375t-.163-.8q.35-1.05 1.263-1.687T15.5 3q1.45 0 2.475 1.025T19 6.5t-1.025 2.475T15.5 10zm16.95 7.7q-.5.225-.975-.062T18.5 16.8q0-.35.238-.587t.537-.413q.35-.2.538-.55T20 14.5q0-.625-.437-1.062T18.5 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h15.5q1.45 0 2.475 1.025T22 14.5q0 1.05-.55 1.913t-1.5 1.287"/></svg>,
        title: 'สีผมที่กำลังเป็นที่นิยมในตอนนี้คือสีอะไรคะ?', 
        detail: 'สีผมที่เป็นที่นิยมมักจะเปลี่ยนแปลงไปตามเทรนด์แฟชั่น แต่โดยทั่วไป สีผมโทนธรรมชาติ เช่น สีน้ำตาล สีเทา สีบลอนด์' 
    },
    card3: { 
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M7 9q-.825 0-1.412-.587T5 7t.588-1.412T7 5t1.413.588T9 7t-.587 1.413T7 9M5 22q-.425 0-.712-.288T4 21q-.825 0-1.412-.587T2 19v-6h3v-.75q0-.95.65-1.6t1.6-.65q.5 0 .925.2t.775.55l1.4 1.55q.2.2.388.375t.412.325H18V4.85q0-.35-.25-.6t-.6-.25q-.15 0-.288.063t-.262.187L15.35 5.5q.125.425.05.838t-.3.762l-2.75-2.8q.35-.225.75-.288t.8.088l1.25-1.25q.4-.4.913-.625T17.15 2q1.2 0 2.025.825T20 4.85V13h2v6q0 .825-.587 1.413T20 21q0 .425-.288.713T19 22zm-1-3h16v-4H4zm0 0h16z"/></svg>,
        title: 'อยากทำสีผม', 
        detail: 'การทำสีผมอาจทำให้ผมเสียได้หากไม่ได้ดูแลอย่างถูกวิธี ควรเลือกใช้ผลิตภัณฑ์บำรุงผมที่มีคุณภาพสูง และทำทรีทเมนต์บำรุงผมเป็นประจำ' 
    }
};

export const servicePrice = {
    service1: {
        name: 'ตัดผม',
        detail: 'ตัดเลเยอร์ ตัดปลาย ตัดซอย หรือการใช้กรรไกรหลายชนิดเพื่อให้ได้ทรงผมที่ต้องการ',
        price: '200 - 1,500'
    },
    service2: {
        name: 'ทำสีผม',
        detail: 'เปลี่ยนสีผมให้ดูมีชีวิตชีวาและโดดเด่นมากขึ้น มีทั้งการทำสีผมทั้งหัว ไฮไลท์ และโทนสีให้เลือกมากมาย',
        price: '1,500 - 5,000'
    },
    service3: {
        name: 'ดัดผม',
        detail: 'ดัดผมให้มีลอนสวยเป็นธรรมชาติ หรือลอนหยิกที่โดดเด่น มีทั้งการดัดผมดิจิตอล ดัดผมร้อน และดัดผมเย็น',
        price: '2,500 - 5,000'
    },
    service4: {
        name: 'ยืดผม',
        detail: 'ยืดผมให้ตรงเรียบเป็นธรรมชาติ หรือยืดผมให้ตรงสนิท มีทั้งการยืดผมแบบญี่ปุ่น ยืดผมดิจิตอล และยืดผมธรรมชาติ',
        price: '2,000 - 5,000'
    },
    service5: {
        name: 'ทรีทเมนต์บำรุงผม',
        detail: 'บำรุงผมให้กลับมานุ่มสลวย เงางาม และมีสุขภาพดี เหมาะสำหรับผู้ที่มีผมแห้งเสีย ชี้ฟู หรือผมขาดความชุ่มชื้น',
        price: '500 - 2,000'
    },
    service6: {
        name: 'สปาหนังศีรษะ',
        detail: 'การนวดผ่อนคลายหนังศีรษะและบำรุงเส้นผมไปพร้อมกัน ช่วยลดความเครียดและทำให้รู้สึกผ่อนคลาย',
        price: '500 - 1,500'
    }
}

export const cardNews = {
    cardNew1: {
        id: 1,
        img: p1,
        title: 'Lorem Ipsum คืออะไร?',
        detail: 'Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16 เมื่อเครื่องพิมพ์',
    },
    cardNew2: {
        id: 2,
        img: p2,
        title: 'ทำไมจึงต้องนำมาใช้?',
        detail: 'เนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ แต่อยู่มาจนถึง',
    },
    cardNew3: {
        id: 3,
        img: p3,
        title: 'มันมีที่มาอย่างไร?',
        detail: 'ยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์ และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น',
    },
    cardNew4: {
        id: 4,
        img: p4,
        title: 'จะนำมาใช้ได้จากที่ไหน?',
        detail: 'Letraset วางจำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น คือเมื่อซอฟท์แวร์การทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง Aldus',
    },
    cardNew5: {
        id: 5,
        img: p1,
        title: 'ตรงกันข้ามกับความเชื่อที่นิยมกัน?',
        detail: 'ผลการเสิร์ชที่ได้ก็จะไม่พบบรรดาเว็บไซต์ที่ยังคงอยู่ในช่วงเริ่มสร้างด้วย โดยหลายปีที่ผ่านมาก็มีการคิดค้นเวอร์ชั่นต่างๆ ของ Lorem Ipsum ขึ้นมาใช้ บ้างก็เป็นความบังเอิญ บ้างก็เป็นความตั้งใจ (เช่น การแอบแทรกมุกตลก)',
    },
    cardNew6: {
        id: 6,
        img: p2,
        title: 'ตรงกันข้ามกับความเชื่อที่นิยมกัน?',
        detail: 'ผลการเสิร์ชที่ได้ก็จะไม่พบบรรดาเว็บไซต์ที่ยังคงอยู่ในช่วงเริ่มสร้างด้วย โดยหลายปีที่ผ่านมาก็มีการคิดค้นเวอร์ชั่นต่างๆ ของ Lorem Ipsum ขึ้นมาใช้ บ้างก็เป็นความบังเอิญ บ้างก็เป็นความตั้งใจ (เช่น การแอบแทรกมุกตลก)',
    },
}

export const boxColsIcons = {
    boxColsIcon1: {
        id: 1,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M7 9q-.825 0-1.412-.587T5 7t.588-1.412T7 5t1.413.588T9 7t-.587 1.413T7 9M5 22q-.425 0-.712-.288T4 21q-.825 0-1.412-.587T2 19v-6h3v-.75q0-.95.65-1.6t1.6-.65q.5 0 .925.2t.775.55l1.4 1.55q.2.2.388.375t.412.325H18V4.85q0-.35-.25-.6t-.6-.25q-.15 0-.288.063t-.262.187L15.35 5.5q.125.425.05.838t-.3.762l-2.75-2.8q.35-.225.75-.288t.8.088l1.25-1.25q.4-.4.913-.625T17.15 2q1.2 0 2.025.825T20 4.85V13h2v6q0 .825-.587 1.413T20 21q0 .425-.288.713T19 22zm-1-3h16v-4H4zm0 0h16z"/></svg>,
        title: 'ของแท้',
        detail: 'ของแทร่นาจาไอหนุ่ม',
    },
    boxColsIcon2: {
        id: 2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.48-5.788A2 2 0 0 1 6.32 4h11.36a2 2 0 0 1 1.838 1.212L22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm1-7H4v5h16zM4.176 11h15.648l-2.143-5H6.32zM6.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m11 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg>,
        title: 'ส่งด้วยใจ',
        detail: 'จัดส่งไว ทั่วไทย',
    },
    boxColsIcon3: {
        id: 3,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M11.5 20q-1.25 0-2.125-.875T8.5 17h2q0 .425.288.713T11.5 18t.713-.288T12.5 17t-.288-.712T11.5 16H2v-2h9.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M2 10V8h13.5q.65 0 1.075-.425T17 6.5t-.425-1.075T15.5 5t-1.075.425T14 6.5h-2q0-1.475 1.013-2.488T15.5 3t2.488 1.013T19 6.5t-1.012 2.488T15.5 10zm16.5 8v-2q.65 0 1.075-.425T20 14.5t-.425-1.075T18.5 13H2v-2h16.5q1.475 0 2.488 1.013T22 14.5t-1.012 2.488T18.5 18"/></svg>,
        title: 'ผ่อนได้ทุกชิ้น',
        detail: '0% จัดสเปคคอม',
    },
    boxColsIcon4: {
        id: 4,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="m12.925 8.225l4.975-4.95q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-5.675 5.675q-.3.3-.7.3t-.7-.3L9.375 7.5q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288zM13.95 20.4l5.95-1.85q-.125-.225-.362-.388T19 18h-5.05q-.675 0-1.075-.05t-.825-.2l-1.425-.475q-.4-.125-.575-.5T10 16t.488-.588t.762-.062l1.05.35q.425.125.963.2t1.462.1H15q0-.275-.162-.525t-.388-.325L8.6 13H7v5.5zm-.525 1.95L7 20.55q-.2.65-.788 1.05T5 22H3q-.825 0-1.412-.587T1 20v-7q0-.825.588-1.412T3 11h5.6q.175 0 .35.038t.325.087L15.15 13.3q.825.3 1.338 1.05T17 16h2q1.25 0 2.125.825T22 19q0 .55-.288.863t-.887.512l-6.25 1.95q-.275.1-.575.1t-.575-.075M3 20h2v-7H3z"/></svg>,
        title: 'ผ่อนได้ทุกชิ้น',
        detail: '0% จัดสเปคคอม',
    },
    boxColsIcon5: {
        id: 5,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M17.5 16.5v2q0 .2.15.35T18 19t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 16t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 13t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 16t.15.35t.35.15zM18 21q-2.075 0-3.537-1.463T13 16t1.463-3.537T18 11t3.538 1.463T23 16t-1.463 3.538T18 21M4 17V8q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 1.5t.625.1t.575.3l6.05 4.55q.175.125.263.325t.087.425q0 .425-.288.713T18.6 8.2q-.175 0-.325-.05T18 8l-6-4.5L6 8v9h4q.425 0 .713.288T11 18t-.288.713T10 19H6q-.825 0-1.412-.587T4 17m8-6.75"/></svg>,
        title: 'ผ่อนได้ทุกชิ้น',
        detail: '0% จัดสเปคคอม',
    },
    boxColsIcon6: {
        id: 6,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="m9.05 12.725l2.4-6.575l8.45 3.075q1.575.575 2.275 2.063t.125 3.062l-1.025 2.825zm3.6-4q-.2.5-.363.938t-.337.937l-.325.925zM1.45 13.15l.675-1.875l18.8 6.85L20.25 20zm4.875-1.6q-1.25 0-2.125-.875T3.325 8.55T4.2 6.425t2.125-.875t2.125.875t.875 2.125t-.875 2.125t-2.125.875m0-2q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m5.3 1.975l8.45 3.1l.35-.95q.275-.8-.062-1.55T19.225 11.1L12.65 8.725zm-5.3-2.95"/></svg>,
        title: 'ผ่อนได้ทุกชิ้น',
        detail: '0% จัดสเปคคอม',
    },
}

