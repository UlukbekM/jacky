import { Separator } from "@/components/ui/separator";
import { ProjectsList } from "./ProjectsList";
import Project from "./Project";

// https://delba.dev/
// https://github.com/delbaoliveira/website/blob/main/ui/SiteHeader.tsx
export default function Projects() {
    return (
        <div className="flex flex-col px-4 md:px-0">
            <div className="text-2xl font-bold">
                Projects
            </div>
            <Separator className="my-4 bg-muted-foreground" />

            <div className="space-y-5">
                {ProjectsList.map((project,index) => (
                    <Project key={index} {...project}/>
                ))}
            </div>
        </div>
    );
}
