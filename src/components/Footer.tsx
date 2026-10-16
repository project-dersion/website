import { HorizontalLogo } from "./Logos";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <HorizontalLogo className={s.logo} />
        <ul className={s.meta}>
          <li>Samsun&apos;da geliştiriliyor</li>
          <li>© 2026 Dersion</li>
          <li>
            <a href="/gizlilik">Gizlilik</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
