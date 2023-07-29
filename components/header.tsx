import {ThemeSwitcher} from "@/components/theme-switcher";

export function Header() {
    return (
        <header className="flex">
        <h1>Header</h1>
            <ThemeSwitcher />
        </header>
    )
}