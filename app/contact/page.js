import { trace } from 'next/dist/trace';
import Breadcrumb from '../components/Breadcrumb';
import MapSection from '../components/MapSection';

export default function Page() {
    return (
        <div>
        <section className="py-4 mt-16 px-10">
            <Breadcrumb
                path2={"ติดต่อเรา"}
                pathLink2={"/contact"}
                path3={""}
                pathLink3={""}
                arrow={false}
                active2={true}
                active3={false}
            />
        </section>
        <section className="flex flex-col md:flex-row w-full justify-between items-start px-10 mb-10 gap-10">
            <div className='w-full border-r pr-10'>
                <MapSection />
            </div>
            <div className='w-full grid gap-6'>
                <h2 className='text-2xl font-medium'>Drop Us a Line</h2>
                <form className='grid gap-5'>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label for="f1">Name</label>
                            <input id="f1" type='text' placeholder='Your name' className='border p-2 font-light' />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label for="f2">Email</label>
                            <input id="f2" type='email' placeholder='Your name' className='border p-2 font-light' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label for="f3">Message</label>
                        <textarea id="f3" placeholder='How can we help?' className='border p-2 h-40 font-light' />
                    </div>
                </form>
            </div>
        </section>
        
        </div>
    )
}