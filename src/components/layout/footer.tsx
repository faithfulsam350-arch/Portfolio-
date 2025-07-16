import Link from "next/link";
import { Behance, Gem, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { href: SOCIAL_LINKS.behance, icon: Behance, label: 'Behance' },
    { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.twitter, icon: Twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Gem className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">Prismatic Portfolio</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button key="email" variant="ghost" size="icon" asChild>
                <Link href="mailto:hello@example.com">
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
          © {new Date().getFullYear()} Prismatic Portfolio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
