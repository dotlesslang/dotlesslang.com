export type LetterFamily = {
  shape: string;
  name: string;
  letters: readonly string[];
};

// Matches DotlessAlphabet.swift's carrier-preserving, 18-character convention.
export const letterFamilies = [
  { shape: "ا", name: "Alif", letters: ["ا", "أ", "إ", "آ"] },
  { shape: "ٮ", name: "Bāʾ, tāʾ and thāʾ", letters: ["ب", "ت", "ث"] },
  { shape: "ح", name: "Jīm, ḥāʾ and khāʾ", letters: ["ج", "ح", "خ"] },
  { shape: "د", name: "Dāl and dhāl", letters: ["د", "ذ"] },
  { shape: "ر", name: "Rāʾ and zāy", letters: ["ر", "ز"] },
  { shape: "س", name: "Sīn and shīn", letters: ["س", "ش"] },
  { shape: "ص", name: "Ṣād and ḍād", letters: ["ص", "ض"] },
  { shape: "ط", name: "Ṭāʾ and ẓāʾ", letters: ["ط", "ظ"] },
  { shape: "ع", name: "ʿAyn and ghayn", letters: ["ع", "غ"] },
  { shape: "ڡ", name: "Fāʾ and qāf", letters: ["ف", "ق"] },
  { shape: "ك", name: "Kāf", letters: ["ك"] },
  { shape: "ل", name: "Lām", letters: ["ل"] },
  { shape: "م", name: "Mīm", letters: ["م"] },
  { shape: "ں", name: "Nūn", letters: ["ن"] },
  { shape: "و", name: "Wāw", letters: ["و", "ؤ"] },
  { shape: "ه", name: "Hāʾ and tāʾ marbūṭah", letters: ["ه", "ة"] },
  { shape: "ى", name: "Yāʾ carrier", letters: ["ي", "ى", "ئ"] },
  { shape: "ء", name: "Standalone hamza", letters: ["ء"] },
] as const satisfies readonly LetterFamily[];
