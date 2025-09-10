
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gem, Menu } from "lucide-react";
import { useState } from "react";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo - always visible */}
        <Link href="/" className="flex items-center space-x-2">
          <Gem className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block font-headline">
            Faithful
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
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
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </nav>

        {/* Mobile: Hamburger Menu Trigger */}
        <div className="flex md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="flex flex-col">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                        <Gem className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline">Faithful</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
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
                    <div className="mt-auto">
                        <Button asChild className="w-full">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
