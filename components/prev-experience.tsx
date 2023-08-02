import dayjs from 'dayjs'
import {WorkExperience} from "@/lib/data";
import {Badge} from "@/components/ui/badge";
import {BadgeCheck} from "lucide-react";
import {TooltipWrapper} from "@/components/ui/tooltip-wrapper";


export const PrevExperience = ({
                                   companyName,
                                   title,
                                   confirmedExperience,
                                   description,
                                   startDate,
                                   endDate,
                                   technologies
                               }: WorkExperience) => {
    return (
        <div className="flex flex-col sm:flex-row mb-6">
            <div className="whitespace-nowrap uppercase mr-4 mb-2 sm:mb-0 text-xs text-muted-foreground">
                {dayjs(startDate).format('MMM YYYY')} — {endDate ? dayjs(endDate).format('MMM YYYY') : "present"}
            </div>
            <div className="flex flex-col gap-y-3">
                <div
                    className="flex content-center font-semibold leading-tight">{title} at {companyName} {confirmedExperience &&
                        <TooltipWrapper content="Experience Confirmed: Supported by a Reference Letter from This Place of Work.">
                            <BadgeCheck color={"#1d9bf0"}
                                        size={18}
                                        className="ml-1"/>
                        </TooltipWrapper>
                    }
                </div>
                <ul className="flex flex-col gap-y-1.5">{description.map((d, index) => (
                    <li key={index}>
                        <p className="text-sm [text-wrap:balance]">{d}</p>
                    </li>
                ))}</ul>
                <div className="flex flex-wrap gap-1.5">
                    {technologies.map(technology => <Badge key={technology}>{technology}</Badge>)}
                </div>
            </div>
        </div>
    )
}