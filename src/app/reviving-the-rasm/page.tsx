import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviving the Rasm",
  description: "Reviving the Rasm. Coming soon.",
  alternates: { canonical: "/reviving-the-rasm" },
};

export default function RevivingTheRasm() {
  return <main id="main-content" className="coming-soon-page container">
    <h1>Reviving<br /><em>the Rasm</em></h1>
    <p>Coming soon</p>
  </main>;
}
