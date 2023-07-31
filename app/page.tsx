import {ExternalLink, Github, Linkedin} from "lucide-react";
import {CVButton} from "@/components/cv-button";
import {articles, projects, experience} from "@/lib/data";
import {ArticleLink} from "@/components/article-link";
import {ProjectLink} from "@/components/project-link";
import {SocialLinks} from "@/components/social-links";
import {PrevExperience} from "@/components/prev-experience";

export default function Home() {
    return (
        <main className="flex flex-col sm:flex-row container gap-y-8">
            <aside className="flex-col">
                <section className="mb-8">
                    <h1 className="text-2xl font-bold mb-2">Yanis Vestfalskii</h1>
                    <p className="text-muted-foreground mb-4 text-sm">Lead Frontend Engineer</p>
                </section>
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Articles</h3>
                    <ul className="flex flex-col space-y-2">
                        {articles.map((article) => (
                            <li className="space-y-1.5" key={article.id}>
                                <ArticleLink {...article} />
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Projects</h3>
                    <ul className="flex flex-col space-y-2">
                        {projects.map((project) => (
                            <li key={project.id} className="space-y-1.5">
                                <ProjectLink {...project} />
                            </li>
                        ))}
                    </ul>
                </section>
                <CVButton/>
                <SocialLinks/>
            </aside>
            <section className="overflow-y-auto">
                <h3 className="text-lg font-semibold mb-2">Full-time Experience</h3>
                {experience.map((workExperience) => (
                    <PrevExperience key={workExperience.id} {...workExperience} />
                ))}
                <h3 className="text-lg font-semibold mb-2">Side Projects</h3>
            </section>
        </main>
    )
}
