import Link from "next/link";
import { Gem, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" {...props}><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.61L604.311 515.674L651.779 583.568L1058.85 1152.3H896.252L569.165 687.828Z" fill="currentColor"/></svg>
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
