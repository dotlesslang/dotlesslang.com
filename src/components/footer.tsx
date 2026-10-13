import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><Link href="/" className="footer-brand">dotless<span>.</span></Link><p>An ancient script. A new way to write.</p></div>
    <div className="footer-links"><Link href="/privacy-policy">Privacy policy</Link><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${site.email}`}>Say hello ↗</a></div>
    <span className="copyright">© {new Date().getFullYear()} Dotless</span>
  </div></footer>;
}
