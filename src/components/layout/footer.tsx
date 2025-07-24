import Link from "next/link";
import { Gem, Linkedin, Mail, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.2 9.4h5.1v1.2H4.2zM14.2 14.5a2.2 2.2 0 0 0 2.3-2.3v-.3a2.3 2.3 0 0 0-2.3-2.3h-5.6v4.9h5.6a2.3 2.3 0 0 0 0 0zM14.2 11.1a1 1 0 0 1 1 1.1v.2a1 1 0 0 1-1 1.1h-4.3v-2.4zm-3.3-2.9h4.3v1.2h-4.3z"/>
        <path d="M18.6 7h-3.9v1.2h3.9z"/>
        <path d="M4.2 6.1a1.2 1.2 0 0 1 1.2-1.2h12.5a1.2 1.2 0 0 1 1.2 1.2v11.8a1.2 1.2 0 0 1-1.2 1.2H5.4a1.2 1.2 0 0 1-1.2-1.2z"/>
    </svg>
)

export function Footer() {
  const socialLinks = [
    { href: SOCIAL_LINKS.behance, icon: BehanceIcon, label: 'Behance' },
    { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.twitter, icon: Twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Gem className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">Faithful's Portfolio</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button key="email" variant="ghost" size="icon" asChild>
                <Link href="mailto:faithfulsam350@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
            </Button>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Button key={href} variant="ghost" size="icon" asChild>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-8 border-t border-border/40 pt-8">
          © {new Date().getFullYear()} Faithful's Portfolio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
