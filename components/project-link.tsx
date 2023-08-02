'use client'
import {ExternalLink} from "lucide-react";
import * as amplitude from '@amplitude/analytics-browser'
import {Project} from "@/lib/data";
import {memo} from "react";


export const ProjectLink = memo(({ title, link, description }: Project) => {
    const handleClick = () => {
        amplitude.track('View Project', { title })
    }

    return (
        <>
            <a className="!no-underline inline-block" href={link} onClick={handleClick}>
                <span className="flex font-medium underline underline-offset-4 text-sm">
                    {title}
                </span>
            </a>
            <p className="text-muted-foreground text-sm">{description}</p>
        </>
    )
})

ProjectLink.displayName = 'ProjectLink'