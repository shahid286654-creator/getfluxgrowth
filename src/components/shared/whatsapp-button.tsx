"use client";

import { WhatsAppIcon } from "@/components/shared/social-icons";
import { useCurrency } from "@/components/providers/currency-provider";
import { whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  const { currency } = useCurrency();
  return (
    <a
      href={whatsappHref(undefined, currency)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105 sm:right-6 sm:bottom-6 sm:px-5"
    >
      <WhatsAppIcon className="size-6" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
