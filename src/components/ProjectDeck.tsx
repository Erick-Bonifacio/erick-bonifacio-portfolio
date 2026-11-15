import { useRef, useState } from "react";

type Project = { title: string; text: string; img: string; alt: string; href: string; repo: string; tags: string[] };
type Labels = { visit: string; code: string; prev: string; next: string };

// Projects as a deck of cards: the front one is readable, the next two peek out
// behind it, the rest stay hidden. Buttons, a click on a peeking card or a swipe
// move through the deck.
export function ProjectDeck({ items, labels }: { items: Project[]; labels: Labels }) {
  const [active, setActive] = useState(0);
  const swipeStart = useRef<number | null>(null);
  const n = items.length;
  const go = (step: number) => setActive((a) => (a + step + n) % n);

  // Where each card sits relative to the front one.
  const slot = (i: number) => {
    const pos = (i - active + n) % n;
    if (pos <= 2) return String(pos);
    return pos === n - 1 ? "out" : "back";
  };

  return (
    <div>
      <div
        className="deck"
        onPointerDown={(e) => (swipeStart.current = e.clientX)}
        onPointerUp={(e) => {
          const dx = swipeStart.current === null ? 0 : e.clientX - swipeStart.current;
          swipeStart.current = null;
          if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
        }}
      >
        {items.map((project, i) => {
          const pos = slot(i);
          const front = pos === "0";
          return (
            <article
              className="card project deck-card"
              key={project.href}
              data-pos={pos}
              aria-hidden={!front}
              onClick={front ? undefined : () => setActive(i)}
            >
              <img className="project-img" src={project.img} alt={project.alt} width={1280} height={720} loading="lazy" draggable={false} />
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer" tabIndex={front ? 0 : -1}>
                  {labels.visit} →
                </a>
                {project.repo && (
                  <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer" tabIndex={front ? 0 : -1}>
                    {labels.code} →
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className="deck-controls">
        <button className="deck-btn" onClick={() => go(-1)} aria-label={labels.prev} title={labels.prev}>←</button>
        <span className="mono" aria-live="polite">{active + 1} / {n}</span>
        <button className="deck-btn" onClick={() => go(1)} aria-label={labels.next} title={labels.next}>→</button>
      </div>
    </div>
  );
}
