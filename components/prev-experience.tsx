import dayjs from 'dayjs'
import {WorkExperience} from "@/lib/data";
import {Badge} from "@/components/ui/badge";


export const PrevExperience = ({companyName, title, description, startDate, endDate, technologies}: WorkExperience) => {
    const periodInMonths = dayjs(endDate).diff(startDate, 'months')
    const years = Math.floor(periodInMonths / 12)
    const months = periodInMonths % 12
    const yearsText = years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}` : ''
    const monthsText = months > 0 ? `${months} ${months > 1 ? 'months' : 'month'}` : ''
    return (
        <div className="flex text-sm mb-6">
            <div
                className="whitespace-nowrap uppercase mr-4 text-xs">{dayjs(startDate).format('MMM YYYY')} — {endDate ? dayjs(endDate).format('MMM YYYY') : "present"}</div>
            <div>
                <div>{title} at {companyName} </div>
                <ul className="flex flex-col">{description.map((d, index) => <li key={index}><p>{d}</p></li>)}</ul>
                <div>{yearsText} {monthsText}</div>
                <div className="flex gap-x-1.5">{technologies.map(t => <Badge key={t}>{t}</Badge>)}</div>
            </div>
        </div>
    )
}