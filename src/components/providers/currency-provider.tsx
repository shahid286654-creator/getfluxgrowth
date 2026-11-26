"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CURRENCY_COOKIE, timezoneToCurrency, type Currency } from "@/lib/currency";

const CurrencyContext = createContext<{
  currency: Currency;
  setCurrency: (currency: Currency) => void;
} | null>(null);

export function CurrencyProvider({
  initialCurrency,
  detectedOnServer,
  children,
}: {
  initialCurrency: Currency;
  detectedOnServer: boolean;
  children: React.ReactNode;
}) {
  // Starts from the server's value so the first client render matches the HTML.
  const [currency, setCurrencyState] = useState(initialCurrency);

  useEffect(() => {
    if (detectedOnServer) return;
    setCurrencyState(timezoneToCurrency(Intl.DateTimeFormat().resolvedOptions().timeZone));
  }, [detectedOnServer]);

  function setCurrency(next: Currency) {
    setCurrencyState(next);
    document.cookie = `${CURRENCY_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside <CurrencyProvider>");
  return ctx;
}
