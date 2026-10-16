import s from "./AnswerSheet.module.css";

const OPTIONS = ["A", "B", "C", "D", "E"] as const;
const MARKED = "D";

// A row of answer-sheet bubbles; the student has filled D. Decorative: the heading carries the meaning.
export function AnswerSheet() {
  return (
    <div className={s.sheet} aria-hidden="true">
      {OPTIONS.map((option) => (
        <span key={option} className={s.bubble} data-marked={option === MARKED || undefined}>
          {option === MARKED && (
            <img className={s.fill} src="/brand/derived/dot-small-160.webp" width={160} height={160} alt="" loading="lazy" />
          )}
          <span className={s.letter}>{option}</span>
        </span>
      ))}
    </div>
  );
}
