import type { CSSProperties } from "react";

export function Icon({ name, size = 20, style }: { name: "arrow" | "github" | "play" | "menu" | "close" | "globe" | "shield" | "spark" | "check" | "mail"; size?: number; style?: CSSProperties }) {
  const paths: Record<typeof name, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4 5.2 5.2 0 0 0-.1-4s-1.2-.4-4.1 1.5a14 14 0 0 0-7.4 0C4.7-.4 3.5 0 3.5 0a5.2 5.2 0 0 0-.1 4A5.7 5.7 0 0 0 2 8c0 5.7 3.4 7 6.7 7.3A3.5 3.5 0 0 0 7.7 18v4" transform="translate(1 1) scale(.91)" /></>,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z" /></>,
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
    spark: <path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>{paths[name]}</svg>;
}
