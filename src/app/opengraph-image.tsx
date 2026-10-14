import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Dotless — Arabic, reimagined.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#141513", color: "#eeeae0", padding: "65px 80px" }}><div style={{ display: "flex", fontSize: 32 }}>dotless<span style={{ color: "#dec48d" }}>.</span></div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 94, letterSpacing: -5 }}>Arabic,</div><div style={{ color: "#dec48d", fontSize: 94, fontStyle: "italic", letterSpacing: -5 }}>reimagined.</div></div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#a5a69c" }}><span>Fewer keys. More expression.</span><span>dotlesslang.com</span></div></div>, size);
}
