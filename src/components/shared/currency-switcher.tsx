"use client";

import { useCurrency } from "@/components/providers/currency-provider";
import { currencyLabels } from "@/lib/data/pricing";
import type { Currency } from "@/lib/currency";
import { cn } from "@/lib/utils";

const options = Object.keys(currencyLabels) as Currency[];

export function CurrencySwitcher({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = options[(options.indexOf(currency) + step + options.length) % options.length];
    setCurrency(next);
    e.currentTarget.querySelector<HTMLButtonElement>(`[data-currency="${next}"]`)?.focus();
  }

  return (
    <div
      role="radiogroup"
      aria-label="Show prices in"
      onKeyDown={onKeyDown}
      className={cn("glass inline-flex max-w-full gap-0.5 rounded-full p-1 sm:gap-1", className)}
    >
      {options.map((option) => {
        const checked = option === currency;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={checked ? 0 : -1}
            data-currency={option}
            onClick={() => setCurrency(option)}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors sm:px-4 sm:text-sm",
              checked
                ? "bg-white text-brand-950"
                : "text-muted-foreground hover:bg-white/10 hover:text-foreground"
            )}
          >
            {currencyLabels[option]}
          </button>
        );
      })}
    </div>
  );
}
