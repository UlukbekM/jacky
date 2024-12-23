"use client"

interface ProjectProps {
    title: string,
    github: string,
    link: string,
    description: string,
    icons: string,
    date: string,
    images: string[],
    youtube: string
}

export default function Project(project:ProjectProps) {
    let { title, github, description, icons, link, date, images, youtube } = project

    return (
        <div className="m-5 p-5 flex flex-col space-y-2 bg-gray-800 bg-opacity-30 hover:bg-opacity-50 dark:bg-white  rounded-lg dark:bg-opacity-5 duration-300 dark:hover:bg-opacity-10 hover:cursor-pointer">
            <img src={images[0]} className="rounded-lg "/>
            <div className="flex flex-col space-y-2">
                <div className="text-xl font-semibold">{title}</div>
                <div className="text-muted-foreground">{description}</div>
            </div>
        </div>
    );
}
