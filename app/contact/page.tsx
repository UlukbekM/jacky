import ContactForm from "./ContactForm";
import { Separator } from "@/components/ui/separator"

export default function Contact() {

    return (
        <div className="flex flex-col px-4 md:px-0">
            <div className="text-2xl font-bold">
                Contact Me
            </div>
            <Separator className="my-4 bg-muted-foreground" />

            <ContactForm />
        </div>
    );
}
