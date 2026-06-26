"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useBasket } from "@/components/commerce/BasketProvider";
import { navItems } from "@/lib/content";

type SiteHeaderProps = {
  overlay?: boolean;
};

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { quantity: basketQuantity, openDrawer } = useBasket();

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const basketLabel = `Basket${basketQuantity > 0 ? ` ${basketQuantity}` : ""}`;

  return (
    <header
      className={`z-50 px-5 py-5 sm:px-8 lg:px-12 ${
        overlay ? "absolute inset-x-0 top-0" : "sticky top-0 border-b border-white/15 bg-[#090909]/92 backdrop-blur"
      }`}
    >
      <div className="flex items-center justify-between gap-5">
        <Link href="/" className="brand-mark block shrink-0" aria-label="Irie Sessions home">
          <Image
            src="/irie-logo.png"
            alt="Irie"
            width={133}
            height={78}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>
        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#c8c0b4] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline transition-colors duration-300 hover:text-[#f4efe5]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/shop/basket"
            aria-label={`Open ${basketLabel}`}
            onClick={(event) => {
              event.preventDefault();
              openDrawer();
            }}
            className="pressable inline-flex min-h-12 items-center gap-2 border border-[#b9ff3b] px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#b9ff3b] hover:bg-[#b9ff3b] hover:text-black sm:px-4"
          >
            <span className="hidden sm:inline">Basket</span>
            <span className="sm:hidden">Bag</span>
            <span className="grid min-w-5 place-items-center rounded-full bg-[#b9ff3b] px-1.5 py-0.5 text-[10px] leading-none text-black">
              {basketQuantity}
            </span>
          </Link>
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            className="pressable grid size-12 place-items-center border border-white/20 bg-black/20 text-[#f4efe5] backdrop-blur hover:border-[#b9ff3b] hover:text-[#b9ff3b] lg:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="grid w-5 gap-1.5">
              <span
                className={`h-px bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span className={`h-px bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`h-px bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav
          id="mobile-menu"
          className="mobile-menu-panel absolute left-5 right-5 top-[calc(100%-0.5rem)] border border-white/15 bg-[#090909]/96 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:left-8 sm:right-8 lg:hidden"
        >
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="archive-row bg-[#101010] px-4 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#f4efe5] hover:bg-[#b9ff3b] hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/shop/basket"
            onClick={(event) => {
              event.preventDefault();
              setMenuOpen(false);
              openDrawer();
            }}
            className="pressable mt-4 block bg-[#b9ff3b] px-4 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-black hover:bg-[#f4efe5]"
          >
            {basketLabel}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
