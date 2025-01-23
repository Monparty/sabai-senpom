import BigCardNews from '../components/BigCardNews';
import Breadcrumb from '../components/Breadcrumb';
import { cardNews } from '../data/data';

export default function page() {
    return (
        <div>
            <section className='py-4 mt-16 px-10'>
                <Breadcrumb
                    path2={"ข่าวสาร"}
                    pathLink2={"news"}
                    path3={""}
                    pathLink3={""}
                    arrow={false}
                    active={true}
                />
            </section>
            <section className='px-10 pb-10'>
                <div className="w-full gap-10 grid grid-cols-2 md:grid-cols-4 items-start">
                    {Object.values(cardNews).map(cardNew => (
                        <BigCardNews key={cardNew.id} {...cardNew} />
                    ))}
                </div>
            </section>
        </div>
    )
}