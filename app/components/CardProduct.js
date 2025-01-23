import Image from "next/image"
import Link from "next/link"

export default function CardProduct({img, detail, price, id}) {
    return (
        <Link href={`/services/${id}`} className="w-auto flex flex-col items-start justify-start gap-3">
            <div className="relative flex items-center justify-center cursor-pointer">
                <Image src={img} className="w-full h-60 object-cover cursor-pointer rounded-md hover:opacity-80" />
            </div>
            <p className="font-light text-sm break-all leading-5 cursor-pointer hover:underline h-16 text-ellipsis overflow-hidden text-gray-600">{detail}</p>
            <h2 className="font-light">{price} THB</h2>
        </Link>
    )
}