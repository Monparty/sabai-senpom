export default function BoxFilter() {
    return (
        <div className="py-3 bg-white opacity-70">
            <div className="pb-5 border-b">
                <select className="border w-full p-2 rounded-sm font-light text-sm">
                    <option className="font-light text-sm">-</option>
                    <option className="font-light text-sm">111111</option>
                    <option className="font-light text-sm">22222</option>
                    <option className="font-light text-sm">3333333</option>
                </select>
            </div>
            <div className="py-5 border-b">
                <details open className="border w-full p-2 rounded-sm font-light text-sm list-disc">
                    <summary className="list-none font-medium">ตัวเลือก</summary>
                    <div className="p-3 grid gap-1">
                        <div className="flex gap-2 items-center ">
                            <input type="checkbox" id="c1" className="accent-gray-100" />
                            <label for="c1">menu1</label>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <input type="checkbox" id="c2" className="accent-gray-100" />
                            <label for="c2">menu1</label>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <input type="checkbox" id="c3" className="accent-gray-100" />
                            <label for="c3">menu1</label>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <input type="checkbox" id="c4" className="accent-gray-100" />
                            <label for="c4">menu1</label>
                        </div>
                    </div>
                </details>
            </div>
            <div className="py-5 border-b">
                <details open className="border w-full p-2 rounded-sm font-light text-sm list-disc">
                    <summary className="list-none font-medium">ขนาด</summary>
                    <div className="p-3 grid grid-cols-3">
                        <button className="active:bg-slate-800 p-2 active:text-white border">S</button>
                        <button className="active:bg-slate-800 p-2 active:text-white border-y border-r">M</button>
                        <button className="active:bg-slate-800 p-2 active:text-white border-y border-r">L</button>
                        <button className="active:bg-slate-800 p-2 active:text-white border-x border-b">XL</button>
                        <button className="active:bg-slate-800 p-2 active:text-white border-r border-b">MD</button>
                        <button className="active:bg-slate-800 p-2 active:text-white border-r border-b">XXL</button>
                    </div>
                </details>
            </div>
            <div className="py-5">
                <details open className="border w-full p-2 rounded-sm font-light text-sm list-disc">
                    <summary className="list-none font-medium">สี</summary>
                    <div className="p-3 grid grid-cols-6 gap-3">
                        <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-black hover:bg-gray-500"></button>
                        <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-red-500 hover:bg-red-400"></button>
                        <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-400"></button>
                        <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-yellow-500 hover:bg-yellow-400"></button>
                        <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-green-500 hover:bg-green-400"></button>
                        <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400"></button>
                        <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-fuchsia-500 hover:bg-fuchsia-400"></button>
                        <button className="p-2 w-1 h-1 rounded-full cursor-pointer bg-indigo-500 hover:bg-indigo-400"></button>
                    </div>
                </details>
            </div>
        </div>
    )
}