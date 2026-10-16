import { AnswerSheet } from "@/components/AnswerSheet";
import { Footer } from "@/components/Footer";
import { HeroDot, Wordmark } from "@/components/Logos";
import { StationDemo } from "@/components/StationDemo";
import s from "./page.module.css";

const STEPS = [
  { title: "Kâğıdını göster.", body: "Soruyu kâğıtta çöz. Dersion çözümüne bakar." },
  {
    title: "Takıldığın adımı bulur.",
    body: "Sonuca değil yola bakar. Takıldığın adım noktayla işaretlenir.",
  },
  {
    title: "Sadece orayı anlatır.",
    body: "Bir ipucu, bir soru, gerekirse kısa bir anlatım. Sonra yeniden bakar.",
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
                Dersion, dershanelerde duran bir çalışma istasyonu: öğrencinin kâğıttaki çözümüne bakar,
                takıldığı adımı bulur ve sadece o adımı anlatır.
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

        <section className={s.demo}>
          <div className={`${s.wrap} ${s.grid}`}>
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
              <h2 className={s.h2}>Her öğrenciye birebir çalışma.</h2>
              <p className={s.lead}>
                Kurumunuzda duran bir istasyon. Her öğrenci kendi hızında, kendi adımında çalışır.
              </p>
            </article>
            <article className={s.students}>
              <h2 className={s.h2}>Cevabı değil, adımı verir.</h2>
              <p className={s.lead}>Karalamana bakar, takıldığın adımı bulur ve sadece orayı anlatır.</p>
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
              <p className={s.body}>
                Dersion, dershanelerde duran bir çalışma istasyonu. Öğrenci soruyu kâğıtta çözer; Dersion
                çözüme bakar, takıldığı adımı bulur ve sadece o adımı anlatır. Cevabı vermez: bir ipucu,
                bir soru, gerekirse kısa bir anlatım. Amaç, sınav günü doğruyu öğrencinin kendisinin
                işaretlemesi. Samsun&apos;da geliştiriliyor.
              </p>
              <p className={s.email}>[İLETİŞİM E-POSTASI]@dersion.app</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lazyLogo />
    </>
  );
}
