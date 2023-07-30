import {ThemeSwitcher} from "@/components/theme-switcher";
import Link from "next/link";

export function Header() {
    return (
        <header className="container">
            <div className="flex items-center justify-between py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex flex-col space-y-1 text-sm leading-none "><span
                        className="text-lg font-bold">yanisneverlies</span></div>
                </Link>
                <ThemeSwitcher/>
            </div>
        </header>
    )
}