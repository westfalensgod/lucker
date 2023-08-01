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
    startDate: Date
    endDate?: Date
    technologies: string[]
}

export const experience: WorkExperience[] = [{
    id: 1,
    title: "Frontend Engineer",
    companyName: "ZoomTools",
    description: [
        'Developed and maintained a variety of projects, with a focus on React, Redux, Webpack, React Native, and Next.js. Built web applications from scratch, transforming Figma mockups into fully functional pages and components using React and Next.js.'
    ],
    startDate: new Date("October 1, 2017"),
    endDate: new Date("March 1, 2019"),
    technologies: ["JavaScript", "React", "Redux", "Webpack", "React Native", "Next.js"]
},
    {
        id: 2,
        title: "Middle Frontend Engineer",
        companyName: "Tennisi",
        description: [
            'Transitioned the application from JavaScript to TypeScript and implemented Immutable.js to significantly improve data structure handling speed. Collaborated with the backend team to rewrite and restructure the API for better performance and optimized frontend data processing.'
        ],
        startDate: new Date("June 1, 2019"),
        endDate: new Date("May 1, 2021"),
        technologies: ["TypeScript", "React", "Redux", "Webpack", "Immutable.js"]
    },
    {
        id: 3,
        title: "Team Lead / Senior Software Engineer",
        companyName: "Grid Dynamics",
        description: [
            "Led a team of 10 engineers to revamp an outdated warehouse planogram app, reducing load speed from several minutes to hundreds of milliseconds. Utilized webpack module federation to seamlessly integrate the app within a larger warehouse ecosystem.",
            "Guided a team of 4 engineers in successfully transitioning an eCommerce marketplace application from client-side to server-side, resulting in remarkable improvements in page speed loading. Achieved a boost from 16 to 65 points on desktop and a remarkable increase from 1 to 35 on mobile devices.",
        ],
        startDate: new Date("May 1, 2021"),
        endDate: new Date("July 1, 2023"),
        technologies: ["TypeScript", "React", "Redux", "AWS", "Next.js"]
    },
    // {
    //     id: 4,
    //     title: "Lead Frontend Engineer",
    //     companyName: "Holland & Barrett",
    //     description: [],
    //     startDate: new Date("August 1, 2023"),
    //     technologies: ["TypeScript", "React", "Next.js", "Tailwind"]
    // }
]