'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Linkedin, Mail, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

const socialLinks = [
    { name: 'GitHub', icon: Github, href: SOCIAL_LINKS.github },
    { name: 'LinkedIn', icon: Linkedin, href: SOCIAL_LINKS.linkedin },
    { name: 'Twitter', icon: Twitter, href: SOCIAL_LINKS.twitter },
]

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="lg:col-span-2">
            <Card>
                <CardContent className="p-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                <Textarea placeholder="How can I help you?" {...field} rows={6} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit">Send Message</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold">Contact Details</h3>
            <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                    <Mail className="h-6 w-6 text-primary"/>
                    <span className="text-foreground group-hover:text-primary transition-colors">hello@example.com</span>
                </a>
                <p className="text-muted-foreground">
                    Feel free to send me an email directly or connect with me on social media.
                </p>
            </div>
             <div className="space-y-2">
                <h4 className="font-semibold">Find me on social media</h4>
                <div className="flex space-x-2">
                    {socialLinks.map(link => (
                        <Button key={link.name} variant="outline" size="icon" asChild>
                            <Link href={link.href} target="_blank" rel="noopener noreferrer">
                                <link.icon className="h-5 w-5"/>
                                <span className="sr-only">{link.name}</span>
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
