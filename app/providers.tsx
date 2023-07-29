'use client'

import {PropsWithChildren, useEffect} from "react";
import * as amplitude from '@amplitude/analytics-browser'

export const AmplitudeProvider = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || '')
        amplitude.track('View Page')
    }, [])

    return children
}