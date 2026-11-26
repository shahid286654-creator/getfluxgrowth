"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { WhatsAppIcon } from "@/components/shared/social-icons";
import { useCurrency } from "@/components/providers/currency-provider";
import { navLinks, siteConfig, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { currency } = useCurrency();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link href="/" aria-label={siteConfig.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:opacity-90"
          >
            <a href={whatsappHref(undefined, currency)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass w-72 border-l border-white/10">
            <SheetHeader>
              <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button
                  asChild
                  className="mt-4 bg-gradient-to-r from-brand-600 to-brand-400 text-white"
                >
                  <a href={whatsappHref(undefined, currency)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-4" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
