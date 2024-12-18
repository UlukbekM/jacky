import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

// https://www.thvu.dev/about
// https://www.devportfolios.dev/

export default function About() {
    return (
        <div className="flex flex-col px-4 mb-8 md:px-0">
            <div className="text-2xl font-bold">
                About
            </div>
            <Separator className="my-4 bg-muted-foreground" />
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col justify-center items-center space-y-2 basis-1/3 mb-4 md:mb-0">
                    <img src="https://tailwind-nextjs-starter-blog.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&w=256&q=75" className="rounded-full md:rounded-lg h-48"/>
                    <div className="flex flex-col space-y-2">
                        <div className="text-3xl font-bold text-center">
                            Jacky Chen
                        </div>
                        <div className="text-2xl text-muted-foreground">where broski works</div>
                        <div className="flex space-x-4 justify-between">
                            <Mail className="hover:text-primary hover:cursor-pointer md:w-6 md:h-6"/>
                            <Linkedin className="hover:text-primary hover:cursor-pointer md:w-6 md:h-6"/>
                            <Twitter className="hover:text-primary hover:cursor-pointer md:w-6 md:h-6"/>
                            <Instagram className="hover:text-primary hover:cursor-pointer md:w-6 md:h-6"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col basis-2/3 space-y-2 tracking-wide">
                    <div>
                        <div className="text-2xl font-semibold">
                            About Me
                        </div>
                        <div className="text-muted-foreground font-medium">
                            I'm a digital product designer specializing on web and mobile platforms, currently working as a Senior Product Designer at GitHub.
                            Throughout my career, I've had the opportunity to design and ship products for leading brands at Mobiquity, and enhance customer travel experiences at Booking.com, and design for other organizations across various industries.
                            In my downtime, I like to unplug and engage in activities that fuel my creativity and offer fresh perspectives.
                        </div>
                    </div>

                    <div>
                        <div className="text-2xl font-semibold">
                            Contact
                        </div>
                        <div className="text-muted-foreground font-medium">
                            I'm not very active on social media, but feel free to connect with me on LinkedIn, or reach out via email.
                            I also have a mostly inactive Twitter account, which I occasionally use to keep up with the latest news. I don't have a Facebook or Instagram account.
                        </div>
                    </div>

                    <div>
                        <div className="text-2xl font-semibold">
                            This Site
                        </div>
                        <div className="text-muted-foreground font-medium">
                            This website was built with Tailwind and Jekyll. The source is on GitHub, and it's hosted and deployed via Netlify.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
