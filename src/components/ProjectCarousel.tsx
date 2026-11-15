import { useEffect, useRef, useState, type ReactNode } from "react";

type Project = { title: string; text: string; img: string; alt: string; href: string; repo: string; tags: string[] };
type Labels = { visit: string; code: string; prev: string; next: string };

// Projects in a horizontal row that scrolls natively and snaps card by card.
// Two cards and a slice of the third are readable at once on a desktop; the
// buttons, a swipe, a trackpad or the arrow keys move the row.
export function ProjectCarousel({ items, labels, header }: { items: Project[]; labels: Labels; header: ReactNode }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };
  useEffect(update, []);

  const move = (direction: number) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) el.scrollBy({ left: direction * (card.offsetWidth + 24) });
  };

  return (
    <>
      <div className="carousel-head">
        <div>{header}</div>
        <div className="carousel-controls">
          <button className="round-btn" onClick={() => move(-1)} disabled={edge.start} aria-label={labels.prev} title={labels.prev}>←</button>
          <button className="round-btn" onClick={() => move(1)} disabled={edge.end} aria-label={labels.next} title={labels.next}>→</button>
        </div>
      </div>
      <ul className="carousel" ref={track} onScroll={update} tabIndex={0}>
        {items.map((project) => (
          <li key={project.href}>
            <article className="card project">
              <img className="project-img" src={project.img} alt={project.alt} width={1280} height={720} loading="lazy" draggable={false} />
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">
                  {labels.visit} →
                </a>
                {project.repo && (
                  <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">
                    {labels.code} →
                  </a>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
