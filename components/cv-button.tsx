'use client'

import {Button} from "@/shared/ui/registry/button";
import {useCallback} from "react";
import * as amplitude from '@amplitude/analytics-browser'


export const CVButton: React.FC = () => {
    const handleClick = useCallback(() => {
        amplitude.track('Download CV')
        window.open("/cv.pdf", "_blank")
    }, [])
    return (
        <Button className="mb-4" onClick={handleClick}>Download CV</Button>
    );
}