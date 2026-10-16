import { HorizontalLogo } from "./Logos";
import s from "./Footer.module.css";

// lazyLogo: on long pages the footer starts far below the fold.
export function Footer({ lazyLogo }: { lazyLogo?: boolean }) {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <HorizontalLogo className={s.logo} lazy={lazyLogo} />
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
