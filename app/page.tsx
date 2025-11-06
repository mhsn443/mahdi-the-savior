import Hero from "@/components/hero";
import ReadMoreButton from "@/components/read-more-button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Who is Imam Mahdi (a.j.)? */}
      <section className="mt-32 flex flex-col gap-y-4 md:mt-48">
        <h1
          className="font-bold"
          style={{ fontSize: "clamp(1.25rem, 0.809rem + 1.471vw, 1.75rem)" }}
        >
          Who is Imam Mahdi (a.j.)?
        </h1>
        <div className="space-y-4">
          <p>
            Imam Mahdi (a.j.), whose full name is Muhammad ibn Hasan al-Askari,
            is the last of the twelve infallible Imams. God has sent him to
            guide and save humanity from oppression and corruption. He is
            currently in occultation, and he will reappear at a time known only
            to God, to establish justice and found a global government based on
            truth and righteousness.
          </p>
          <div>
            <p>
              The duties and characteristics of Imam Mahdi (a.j.) during his
              reappearance include:
            </p>
            <ul className="ml-4 list-inside list-disc">
              <li>Defeating oppression and tyrants</li>
              <li>Establishing a just, pure, and God-pleasing government</li>
              <li>Reviving the true religion and moral values</li>
              <li>Bringing peace, security, and prosperity to all humankind</li>
            </ul>
          </div>
          <p>
            According to religious sources, Prophet Jesus (pbuh) will return to
            earth at the time of Imam Mahdi’s (a.j.) advent to assist him in
            establishing global justice. The presence of Prophet Jesus (pbuh)
            alongside Imam Mahdi (a.j.) symbolizes the bond between these two
            great figures and the unity of humanity in building a better world.
          </p>
          <p>
            His reappearance symbolizes the ultimate triumph of truth over
            falsehood and fulfills God’s promise to restore balance and justice
            to the world.
          </p>
        </div>
        <Link href={"/who-is-imam-mahdi"} className="self-end">
          <ReadMoreButton />
        </Link>
      </section>
    </main>
  );
}
