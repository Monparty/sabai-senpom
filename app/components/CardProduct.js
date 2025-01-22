import Image from "next/image"

export default function CardProduct({img, detail, price}) {
    return (
        <div className="w-auto flex flex-col items-start justify-start gap-3">
            <Image src={img} className="w-full h-60 object-cover cursor-pointer rounded-sm" />
            <p className="font-light break-all leading-5 cursor-pointer hover:underline h-16 text-ellipsis overflow-hidden text-gray-600">{detail}</p>
            <h2 className="font-light text-base">{price} THB</h2>
        </div>
    )
}