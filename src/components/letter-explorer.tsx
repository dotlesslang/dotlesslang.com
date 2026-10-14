"use client";

import { useState } from "react";
import { letterFamilies } from "@/lib/letters";

export function LetterExplorer() {
  const [selectedShape, setSelectedShape] = useState<string>("ٮ");
  const family = letterFamilies.find(item => item.shape === selectedShape) ?? letterFamilies[1];
  const selected = letterFamilies.indexOf(family);

  return <div className="letter-explorer">
    <div className="letter-explorer-top"><span>18 BASE CHARACTERS</span><span>{String(selected + 1).padStart(2, "0")} / {letterFamilies.length}</span></div>
    <div className="letter-visual" aria-live="polite" aria-atomic="true">
      <span className="explorer-visual-label">ENTERED BASE</span>
      <span className="letter-shape" lang="ar" dir="rtl">{family.shape}</span>
      <span className="letter-connector" aria-hidden="true">↓</span>
      <span className="explorer-visual-label">COMPATIBLE RESTORED LETTERS</span>
      <span className="letter-source" lang="ar" dir="rtl">{family.letters.join(" ")}</span>
    </div>
    <div className="family-selector" role="group" aria-label="Explore the 18 base characters">{letterFamilies.map(item => <button key={item.shape} aria-pressed={family.shape === item.shape} aria-label={"Explore " + item.name + ", base " + item.shape} onClick={() => setSelectedShape(item.shape)}><span lang="ar">{item.shape}</span></button>)}</div>
  </div>;
}
