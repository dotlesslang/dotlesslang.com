import { Icon } from "@/components/icon";
import Link from "next/link";
import { LetterExplorer } from "@/components/letter-explorer";
import { VideoModal } from "@/components/video-modal";
import { Reveal } from "@/components/reveal";
import { site, team } from "@/lib/site";

export default function Home() {
  return <main id="main-content">
    <Reveal />
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-eyebrow"><span className="status-dot" /> A NEW CHAPTER FOR ARABIC TYPING</div>
        <h1 id="hero-title">Arabic,<br /><em>reimagined.</em></h1>
        <p className="hero-description">The richness of a language.<br />The simplicity of fewer keys.</p>
        <p className="hero-detail">An open-source keyboard that blends the beauty of Arabic script with the possibilities of machine learning.</p>
        <div className="hero-actions"><a className="button button-gold" href="#letter-families">Explore the letter families <Icon name="arrow" size={18} /></a><VideoModal /></div>
        <div className="hero-meta"><span><Icon name="check" size={14} /> Open source</span><span><Icon name="check" size={14} /> iOS Alpha</span></div>
      </div>
      <div className="hero-product">
        <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
        <span className="hero-glyph glyph-one" lang="ar" aria-hidden="true">ع</span><span className="hero-glyph glyph-two" lang="ar" aria-hidden="true">ح</span>
        <div className="hero-letter-art" aria-label="The Arabic letters jeem, haa, and khaa share a base shape">
          <span className="small-label">A FAMILIAR SHAPE. A NEW PERSPECTIVE.</span>
          <div className="hero-base-letter" lang="ar" aria-hidden="true">ح</div>
          <div className="hero-letter-family" lang="ar" dir="rtl" aria-hidden="true"><span>ج</span><span>ح</span><span>خ</span></div>
          <p>One form. More possibilities.</p>
        </div>
        <div className="product-caption"><span className="tiny-line" /> Rooted in history. Built for what’s next.</div>
      </div>
    </section>

    <div className="container intro-strip"><div><strong>12</strong><span>fewer keys.<br />A little breathing room.</span></div><div><Icon name="spark" size={24} /><span>Context-aware.<br />Thoughtfully simple.</span></div><div><Icon name="github" size={24} /><span>Open by design.<br />Made to be explored.</span></div><a href="#story">A familiar script.<br />A fresh perspective. <span>↓</span></a></div>

    <section className="story-section section-pad container" id="story" aria-labelledby="story-title">
      <div className="story-copy" data-reveal><span className="eyebrow"><span className="section-number">01 /</span> THE IDEA</span><h2 id="story-title">Arabic typing,<br /><em>with fewer keys.</em></h2><p>Arabic letters share something beautiful: a handful of flowing shapes. Dots tell many of those letters apart. But what if your keyboard could understand the difference?</p><p>Dotless takes inspiration from older, undotted Arabic writing and brings related letters together on a single key.</p><p>Dotless is currently testing traditional statistical n-gram models alongside more advanced neural models to restore letters using context.</p><Link className="text-link" href="/reviving-the-rasm">Read the story <Icon name="arrow" size={17} /></Link></div>
      <div id="letter-families" data-reveal><LetterExplorer /></div>
    </section>

    <section className="principles section-pad container" id="features" aria-labelledby="principles-title"><div className="section-heading" data-reveal><div><span className="eyebrow"><span className="section-number">02 /</span> THE FEATURES</span><h2 id="principles-title">What Dotless<br /><em>offers.</em></h2></div></div>
      <div className="principle-grid" data-reveal>
        <article className="principle-card principle-gold"><span className="small-label">SIMPLER BY NATURE</span><div className="mini-key-comparison" aria-hidden="true"><div><span>ج</span><span>ح</span><span>خ</span></div><span className="comparison-arrow">↘</span><span className="single-key">ح</span></div><h3>One shape.<br />More possibilities.</h3><p>Related letters share a key. Twelve fewer keys make room for a cleaner Arabic typing experience.</p></article>
        <article className="principle-card"><span className="small-label">PRIVACY, IN PRINCIPLE</span><div className="principle-art shield-art" aria-hidden="true"><Icon name="shield" size={72} /><span className="art-ring" /></div><h3>Your words<br />stay yours.</h3><p>The iOS app keeps typing habits and personal dictionary data on your phone. Your words belong with you.</p><a className="card-link" href="/privacy-policy">Read our privacy policy <span>↗</span></a></article>
        <article className="principle-card"><span className="small-label">AN OPEN HORIZON</span><div className="principle-art script-art" aria-hidden="true" lang="ar" dir="rtl"><span>العربية</span><span>اردو · فارسی</span></div><h3>One idea.<br />Many languages.</h3><p>Arabic is the beginning. We plan to extend support to other languages that share the script, including Farsi, Urdu, Kurdish, Uyghur, and more, In Shaa Allah!</p><span className="roadmap-label"><span className="status-dot" /> On the horizon</span></article>
      </div>
    </section>

    <section className="team-section container section-pad" id="team" aria-labelledby="team-title"><div className="team-intro" data-reveal><span className="eyebrow"><span className="section-number">03 /</span> CONTRIBUTORS</span><h2 id="team-title">The people<br /><em>behind Dotless.</em></h2><p>It started with a thought: the ancient Arabs had no need for diacritic marks or dots to decipher the meanings of words, but later generations did.</p></div><div className="team-list" data-reveal>{team.map((name, index) => <div className="team-member" key={name}><span className="member-index">0{index + 1}</span><h3>{name}</h3><span className="member-mark" lang="ar" aria-hidden="true">{["م", "ع", "و"][index]}</span></div>)}</div></section>

    <section className="contact-section container" id="contact" aria-labelledby="contact-title" data-reveal><div className="contact-glyph" lang="ar" aria-hidden="true">ٮ</div><div className="contact-content"><h2 id="contact-title">Contact us</h2><p>Have a question, a thought, or a little code to contribute?<br />We’d love to hear from you.</p><div className="contact-actions"><a className="button button-gold" href={`mailto:${site.email}`}>Let’s talk <Icon name="arrow" size={18} /></a><a className="button button-outline" href={site.github} target="_blank" rel="noreferrer"><Icon name="github" size={17} /> Explore on GitHub</a></div></div></section>
  </main>;
}
