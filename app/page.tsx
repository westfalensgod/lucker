import {CVButton} from "@/components/cv-button";
import {projects } from "@/lib/data";
import {ProjectLink} from "@/components/project-link";
import {SocialLinks} from "@/components/social-links";
import {ThemeSwitcher} from '@/components/theme-switcher'

export default function Home() {
    return (
        <main className="flex flex-col sm:flex-row container gap-y-8 pt-4">
            <aside className="w-full mr-8">
                <section className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                    <h1 className="text-2xl font-bold">Yanis Vestfalskii</h1>
                        <ThemeSwitcher />
                    </div>
                    <p className="text-muted-foreground text-sm">Lead Frontend Engineer</p>
                </section>
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Projects</h3>
                    <ul className="flex flex-col space-y-2">
                        {projects.map((project) => (
                            <li key={project.id} className="inline-block space-y-1.5">
                                <ProjectLink {...project} />
                            </li>
                        ))}
                    </ul>
                </section>
                <CVButton/>
                <SocialLinks/>
            </aside>
        </main>
    )
}
