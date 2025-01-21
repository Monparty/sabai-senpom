import Image from "next/image"

export default function CardProduct({img}) {
    return (
        <div className="w-auto flex flex-col items-start justify-start gap-3">
            <Image src={img} className="w-auto h-60 object-cover cursor-pointer" />
            <p className="font-light break-all leading-5 cursor-pointer hover:underline h-16 text-ellipsis overflow-hidden text-gray-600">Infinity heart 14kk rose gnamel 14k rose gn 4k rose gnamel 14k rose gn</p>
            <h2 className="font-light text-base">763.00 THB</h2>
        </div>
    )
}