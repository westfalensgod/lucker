export interface Article {
    id: number
    title: string
    link: string
}

export const articles: Article[] = [{
    id: 1,
    title: "Memoization in React",
    link: "https://medium.com/@yanisneverlies/leveling-up-practices-every-react-developer-should-know-memoization-80cf693f456d"
}]

export interface Project {
    id: number
    title: string
    link: string
    description: string
}

export const projects: Project[] = [{
    id: 1,
    title: "🚧 React patterns",
    link: "#",
    description: "A database with infographics about different React patterns with production examples"
}]

// Rename place
export interface WorkExperience {
    id: number
    title: string
    companyName: string
    description: string[]
    startDate: string
    endDate: string
    technologies: string[]
}

export const experience: WorkExperience[] = [{
    id: 1,
    title: "Frontend Engineer",
    companyName: "ZoomTools",
    description: [
        'Developed and maintained a variety of projects, with a focus on React, Redux, Webpack, React Native, and Next.js.',
        'Built web applications from scratch, transforming Figma mockups into fully functional pages and components using React and Next.js.'
    ],
    startDate: "01.10.2017",
    endDate: "01.03.2019",
    technologies: ["React", "Redux", "Webpack", "React Native", "Next.js"]
}]