import Link from "next/link";
import { Gem, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
)

export function Footer() {
  const socialLinks = [
    { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.twitter, icon: XIcon, label: 'X' },
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
