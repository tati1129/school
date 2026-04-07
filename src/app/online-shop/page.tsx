
import Image from "next/image";
import GlowButton from "@/components/glow-button";


export default function OnlineShop() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6 bg-pink-50 p-5 rounded-xl">
        <h2 className="text-3xl font-semibold tracking-tight">Бонусы</h2>
        <p className="text-gray-600 leading-relaxed">
          Приобретая курс, ты получаешь не только ценные знания, но и реальную
          возможность начать зарабатывать уже в процессе обучения.
        </p>

        <div className="space-y-4">
          <p className="font-medium">
            А также мы подготовили для Тебя особые подарки 🎁 и специальное
            предложение:
          </p>

          <ul className="list-disc pl-6 mb-4 space-y-1  text-gray-700">
            <li> Бессрочную поддержку и обратную связь</li>
            <li> Помощь в подборе необходимых материалов</li>
            <li>
             Скидку в размере до 20% на материалы и инструменты в течении 6
              месяцев
            </li>
          </ul>

          <div className="mt-4">
            <Image
              src="/bonus.jpg"
              alt="Бонусы курса"
              className="rounded-xl object-cover"
              width={350}
              height={350}
              style={{ width: "100%", height: "auto" }}
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-center">
       <GlowButton/>
      </div>
    </section>
  );
}
