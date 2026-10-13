"use client";

import { useState } from "react";
import { letterFamilies } from "@/lib/letters";

export function LetterExplorer() {
  const [selected, setSelected] = useState(0);
  const family = letterFamilies[selected];
  return <div className="letter-explorer">
    <div className="letter-explorer-top"><span>THE BEAUTY OF A SHARED SHAPE</span><span>{String(selected + 1).padStart(2, "0")} / {String(letterFamilies.length).padStart(2, "0")}</span></div>
    <div className="letter-visual" key={selected}><span className="letter-source" lang="ar" dir="rtl">{family.letters}</span><span className="letter-connector" aria-hidden="true">↓</span><span className="letter-shape" lang="ar">{family.shape}</span></div>
    <p aria-live="polite">{family.label}</p>
    <div className="family-selector" role="group" aria-label="Explore shared Arabic letter shapes">{letterFamilies.map((item, index) => <button key={item.shape} aria-pressed={selected === index} onClick={() => setSelected(index)}><span lang="ar">{item.shape}</span><span className="sr-only">Explore {item.letters}</span></button>)}</div>
  </div>;
}
