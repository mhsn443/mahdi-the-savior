import FAQ from "@/components/faq";
import { originalFAQ } from "@/data/original-faq";

export default function FAQPage() {
  return (
    <main className="mt-16 space-y-4 md:mt-24">
      <h1
        className="text-center font-bold"
        style={{ fontSize: "clamp(1.5rem, 0.838rem + 2.206vw, 2.25rem)" }}
      >
        FAQ About Imam Mahdi (a.j.)
      </h1>
      <FAQ faq={originalFAQ} />
    </main>
  );
}
