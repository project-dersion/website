import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Wordmark } from "@/components/Logos";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "Gizlilik · Dersion",
};

export default function Privacy() {
  return (
    <>
      <header className={s.header}>
        <a href="/" className={s.home}>
          <Wordmark className={s.wordmark} />
        </a>
      </header>
      <main className={s.main}>
        <p>[GİZLİLİK METNİ, avukat onayı bekliyor]</p>
      </main>
      <Footer />
    </>
  );
}
