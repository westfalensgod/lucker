import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface TooltipWrapper {
    children: React.ReactNode
    content: React.ReactNode
 }

export const TooltipWrapper = ({ children, content }: TooltipWrapper) => (
    <TooltipProvider delayDuration={150}>
        <Tooltip>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent>
                {content}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
)