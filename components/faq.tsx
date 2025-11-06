import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/homepage-faq";

export default function FAQ() {
  return (
    <div className="space-y-4">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
        defaultValue="1"
      >
        {faq.map((question) => (
          <AccordionItem
            value={question.id}
            key={question.id}
            className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
          >
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
              {question.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-2">
              {question.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
