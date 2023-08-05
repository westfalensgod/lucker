'use client'
import * as amplitude from '@amplitude/analytics-browser'
import {Article} from "@/shared/lib/data";
import {memo} from "react";


export const ArticleLink = memo(({ title, link }: Article) => {
    const handleClick = () => {
        amplitude.track('View Article', { title })
    }

    return (
        <a className="!no-underline inline-block" href={link} target="_blank" onClick={handleClick}>
            <span className="flex font-medium underline underline-offset-4 text-sm">
                {title}
            </span>
        </a>
    )
})

ArticleLink.displayName = 'ArticleLink'