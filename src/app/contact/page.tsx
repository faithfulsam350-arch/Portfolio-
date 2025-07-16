'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Linkedin, Mail, Twitter } from 'lucide-react';
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
import { ScrollAnimation } from '@/components/scroll-animation';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.2 9.4h5.1v1.2H4.2zM14.2 14.5a2.2 2.2 0 0 0 2.3-2.3v-.3a2.3 2.3 0 0 0-2.3-2.3h-5.6v4.9h5.6a2.3 2.3 0 0 0 0 0zM14.2 11.1a1 1 0 0 1 1 1.1v.2a1 1 0 0 1-1 1.1h-4.3v-2.4zm-3.3-2.9h4.3v1.2h-4.3z"/>
        <path d="M18.6 7h-3.9v1.2h3.9z"/>
        <path d="M4.2 6.1a1.2 1.2 0 0 1 1.2-1.2h12.5a1.2 1.2 0 0 1 1.2 1.2v11.8a1.2 1.2 0 0 1-1.2-1.2H5.4a1.2 1.2 0 0 1-1.2-1.2z"/>
    </svg>
)

const socialLinks = [
    { name: 'Behance', icon: BehanceIcon, href: SOCIAL_LINKS.behance },
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
      <ScrollAnimation className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </ScrollAnimation>
      <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <ScrollAnimation className="lg:col-span-2">
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
        </ScrollAnimation>
        <ScrollAnimation delay="200" className="space-y-6">
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
        </ScrollAnimation>
      </div>
    </div>
  );
}
