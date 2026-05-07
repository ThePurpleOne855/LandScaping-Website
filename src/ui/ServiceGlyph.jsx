export default function ServiceGlyph({ kind, size = 64 }) {
  const stroke = "var(--ink)";
  const sw = 2.5;
  const inner = (() => {
    switch (kind) {
      case "mow": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <rect x="14" y="22" width="26" height="14" />
          <circle cx="18" cy="42" r="5" fill={stroke} />
          <circle cx="38" cy="42" r="5" fill={stroke} />
          <path d="M 40 26 L 50 18 L 50 12" />
          <path d="M 14 22 L 8 16" />
        </g>
      );
      case "hedge": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <path d="M 8 38 Q 14 24 22 30 Q 30 18 38 28 Q 46 22 52 36 L 52 44 L 8 44 Z" fill="currentColor" opacity="0.0" />
          <path d="M 8 38 Q 14 24 22 30 Q 30 18 38 28 Q 46 22 52 36 L 52 44 L 8 44 Z" />
          <path d="M 14 50 L 50 50" />
        </g>
      );
      case "leaf": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <path d="M 14 46 Q 14 18 42 14 Q 46 36 18 46 Z" />
          <path d="M 18 44 L 38 22" />
        </g>
      );
      case "irrigation": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <circle cx="32" cy="24" r="6" />
          <path d="M 32 30 L 32 46" />
          <path d="M 22 46 L 42 46" />
          <path d="M 18 38 Q 14 32 16 26" />
          <path d="M 46 38 Q 50 32 48 26" />
        </g>
      );
      case "mulch": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <path d="M 10 42 L 54 42" />
          <path d="M 14 42 Q 18 34 24 38 Q 28 30 34 36 Q 40 30 46 38 Q 50 34 54 42" />
          <circle cx="20" cy="32" r="2" fill={stroke}/>
          <circle cx="32" cy="28" r="2" fill={stroke}/>
          <circle cx="44" cy="32" r="2" fill={stroke}/>
        </g>
      );
      case "pest": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <circle cx="32" cy="32" r="10" />
          <path d="M 32 22 L 32 14" />
          <path d="M 22 32 L 14 32" />
          <path d="M 42 32 L 50 32" />
          <path d="M 32 42 L 32 50" />
          <path d="M 25 25 L 19 19" />
          <path d="M 39 25 L 45 19" />
        </g>
      );
      case "tree": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <circle cx="32" cy="22" r="10" />
          <circle cx="22" cy="30" r="8" />
          <circle cx="42" cy="30" r="8" />
          <path d="M 32 30 L 32 50" />
        </g>
      );
      case "wash": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <path d="M 14 44 L 26 32 L 30 36 L 18 48 Z" />
          <path d="M 28 34 L 40 22" />
          <path d="M 40 22 L 50 14" />
          <path d="M 44 26 L 52 22" />
          <path d="M 38 30 L 36 34" />
          <path d="M 44 32 L 42 36" />
          <path d="M 50 30 L 48 34" />
        </g>
      );
      case "pool": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <path d="M 10 28 L 10 46 Q 32 52 54 46 L 54 28" />
          <path d="M 12 32 Q 18 28 24 32 Q 30 36 36 32 Q 42 28 48 32 Q 52 34 54 32" />
          <path d="M 12 40 Q 18 36 24 40 Q 30 44 36 40 Q 42 36 48 40 Q 52 42 54 40" />
          <circle cx="32" cy="18" r="4" fill={stroke}/>
        </g>
      );
      case "design": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          <rect x="12" y="16" width="40" height="32" />
          <path d="M 18 40 L 26 30 L 32 36 L 40 26 L 46 32" />
          <circle cx="40" cy="22" r="3" fill={stroke}/>
        </g>
      );
      default: return null;
    }
  })();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: "block" }}>
      <circle cx="32" cy="32" r="30" fill="var(--paper-2)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 3" />
      {inner}
    </svg>
  );
}
