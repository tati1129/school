import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefitItems = [
  {
    value: "certification",
    trigger: "Немецкая акредитация",
    content: "Вы получите немецкий сертификат",
  },
  // {
  //   value: "scholarship",
  //   trigger: "Scholarship",
  //   content: "Job center will pay for your education",
  // },
  {
    value: "remote",
    trigger: "Формат обучения",
    content: "Вы можете обучаться непосредственно с преподавателем, а также в онлайн формате ",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <section>
        <h2 className="text-center text-4xl mb-3">Преимущества</h2>

        <Accordion
          type="single"
          collapsible
          className="max-w-lg rounded-lg border p-3 min-w-2xl"
          defaultValue="billing"
        >
          {benefitItems.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger className="text-xl">{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
