export type Currency = "MUR" | "INR" | "USD";

export const CURRENCY_COOKIE = "fg_currency";

export function isCurrency(value: unknown): value is Currency {
  return value === "MUR" || value === "INR" || value === "USD";
}

export function countryToCurrency(country?: string | null): Currency {
  const code = country?.toUpperCase();
  if (code === "MU") return "MUR";
  if (code === "IN") return "INR";
  return "USD";
}

export function timezoneToCurrency(tz: string): Currency {
  if (tz === "Indian/Mauritius") return "MUR";
  if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "INR";
  return "USD";
}

// Country headers, most reliable first. Behind Cloudflare, cf-ipcountry makes detection
// exact; on the plain Coolify/Docker setup none are sent and the browser timezone is used.
const COUNTRY_HEADERS = ["cf-ipcountry", "x-vercel-ip-country", "x-country-code"];

export function detectServerCurrency(
  savedCookie: string | undefined,
  getHeader: (name: string) => string | null
): { currency: Currency; detectedOnServer: boolean } {
  if (isCurrency(savedCookie)) return { currency: savedCookie, detectedOnServer: true };
  for (const name of COUNTRY_HEADERS) {
    const country = getHeader(name);
    if (country) return { currency: countryToCurrency(country), detectedOnServer: true };
  }
  return { currency: "USD", detectedOnServer: false };
}
