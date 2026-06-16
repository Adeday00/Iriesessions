import Image from "next/image";
import Link from "next/link";
import { navItems, socialLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-[#090909] px-5 py-10 text-[#f4efe5] sm:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <Image
            src="/irie-logo.png"
            alt="Irie"
            width={133}
            height={78}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-2xl text-xl leading-8 text-[#cfc5b8]">
            Think global. Create local. Leave an artifact.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="grid gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#c8c0b4]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#b9ff3b]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#c8c0b4]">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="transition hover:text-[#b9ff3b]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#81786d] sm:flex-row sm:items-center sm:justify-between">
        <span>Brooklyn / Lagos / London / Paris</span>
        <span>Archive-first cultural platform</span>
      </div>
    </footer>
  );
}
