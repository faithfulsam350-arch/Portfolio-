'use client';

import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { ScrollAnimation } from '@/components/scroll-animation';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" {...props}><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.61L604.311 515.674L651.779 583.568L1058.85 1152.3H896.252L569.165 687.828Z" fill="currentColor"/></svg>
)

export default function ContactPage() {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: SOCIAL_LINKS.linkedin },
    { name: 'X', icon: XIcon, href: SOCIAL_LINKS.twitter },
  ];

  return (
    <div className="container mx-auto px-6 md:px-[100px] py-12 md:py-16">
      <ScrollAnimation className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'd love to hear from you. The best way to reach me is by email or through social media.
        </p>
      </ScrollAnimation>

      <ScrollAnimation className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Let's Connect</CardTitle>
            <CardDescription>
              Feel free to send me an email directly or connect with me on social media.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <a href="mailto:faithfulsam350@gmail.com" className="flex items-center gap-4 group p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <Mail className="h-8 w-8 text-primary"/>
              <div>
                <h3 className="font-semibold text-foreground">Email Me</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">faithfulsam350@gmail.com</p>
              </div>
            </a>
            
            <div className="p-4 space-y-3">
                <h4 className="font-semibold text-foreground">Find me on social media</h4>
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
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  );
}