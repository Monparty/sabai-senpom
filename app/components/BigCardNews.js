import Link from "next/link"
import Image from "next/image"

export default function BigCardNews({img}) {
    return (
        <div className="w-fit grid gap-3">
            <Image src={img} className="w-full rounded-xl" />
            <h2>test 1</h2>
            <p className="font-light break-all leading-5 cursor-pointer h-16 text-ellipsis overflow-hidden text-gray-600">dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type anronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto</p>
            <Link href="/" className="flex items-center gap-2 text-blue-600">
                ดูเพิ่มเติม
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    )
}