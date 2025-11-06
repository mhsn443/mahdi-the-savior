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

      {/* Signs of the reappearance of Imam Mahdi (a.j.) */}
      <section className="mt-32 flex flex-col gap-y-4 md:mt-48">
        <h1
          className="font-bold"
          style={{ fontSize: "clamp(1.25rem, 0.809rem + 1.471vw, 1.75rem)" }}
        >
          Signs of the reappearance of Imam Mahdi (a.j.)
        </h1>
        <div className="space-y-4">
          <p>
            The signs of the reappearance are divided into definite and
            non-definite signs. Definite signs are those whose occurrence is
            certain, and Imam Mahdi (a.j.) will not reappear until they take
            place. Non-definite signs, on the other hand, are those that are not
            confirmed to be certain, and the Imam Mahdi (a.j.) may reappear even
            if they do not occur.
          </p>
          <ul className="ml-4 list-inside list-disc">
            <li>
              According to a narration reported by Sheikh al-Saduq, the
              appearance of Sufyani, the uprising of Yamani, the heavenly cry,
              the killing of the Pure Soul (Nafs al-Zakiyyah), and the
              swallowing of the army in the desert of Bayda are among the
              definite signs of the reappearance.
            </li>
          </ul>
          <p>
            In Judaism and Christianity, certain signs have been mentioned
            regarding the coming of the savior, some of which are similar to the
            signs of reappearance mentioned in Islamic traditions.
          </p>
          <ul className="ml-4 list-inside list-disc">
            <li>
              Jews believe that the spread of corruption and the prevalence of
              war and chaos are among the signs of the coming of the Messiah
              (Mashiach).
            </li>
            <li>
              Christians, on the other hand, believe that the Antichrist—or
              Dajjal—is a person or group who denies or rejects the messiahship
              of Jesus (pbuh). The Antichrist will rise at the end of times, and
              when Jesus (pbuh) returns, he will defeat him.
            </li>
          </ul>
        </div>
        <Link href={"/signs-of-the-reappearance"} className="self-end">
          <ReadMoreButton />
        </Link>
      </section>
    </main>
  );
}
