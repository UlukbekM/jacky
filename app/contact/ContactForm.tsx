"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
            message: "Message must be at least 10 characters.",
        })
        .max(1500, {
            message: "Message must not be longer than 1500 characters.",
        }),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
})
// https://www.downgraf.com/storage/2019/02/Contact-Us-Page-Designs-014.jpg
export default function ContactForm() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            message: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const mailtoLink = `mailto:jackychen60@gmail.com?subject=Message from ${data.name} from your portfolio &body=${encodeURIComponent(data.message)}`;
        window.location.href = mailtoLink;
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-y-6 md:space-y-0 md:space-x-6 flex-col md:flex-row my-4">
                <div className="space-y-6 md:basis-2/6">
                    <div>
                        <Label className="font-semibold">My Email</Label>
                        <Input defaultValue="jackychen60@gmail.com" readOnly className="my-2 border-muted-foreground dark:border-muted"/>
                    </div>

                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                        <FormLabel className={`font-semibold ${form.formState.errors.name && "text-red-500" }`}>
                            Your Name
                        </FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Name" className="py-2 border-muted-foreground dark:border-muted" {...field} />
                        </FormControl>
                        <FormMessage className={`${form.formState.errors.name && "text-red-500" }`}/>
                        </FormItem>
                    )}/>
                </div>

                <div className="grid w-full gap-2 md:basis-4/6">
                    <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                        <FormLabel className={`font-semibold ${form.formState.errors.message && "text-red-500" }`}>Your Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Type your message here." className="min-h-60 border-muted-foreground dark:border-muted" {...field} />
                        </FormControl>
                        <FormMessage className={`${form.formState.errors.message && "text-red-500" }`}/>
                        </FormItem>
                    )}/>

                    <Button type="submit" className="my-2">Send message</Button>
                </div>
            </form>
        </Form>
    );
}
