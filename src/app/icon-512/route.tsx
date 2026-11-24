import { brandIcon } from "@/lib/brand-icon";

export const dynamic = "force-static";

export async function GET() {
  return brandIcon(512);
}
