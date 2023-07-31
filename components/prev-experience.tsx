import dayjs from 'dayjs'
import {WorkExperience} from "@/lib/data";


export const PrevExperience = ({ companyName, title, description, startDate, endDate, technologies }: WorkExperience) => {
    const periodInMonths = dayjs(endDate).diff(startDate, 'months')
    const years = Math.floor(periodInMonths / 12)
    const months = periodInMonths % 12
    return (
        <div className="flex flex-col">
            <div>{companyName}</div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{startDate}</div>
            <div>{endDate}</div>
            <div>{`${years} ${years > 1 ? 'years' : 'year'}`} {`${months} ${months > 1 ? 'months' : 'month'}`}</div>
            <div>{technologies}</div>
        </div>
    )
}