import Link from "next/link";
import { Sparkles, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/container";
import { LinkedinIcon, InstagramIcon } from "@/components/shared/social-icons";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <Container className="py-12">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-fuchsia-500 text-background">
              <Sparkles className="size-4" />
            </span>
            <span className="text-lg">{siteConfig.name}</span>
          </Link>

          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-foreground"
            >
              <Mail className="size-4 shrink-0" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground"
            >
              <MessageCircle className="size-4 shrink-0" />
              {siteConfig.whatsappDisplay}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-brand-400/40 hover:text-foreground"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-brand-400/40 hover:text-foreground"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
