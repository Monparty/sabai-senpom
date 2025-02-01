import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import BoxColsIcon from '@/app/components/BoxColsIcon';
import QuestionSection from '@/app/components/QuestionSection';

export default async function ProductDetail({ params }) {

  const res = await fetch(`http://localhost:3000/api/services/${params.id}`);
  const data = await res.json();

  return (
    <div>
        <section className="py-4 mt-16 px-10">
            <Breadcrumb
                path2={"บริการของเรา"}
                pathLink2={"/services"}
                path3={"รายละเอียดบริการ"}
                pathLink3={""}
                arrow={true}
                active2={false}
                active3={true}
            />
        </section>
        <section className="flex flex-col md:flex-row w-full justify-between items-start px-10 mb-10 gap-10">
          <div className='w-full'>
            <Image src={data.img} className='w-full h-80 object-cover rounded-md' />
          </div>
          <div className='w-full grid gap-6'>
            <h2 className='text-3xl font-medium'>{data.name}</h2>
            <h2 className='font-light'>{data.detail}</h2>
            <div className='flex gap-5'>
              <h2 className='p-3 rounded-md w-36 cursor-pointer text-center bg-blue-500 hover:bg-blue-400 text-white'>ราคา {data.price}</h2>
              <Link className='p-3 rounded-md w-36 cursor-pointer text-center hover:bg-gray-100 border border-blue-500' href="https://line.me/ti/p/~mon_suniti" target='blank_'>ซื้อเลย</Link>
            </div>
            <QuestionSection question={'question'} answer={'answer'} />
          </div>
        </section>
        <section className='pt-10'>
          <BoxColsIcon />
        </section>
    </div>
  );
}

