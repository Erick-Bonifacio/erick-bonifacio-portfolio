const dark = "#2e2a3b";
const limb = "#d9404b";
const eye = "#fffdf6";

// What changes from pose to pose. `look` moves the pupils; `smile` swaps the
// open mouth for a small closed one; `ground` draws the shadow under the feet.
const poses = {
  // waving mid-stride, for the hero
  wave: { viewBox: "15 65 175 200", arms: ["M150 122 Q 168 118 176 98", "M50 140 Q 34 146 28 162"], look: [0, 0], smile: false, seated: false, ground: true },
  // one arm stretched out to its left, eyes following, next to a title
  point: { viewBox: "2 65 188 200", arms: ["M52 134 L12 128", "M150 128 Q 166 138 166 158"], look: [-8, 3], smile: false, seated: false, ground: true },
  // seated on a rule that passes at y=188, hands on it, legs dangling
  sit: { viewBox: "15 65 175 175", arms: ["M50 138 Q 36 160 40 186", "M152 130 Q 168 156 164 186"], look: [0, 0], smile: false, seated: true, ground: false },
  // coming up from behind an edge that passes at y=141, so only the top half
  // shows. Its hands are a separate layer, PeekHands, drawn in front of the edge.
  peek: { viewBox: "15 65 175 200", arms: [], look: [-2, 3], smile: false, seated: false, ground: false },
};

// The post-it mascot: coral note with a folded corner. Shapes come from the
// postit-FF606A.svg artwork, without its card background. Decorative.
export function Mascot({ className = "mascot", pose = "wave" }: { className?: string; pose?: keyof typeof poses }) {
  const p = poses[pose];
  const [dx, dy] = p.look;
  return (
    <svg className={className} viewBox={p.viewBox} aria-hidden="true">
      {p.ground && <ellipse cx="102" cy="257" rx="58" ry="6" fill="#050814" opacity="0.28" />}

      {/* legs and shoes */}
      <g fill="none" stroke={limb} strokeWidth="14" strokeLinecap="round">
        <path d={p.seated ? "M80 180 L78 218" : "M82 184 L74 238"} />
        <path d={p.seated ? "M112 180 L118 216" : "M112 184 L124 235"} />
      </g>
      {p.seated ? (
        <>
          <ellipse cx="76" cy="226" rx="16" ry="8.5" fill={dark} transform="rotate(12 76 226)" />
          <ellipse cx="122" cy="224" rx="16" ry="8.5" fill={dark} transform="rotate(-12 122 224)" />
        </>
      ) : (
        <>
          <ellipse cx="79" cy="247" rx="16" ry="8.5" fill={dark} />
          <ellipse cx="133" cy="243" rx="16" ry="8.5" fill={dark} transform="rotate(-14 133 243)" />
        </>
      )}

      {/* arms */}
      <g fill="none" stroke={limb} strokeWidth="11" strokeLinecap="round">
        {p.arms.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      <g transform="rotate(-6 100 135)">
        {/* note and its folded corner */}
        <path fill="#ff606a" d="M53 80 H147 a8 8 0 0 1 8 8 V160 L125 190 H53 a8 8 0 0 1 -8 -8 V88 a8 8 0 0 1 8 -8 Z" />
        <path fill={limb} d="M155 160 L125 190 L125 168 a8 8 0 0 1 8 -8 Z" />

        {/* face */}
        <circle cx="84" cy="126" r="12" fill={eye} />
        <circle cx="118" cy="126" r="12" fill={eye} />
        <circle cx={88 + dx} cy={123 + dy} r="6" fill={dark} />
        <circle cx={122 + dx} cy={123 + dy} r="6" fill={dark} />
        <circle cx={90 + dx} cy={121 + dy} r="2" fill={eye} />
        <circle cx={124 + dx} cy={121 + dy} r="2" fill={eye} />
        <g fill="none" stroke={dark} strokeWidth="4" strokeLinecap="round">
          <path d="M74 106 Q 83 100 92 104" />
          <path d="M110 102 Q 120 97 129 103" />
          {p.smile && <path d="M91 152 Q 101 159 111 152" />}
        </g>
        {!p.smile && <path fill={dark} d="M88 149 Q 101 153 114 149 Q 110 166 101 166 Q 92 166 88 149 Z" />}
        <ellipse cx="68" cy="146" rx="6" ry="4" fill="#ffa3a9" />
        <ellipse cx="134" cy="146" rx="6" ry="4" fill="#ffa3a9" />
      </g>
    </svg>
  );
}

// The two hands of the "peek" pose, gripping the edge. Same viewBox as the
// figure, so giving both the same box lines them up; this one goes in front of
// whatever the figure hides behind.
export function PeekHands({ className }: { className: string }) {
  return (
    <svg className={className} viewBox={poses.peek.viewBox} aria-hidden="true">
      <rect x="22" y="131" width="27" height="17" rx="8.5" fill={limb} transform="rotate(-8 35 139)" />
      <rect x="154" y="125" width="27" height="17" rx="8.5" fill={limb} transform="rotate(-4 167 133)" />
    </svg>
  );
}
