import dayjs from 'dayjs'
import {WorkExperience} from "@/lib/data";
import {Badge} from "@/components/ui/badge";


export const PrevExperience = ({companyName, title, description, startDate, endDate, technologies}: WorkExperience) => {
    return (
        <div className="flex flex-col sm:flex-row mb-6">
            <div className="whitespace-nowrap uppercase mr-4 text-xs">
                {dayjs(startDate).format('MMM YYYY')} — {endDate ? dayjs(endDate).format('MMM YYYY') : "present"}
            </div>
            <div className="flex flex-col gap-y-3">
                <div>{title} at {companyName} </div>
                <ul className="flex flex-col gap-y-1.5">{description.map((d, index) => (
                    <li key={index}>
                        <p className="text-sm">{d}</p>
                    </li>
                ))}</ul>
                <div className="flex flex-wrap gap-1.5">
                    {technologies.map(technology => <Badge key={technology}>{technology}</Badge>)}
                </div>
            </div>
        </div>
    )
}