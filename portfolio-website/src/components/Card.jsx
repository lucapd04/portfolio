export default function Card({jobTitle, startDate, endDate, description}) {
    return (
        <>
            <div className="flex flex-col text-left text-white">
                <p>{startDate} - {endDate}</p>
                <p>{jobTitle}</p>
                <p>{description}</p>
            </div>
        </>
    )
}