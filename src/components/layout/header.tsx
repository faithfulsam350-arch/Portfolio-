
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gem, Menu, Mountain } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Gem className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Faithful's
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* You can add a command menu here if you want */}
          </div>
          <nav className="hidden md:flex items-center">
            <Button asChild>
                <Link href="/contact">Contact Me</Link>
            </Button>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                        <Gem className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline">Faithful's</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === link.href
                                ? "text-foreground"
                                : "text-foreground/60"
                            )}
                        >
                            {link.label}
                        </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
