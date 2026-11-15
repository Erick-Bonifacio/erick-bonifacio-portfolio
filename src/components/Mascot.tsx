const dark = "#0a1a4a";
const cream = "#f4ebdd";
const body = "#ff606a";
const limb = "#d9434f";

// One arm bending out at the elbow and into a pocket; mirrored for the other side.
const ArmInPocket = ({ mirror = false }: { mirror?: boolean }) => (
  <g transform={mirror ? "translate(400 0) scale(-1 1)" : undefined}>
    <path d="M78 318 C 40 346, 64 384, 128 392" fill="none" stroke={limb} strokeWidth="22" strokeLinecap="round" />
    {/* pocket: a body-coloured patch hides the hand, the dark line is the opening */}
    <path d="M152 370 Q 122 374 110 398 L 150 416 L 168 404 Z" fill={body} />
    <path d="M152 370 Q 122 374 110 398" fill="none" stroke={dark} strokeWidth="7" strokeLinecap="round" />
  </g>
);

// The drop mascot: facing front, hands in pockets, smug half-lidded look. Decorative.
export function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 400 560" aria-hidden="true">
      <ellipse cx="200" cy="526" rx="112" ry="11" fill="#050814" opacity="0.28" />

      {/* legs and shoes */}
      <path d="M172 415 L168 500" stroke={limb} strokeWidth="26" />
      <path d="M228 415 L232 500" stroke={limb} strokeWidth="26" />
      <ellipse cx="158" cy="508" rx="32" ry="16" fill={dark} transform="rotate(-6 158 508)" />
      <ellipse cx="242" cy="508" rx="32" ry="16" fill={dark} transform="rotate(6 242 508)" />

      {/* body */}
      <path d="M200 30 C 215 110, 330 190, 330 300 C 330 378, 270 436, 200 436 C 130 436, 70 378, 70 300 C 70 190, 185 110, 200 30 Z" fill={body} />
      <path d="M112 250 C 122 210, 145 180, 172 160" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="12" strokeLinecap="round" />
      <ellipse cx="270" cy="326" rx="15" ry="9" fill="#ffffff" opacity="0.35" />

      <ArmInPocket />
      <ArmInPocket mirror />

      {/* eyes: cream half-moons under heavy lids */}
      <path d="M138 268 A 28 28 0 0 0 192 266 Z" fill={cream} />
      <path d="M208 266 A 28 28 0 0 0 262 268 Z" fill={cream} />
      <circle cx="168" cy="280" r="11" fill={dark} />
      <circle cx="238" cy="280" r="11" fill={dark} />
      <g fill="none" stroke={dark} strokeLinecap="round">
        <path d="M131 269 L191 265" strokeWidth="9" />
        <path d="M209 265 L269 269" strokeWidth="9" />
        {/* brows: one flat, one raised */}
        <path d="M136 236 L190 238" strokeWidth="9" />
        <path d="M212 234 C 230 216, 256 216, 270 230" strokeWidth="9" />
        {/* smirk */}
        <path d="M166 328 C 186 354, 228 352, 246 332" strokeWidth="10" />
      </g>
    </svg>
  );
}
