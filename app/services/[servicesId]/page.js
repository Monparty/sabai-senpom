export default async function serviceDetails({ params }) {
    const servicesId = (await params).servicesId
    return (
        <div className="mt-20">
            service Details {servicesId}
        </div>
    )
}