'use client'
import {Github, Linkedin} from "lucide-react";
import * as amplitude from '@amplitude/analytics-browser'
import {memo} from "react";

export const SocialLinks = memo(() => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const id = e.currentTarget.id
        amplitude.track('Open Social', {id})
    }
    return <div className="flex gap-x-3">
        <a href="https://github.com/yanisneverlies" id="github" target="_blank" className="text-lg font-bold"
           onClick={handleClick}>
            <Github size={20} pointerEvents="none"/>
        </a>
        <a href="https://www.linkedin.com/in/yanisneverlies/" id="linkedin" target="_blank"
           className="text-lg font-bold" onClick={handleClick}>
            <Linkedin size={20} pointerEvents="none"/>
        </a>
    </div>
})

SocialLinks.displayName = 'SocialLinks'