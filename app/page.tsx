import {ExternalLink, Github, Linkedin} from "lucide-react";
import {CVButton} from "@/components/cv-button";
import {articles, projects, experience, sideProjects} from "@/shared/lib/data";
import {ArticleLink} from "@/components/article-link";
import {ProjectLink} from "@/components/project-link";
import {SocialLinks} from "@/components/social-links";
import {PrevExperience} from "@/components/prev-experience";
import dayjs from "dayjs";
import {getCurrentWorkingExperience} from "@/shared/lib/utils";
import {ScrollArea} from "@/shared/ui/registry/scroll-area";

export default function Home() {
    return (
        <main className="flex flex-col sm:flex-row container gap-y-8">
            <aside className="w-full mr-8">
                <section className="mb-8">
                    <h1 className="text-2xl font-bold mb-2">Yanis Vestfalskii</h1>
                    <p className="text-muted-foreground text-sm">Lead Frontend Engineer</p>
                </section>
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Articles</h3>
                    <ol className="flex flex-col space-y-2">
                        {articles.map((article) => (
                            <li className="space-y-1.5" key={article.id}>
                                <ArticleLink {...article} />
                            </li>
                        ))}
                    </ol>
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
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">About</h3>
                    <p className="text-sm">This site is built with <a className="font-medium underline underline-offset-4 text-sm" href="https://nextjs.org/" target="_blank">Next.js</a>, <a className="font-medium underline underline-offset-4 text-sm" href="https://tailwindcss.com/
                    " target="_blank">Tailwind CSS</a> and <a className="font-medium underline underline-offset-4 text-sm" href="https://ui.shadcn.com/" target="_blank">shadcn UI</a>. Deployed with <a className="font-medium underline underline-offset-4 text-sm" href="https://vercel.com/" target="_blank">Vercel</a>. The source code is available on <a className="font-medium underline underline-offset-4 text-sm" href="https://github.com/yanisneverlies/lucker" target="_blank">GitHub</a>.</p>
                </section>
                <CVButton/>
                <SocialLinks/>
            </aside>

            <ScrollArea className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Full-time Experience ({getCurrentWorkingExperience()})</h3>
                {experience
                    .sort((a, b) => {
                        return dayjs(a.startDate) > dayjs(b.startDate) ? -1 : 1
                    })
                    .map((workExperience) => (
                        <PrevExperience key={workExperience.id} {...workExperience} />
                    ))
                }
                <h3 className="text-lg font-semibold mb-2">Side Projects</h3>
                {sideProjects
                    .sort((a, b) => {
                        return dayjs(a.startDate) > dayjs(b.startDate) ? -1 : 1
                    })
                    .map((sideProject) => (
                        <PrevExperience key={sideProject.id} {...sideProject} />
                    ))
                }
            </ScrollArea>
        </main>
    )
}
