"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import { toast } from "@/components/hooks/use-toast"
import { useToast } from "@/hooks/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"


const FormSchema = z.object({
    message: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(160, {
            message: "Bio must not be longer than 30 characters.",
        }),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    jackyEmail: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
})

export default function ContactForm() {
    const { toast } = useToast()
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [message,setMessage] = useState<string>("")

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            jackyEmail: "jackychen@email.com",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const mailtoLink = `mailto:${data.jackyEmail}?subject=Message from ${data.name} from your portfolio &body=${encodeURIComponent(data.message)}`;
        window.location.href = mailtoLink;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-6">
                <div className="space-y-6 basis-2/6">
                    <FormField
                    control={form.control}
                    name="jackyEmail"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-semibold">My Email</FormLabel>
                        <FormControl>
                            <Input
                            type="text"
                            placeholder="jackychen@email.com"
                            className="py-2"
                            disabled
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-semibold">Your Name</FormLabel>
                        <FormControl>
                            <Input
                            type="text"
                            placeholder="Name"
                            className="py-2"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                            <Input
                            type="email"
                            placeholder="Email"
                            className="py-2"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    /> */}
                </div>

                <div className="grid w-full gap-2 basis-4/6">
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="font-semibold">Your Message</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="Type your message here."
                            className="min-h-60"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <Button type="submit">Send message</Button>
                </div>
            </form>
        </Form>
    );
}
