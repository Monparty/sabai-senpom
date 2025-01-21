export default function ItemBoxColsIcon() {
    return (
        <div className="flex items-center gap-2">
            <div className="bg-blue-600 rounded-full p-2 flex justify-center items-center">
                <svg className="w-5 h-5" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
            <div>
                <h2 className="font-semibold">ของแท้</h2>
                <p className="font-light text-sm">ของแทร่นาจาไอหนุ่ม</p>
            </div>
        </div>
    )
}