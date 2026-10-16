import { AnswerSheet } from "@/components/AnswerSheet";
import { Footer } from "@/components/Footer";
import { HeroDot, Wordmark } from "@/components/Logos";
import { StationDemo } from "@/components/StationDemo";
import s from "./page.module.css";

const STEPS = [
  { title: "Ders başlar.", body: "Öğrenci istasyona oturur; dersi Dersion açar ve yönetir." },
  {
    title: "Takıldığı yeri fark eder.",
    body: "Öğrenci çalışırken Dersion takip eder. Takıldığı adımı, öğrenci sormadan görür.",
  },
  {
    title: "Oradan anlatır.",
    body: "O adımı anlatır, sonra öğrencinin yeniden denemesine bakar. Cevabı vermez.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className={s.hero}>
          <div className={`${s.wrap} ${s.heroGrid}`}>
            <Wordmark className={s.wordmark} />
            <div className={s.heroDot}>
              <HeroDot className={s.heroDotImage} />
            </div>
            <div className={s.heroText}>
              <h1 className={s.display}>
                <span>Takıldığın </span>
                <span>noktadan </span>
                <span>başlar.</span>
              </h1>
              <p className={s.lead}>
                Dersion, dershanede birebir ders yürüten bir istasyon. Öğrencinin soru sorması ya da bir
                şey göstermesi gerekmez: dersi Dersion yönetir, takıldığı yeri kendisi fark eder ve oradan
                anlatır.
              </p>
              <div className={s.actions}>
                <a className={s.buttonPrimary} href="#iletisim">
                  Kurumunuza getirin
                </a>
                <a className={s.buttonSecondary} href="#nasil">
                  Nasıl çalışır?
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={s.demo} aria-labelledby="demo-baslik">
          <div className={`${s.wrap} ${s.grid}`}>
            <h2 id="demo-baslik" className={`${s.h2} ${s.demoTitle}`}>
              Sormadan fark eder.
            </h2>
            <div className={s.demoCard}>
              <StationDemo />
            </div>
          </div>
        </section>

        <section id="nasil" className={s.steps} aria-labelledby="nasil-baslik">
          <div className={s.wrap}>
            <h2 id="nasil-baslik" className={s.h2}>
              Nasıl çalışır
            </h2>
            <ol className={s.stepList}>
              {STEPS.map((step, i) => (
                <li key={step.title} className={s.step}>
                  <span className={s.stepNumber} aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className={s.h3}>{step.title}</h3>
                  <p className={s.body}>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={s.audiences}>
          <div className={`${s.wrap} ${s.grid}`}>
            <article className={s.owners}>
              <h2 className={s.h2}>Her öğrenciye birebir ders.</h2>
              <p className={s.lead}>
                Dersi Dersion yürütür. Kurumunuzda duran bir istasyonla her öğrenci kendi hızında, kendi
                adımında ilerler.
              </p>
            </article>
            <article className={s.students}>
              <h2 className={s.h2}>Cevabı değil, adımı verir.</h2>
              <p className={s.lead}>
                Sormana gerek yok. Dersion takıldığın yeri kendisi fark eder ve oradan anlatır.
              </p>
            </article>
          </div>
        </section>

        <section className={s.band}>
          <div className={`${s.wrap} ${s.grid}`}>
            <div className={s.bandText}>
              <h2 className={s.bandTitle}>Doğruyu sen işaretle.</h2>
              <p className={s.lead}>
                Sınav günü o daireyi sen dolduracaksın. Dersion seni oraya adım adım getirir.
              </p>
            </div>
            <div className={s.bandSheet}>
              <AnswerSheet />
            </div>
          </div>
        </section>

        <section id="iletisim" className={s.contact} aria-labelledby="iletisim-baslik">
          <div className={`${s.wrap} ${s.grid}`}>
            <h2 id="iletisim-baslik" className={`${s.h2} ${s.contactTitle}`}>
              Kurumunuza getirin
            </h2>
            <div className={s.contactBody}>
              {/* Placeholder until brand@fb16cc9 (marketing/messages.md, new boilerplate) is available. */}
              <p className={s.body}>[BOILERPLATE: messages.md, brand@fb16cc9]</p>
              <p className={s.email}>[İLETİŞİM E-POSTASI]@dersion.app</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lazyLogo />
    </>
  );
}
