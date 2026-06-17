import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { communityPageMeta, communityIntro, communityPillars } from "@/lib/content/community";

export const metadata: Metadata = {
  title: communityPageMeta.title,
  description: communityPageMeta.description,
  keywords: communityPageMeta.keywords,
  alternates: { canonical: communityPageMeta.path },
};

export default function CommunityPage() {
  return (
    <div className="bg-white text-[#1a1a1a]">
      <section className="relative min-h-[620px] overflow-hidden">
        <Image src="/images/athletes/chinapeak-team-2024.jpg" alt="Ride and Develop team at China Peak 2024" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 md:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Rooted in Community</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl">{communityIntro}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-20">
          {communityPillars.map((pillar, i) => (
            <div key={pillar.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""}`}>
              <div>
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{pillar.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-[#56585e]">{pillar.body}</p>
              </div>
              <div className="relative min-h-[320px] overflow-hidden rounded-lg md:min-h-[400px]">
                <Image src={pillar.image} alt={pillar.imageAlt} fill loading="lazy" sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" style={{ objectPosition: pillar.imagePosition ?? "center" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8">
          <h2 className="text-3xl font-semibold md:text-5xl">Get Involved</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#56585e]">
            Whether you want to volunteer at a trail day, coach a youth team, or simply show up and ride — there is a place for you in this community.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/support" className="inline-flex min-h-12 items-center rounded-[50px] bg-[#1a1a1a] px-8 text-sm font-semibold text-white transition-colors hover:bg-black">
              Contact us
            </Link>
            <Link href="/racing" className="inline-flex min-h-12 items-center rounded-[50px] border border-[#1a1a1a] px-8 text-sm font-semibold transition-colors hover:bg-[#1a1a1a] hover:text-white">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
