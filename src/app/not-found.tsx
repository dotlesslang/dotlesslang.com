import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="not-found container"><span className="eyebrow">404 / A LITTLE LOST</span><div className="lost-letter" lang="ar" aria-hidden="true">ٮ</div><h1>Let’s find our<br /><em>way back.</em></h1><p>This page isn’t here. There’s plenty to explore at home.</p><Link className="button button-gold" href="/">Back to Dotless <span>→</span></Link></main>;
}
