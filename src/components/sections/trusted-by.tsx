import { Container } from "@/components/shared/container";
import { trustedByLogos } from "@/lib/data/trusted-by";

export function TrustedBy() {
  const marqueeItems = [...trustedByLogos, ...trustedByLogos];

  return (
    <section className="border-y border-white/5 py-12">
      <Container>
        <p className="text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Trusted by growing teams across industries
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-16">
            {marqueeItems.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-lg font-semibold tracking-tight text-muted-foreground/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
