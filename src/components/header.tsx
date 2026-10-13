"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./icon";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuRef.current?.focus(); }
      if (event.key === "Tab") {
        const items = navRef.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!items?.length) return;
        if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); menuRef.current?.focus(); }
        else if (!event.shiftKey && document.activeElement === items[items.length - 1]) { event.preventDefault(); menuRef.current?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return <header className="site-header">
    <div className="container header-inner">
      <Link className="brand" href="/" aria-label="Dotless home">
        {/* The existing mark remains the project's visual identity. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" width="36" height="36" alt="" /><span>dotless<span className="brand-dot">.</span></span>
      </Link>
      <button ref={menuRef} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
      <nav ref={navRef} id="main-navigation" className={open ? "main-navigation is-open" : "main-navigation"} aria-label="Main navigation">
        <Link href="/#story" onClick={() => setOpen(false)}>The idea</Link>
        <Link href="/#letter-families" onClick={() => setOpen(false)}>Letter families</Link>
        <Link href="/#team" onClick={() => setOpen(false)}>Our team</Link>
        <a className="nav-source" href={site.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}><Icon name="github" size={17} /> GitHub <span className="external-arrow">↗</span></a>
      </nav>
    </div>
  </header>;
}
