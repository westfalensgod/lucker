import {ExternalLink, Github, Linkedin} from "lucide-react";
import {CVButton} from "@/components/cv-button";

export default function Home() {
    return (
        <main className="flex container">
            <aside className="flex-col">
                <section className="mb-8">
                    <h1 className="text-2xl font-bold mb-2">Yanis Vestfalskii</h1>
                    <p className="text-muted-foreground mb-4 text-sm">Lead Frontend Engineer</p>
                </section>
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Articles</h3>
                    <ul className="flex flex-col">
                        <li className="space-y-1.5">
                            <a className="!no-underline"
                               href="https://medium.com/@yanisneverlies/leveling-up-practices-every-react-developer-should-know-memoization-80cf693f456d"
                               target="_blank">
                                <span className="flex font-medium underline underline-offset-4 text-sm">
                                    Practices every React developer should know: Memoization<ExternalLink
                                    className="ml-1" size={12}/>
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Projects</h3>
                    <ul className="flex flex-col">
                        <li className="space-y-1.5">
                            <a className="!no-underline"
                               href="#"
                               target="_blank">
                                <span className="flex font-medium underline underline-offset-4 text-sm">
                                    🚧 React patterns
                                </span>
                            </a>
                            <p className="text-muted-foreground text-sm">A database with infographics about different React patterns with production examples</p>
                        </li>
                    </ul>
                </section>
                <CVButton/>
                <div className="flex gap-x-3">
                    <a href="https://github.com/yanisneverlies" target="_blank" className="text-lg font-bold">
                        <Github size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/yanisneverlies/" target="_blank" className="text-lg font-bold">
                        <Linkedin size={20}/>
                    </a>
                </div>
            </aside>
            <section>
                Content
            </section>
        </main>
    )
}
