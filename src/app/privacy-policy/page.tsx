import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy. Coming soon.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return <main id="main-content" className="coming-soon-page container">
    <h1>Privacy <em>policy</em></h1>
    <p>Coming soon</p>
  </main>;
}
