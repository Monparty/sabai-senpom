"use client"
import ItemBoxColsIcon from "./ItemBoxColsIcon"
import { boxColsIcons } from "../data/data"

const displayedBoxColsIcons = Object.values(boxColsIcons).slice(0, 4);

export default function BoxColsIcon() {
    return (
        <section>
            <div className="p-10 flex flex-wrap gap-10 justify-center items-center bg-blue-100">
                {Object.values(displayedBoxColsIcons).map((boxColsIcon) => (
                    <ItemBoxColsIcon key={boxColsIcon.id} icon={boxColsIcon.icon} title={boxColsIcon.title} detail={boxColsIcon.detail} />
                ))}
            </div>
        </section>
    )
}