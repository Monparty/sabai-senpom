import ItemBoxColsIcon from "./ItemBoxColsIcon";

export default function BoxColsIcon() {
    return (
        <section>
            <div className="p-10 flex gap-10 justify-center items-center bg-blue-100">
                <ItemBoxColsIcon />
                <ItemBoxColsIcon />
                <ItemBoxColsIcon />
                <ItemBoxColsIcon />
            </div>
        </section>
    )
}