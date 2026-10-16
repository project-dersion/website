// Raster exports of the brand logo files (see scripts/build-images.mjs).
// The light version is for light backgrounds; the dark version for dark ones.
const DARK = "(prefers-color-scheme: dark)";

export function Wordmark({ className }: { className?: string }) {
  return (
    <picture>
      <source media={DARK} srcSet="/brand/derived/wordmark-dark-320.webp" />
      <img
        className={className}
        src="/brand/derived/wordmark-light-320.webp"
        width={320}
        height={75}
        alt="Dersion"
      />
    </picture>
  );
}

export function HorizontalLogo({ className }: { className?: string }) {
  return (
    <picture>
      <source media={DARK} srcSet="/brand/derived/logo-horizontal-dark-360.webp" />
      <img
        className={className}
        src="/brand/derived/logo-horizontal-light-360.webp"
        width={360}
        height={105}
        alt="Dersion"
        loading="lazy"
      />
    </picture>
  );
}

// The hero image: the dot alone, from the 1000 px PNG master.
const HERO_DOT_SIZES = "(min-width: 900px) min(56vw, 860px), min(68vw, 420px)";

export function HeroDot({ className }: { className?: string }) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet="/brand/derived/dot-480.avif 480w, /brand/derived/dot-1000.avif 1000w"
        sizes={HERO_DOT_SIZES}
      />
      <img
        className={className}
        src="/brand/derived/dot-1000.webp"
        srcSet="/brand/derived/dot-480.webp 480w, /brand/derived/dot-1000.webp 1000w"
        sizes={HERO_DOT_SIZES}
        width={1000}
        height={1000}
        alt=""
        fetchPriority="high"
      />
    </picture>
  );
}
