export default function SignsOfTheReappearance() {
  return (
    <main className="mt-16 space-y-8 md:mt-24">
      <div>
        <h1
          className="text-center font-bold"
          style={{ fontSize: "clamp(1.5rem, 0.838rem + 2.206vw, 2.25rem)" }}
        >
          Signs of the Reappearance of Imam Mahdi (a.j.)
        </h1>
        <p className="mt-2">
          The signs of the reappearance are divided into definite and
          non-definite signs. Definite signs are those whose occurrence is
          certain, and Imam Mahdi (a.j.) will not reappear until they take
          place. Non-definite signs, on the other hand, are those that are not
          confirmed to be certain, and the Imam Mahdi (a.j.) may reappear even
          if they do not occur.
        </p>
      </div>

      {/* The Definite Signs */}
      <div className="space-y-4">
        <h2
          className="mt-6 font-medium"
          style={{ fontSize: "clamp(1.25rem, 0.809rem + 1.471vw, 1.75rem)" }}
        >
          The Definite Signs
        </h2>
        <div className="-mt-2">
          <p>
            According to a narration reported by Sheikh Saduq, some of the
            definitive signs are:
          </p>
          <ul className="ml-4 list-inside list-disc">
            <li>The appearance of Sufyani</li>
            <li>The uprising of Yamani</li>
            <li>The heavenly cry</li>
            <li>The killing of the Pure Soul (Nafs al-Zakiyyah)</li>
            <li>The swallowing of the army in the desert of Bayda</li>
          </ul>
        </div>
      </div>

      {/* The Non-Definitive Signs */}
      <div className="space-y-4">
        <h2
          className="mt-6 font-medium"
          style={{ fontSize: "clamp(1.25rem, 0.809rem + 1.471vw, 1.75rem)" }}
        >
          The Non-Definitive Signs
        </h2>
        <div className="-mt-2">
          <p>
            Sheikh Mufid, in his book Al-Irshad, provided a list of the signs of
            the reappearance. Referring to the phrase “Wallahu A‘lam” (And Allah
            knows best) at the end of the list, some have suggested that Sheikh
            Mufid expressed doubt about some of these signs.
          </p>
          <ul className="ml-4 list-inside list-disc">
            <li>Eclipses</li>
            <li>Widespread deaths</li>
            <li>Wars and widespread turmoil</li>
            <li>Black flags from the East</li>
            <li>Continuous rainfall</li>
          </ul>
        </div>
        <div>
          <p>
            Similarly, other religious sources mention additional non-definitive
            signs, some of which include:
          </p>
          <ul className="ml-4 list-inside list-disc">
            <li>
              An unusual voice from the sky will be heard throughout the world,
              so that everyone, regardless of their language, hears it in their
              own tongue.
            </li>
            <li>
              Disputes among the Abbasids over worldly leadership and the fall
              of their rule
            </li>
            <li>The killing of the last Abbasid ruler, named Abdullah</li>
            <li>
              A solar eclipse in the middle of Ramadan, contrary to the usual
              pattern
            </li>
            <li>
              A lunar eclipse at the beginning or end of Ramadan, contrary to
              the usual pattern
            </li>
            <li>
              The appearance of redness in the sky, spreading throughout the
              atmosphere
            </li>
            <li>Widespread destruction in Syria and Iraq</li>
            <li>
              The flooding of the Euphrates River, to the extent that its waters
              flow through the streets of Kufa.
            </li>
            <li>And more...</li>
          </ul>
        </div>
      </div>

      {/* Signs of the Reappearance in Other Religions */}
      <div className="space-y-4">
        <h2
          className="mt-6 font-medium"
          style={{ fontSize: "clamp(1.25rem, 0.809rem + 1.471vw, 1.75rem)" }}
        >
          Signs of the Reappearance in Other Religions
        </h2>
        <div className="-mt-2">
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
      </div>
    </main>
  );
}
