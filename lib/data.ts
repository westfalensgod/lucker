export interface Article {
    id: number
    title: string
    link: string
}

export const articles: Article[] = [
    {
        id: 1,
        title: "Memoization in React",
        link: "https://medium.com/@yanisneverlies/leveling-up-practices-every-react-developer-should-know-memoization-80cf693f456d"
    },
    {
        id: 2,
        title: "Integrate TickTick with Fantastical using Zapier",
        link: "https://medium.com/@yanisneverlies/how-to-integrate-ticktick-with-fantastical-using-zapier-61ffc585d4c4",
    }
]

export interface Project {
    id: number
    title: string
    link: string
    description: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Wishers',
        link: 'https://wishers.io',
        description: 'Create a wishlist and share it with your friends and family.'
    },
    {
        id: 2,
        title: "🚧 Frontend Notes",
        link: "#",
        description: "A database with notes about different Frontend patterns with production examples"
    },
]
