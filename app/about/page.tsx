import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Linkedin, Mail, Twitter } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col">
            <div className="text-2xl font-bold">
                About
            </div>
            <Separator className="my-4 bg-muted-foreground" />
            <div className="flex">
                <div className="flex flex-col justify-center items-center space-y-4 basis-1/3">
                    <img src="https://tailwind-nextjs-starter-blog.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&w=256&q=75" className="rounded-full"/>
                    <div className="flex flex-col items-center space-y-2">
                        <div className="text-center text-3xl font-bold">
                            Jacky Chen
                        </div>
                        <div className="text-2xl">where broski works</div>
                        <div className="flex space-x-4">
                            <Mail />
                            <Linkedin />
                            <Twitter />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col basis-2/3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec venenatis velit. Quisque cursus dui sed nulla tincidunt, at ultricies libero gravida. Aliquam erat volutpat. Donec volutpat scelerisque purus, nec laoreet nisi faucibus ac. Suspendisse potenti. Sed malesuada sapien ac fermentum scelerisque. Pellentesque vehicula nisi eu augue vulputate, ut faucibus risus vehicula.</p>
                    <p>Nullam auctor enim id dolor fringilla, et tincidunt turpis laoreet. Integer ac ligula nec sapien pellentesque tincidunt. Vestibulum nec justo nisi. Curabitur at sapien vel sem suscipit suscipit. Maecenas congue risus non dui interdum, vel consequat lorem facilisis. Sed quis gravida enim, a accumsan massa. Morbi tristique ex a libero rhoncus, sit amet ultricies odio convallis. Nunc venenatis, eros vel fermentum ultrices, justo urna dapibus magna, vel viverra eros sapien sit amet sem.</p>
                    <p>Praesent nec sapien sit amet arcu dictum dictum vel id est. Fusce tempor eros a justo tincidunt facilisis. Etiam sollicitudin fermentum libero, a malesuada nisi vehicula id. Proin sit amet ultricies ligula. Ut tincidunt malesuada erat, non blandit nisi viverra ut. Pellentesque nec fringilla ex. Donec accumsan sem vel tincidunt vehicula. Mauris hendrerit faucibus magna, eget pellentesque turpis viverra a. Cras posuere feugiat nisi a aliquet. Aenean sed efficitur justo.</p>
                </div>
            </div>
        </div>
    );
}
