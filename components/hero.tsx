import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="mt-16 text-center md:mt-24">
      <Badge
        variant="secondary"
        className="border-border rounded-full py-1"
        asChild
      >
        <span>Biharul Anwar, Volume 52, Page 321</span>
      </Badge>
      <p
        className="mt-6 font-medium tracking-tighter md:leading-[1.2]"
        style={{ fontSize: "clamp(1.5rem, 0.838rem + 2.206vw, 2.25rem)" }}
      >
        Imam ‘Ali ibn Musa al-Ridha (pbuh)
      </p>
      <p
        className="mt-6"
        style={{ fontSize: "clamp(1rem, 0.89rem + 0.368vw, 1.125rem)" }}
      >
        “ … So when he [Imam al-Mahdi (a.j.)] will make his advent, the Earth
        with radiate with the celestial illumination of its’ Lord and the scale
        of justice will be positioned among mankind such that not a single
        person will oppress another individual …”
      </p>
    </section>
  );
}
