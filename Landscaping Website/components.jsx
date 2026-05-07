// Reusable retro chrome components for SanCorporation.

const RibbonBanner = ({ children, color = "var(--brick)", textColor = "var(--paper)" }) => (
  <div style={{ position: "relative", display: "inline-block", padding: "10px 28px", background: color, color: textColor }}
       className="display">
    <span style={{ position: "absolute", top: 0, left: -14, width: 0, height: 0,
                   borderTop: "22px solid transparent", borderBottom: "22px solid transparent",
                   borderRight: `14px solid ${color}` }} />
    <span style={{ position: "absolute", top: 0, right: -14, width: 0, height: 0,
                   borderTop: "22px solid transparent", borderBottom: "22px solid transparent",
                   borderLeft: `14px solid ${color}` }} />
    {children}
  </div>
);

// Concentric circular badge with curved top text and centered glyph
const SealBadge = ({ size = 220, topText = "EST · 1978 · KISSIMMEE · FL ·", center, sub, rotate = -8 }) => {
  const id = React.useId().replace(/:/g, "");
  const r = size / 2 - 18;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
         style={{ transform: `rotate(${rotate}deg)`, display: "block" }}>
      <defs>
        <path id={`p${id}`} d={`M ${size/2} ${size/2} m -${r} 0 a ${r} ${r} 0 1 1 ${r*2} 0 a ${r} ${r} 0 1 1 -${r*2} 0`} />
      </defs>
      <circle cx={size/2} cy={size/2} r={size/2 - 4} fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx={size/2} cy={size/2} r={size/2 - 12} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      <text fontFamily="Alfa Slab One" fontSize={size * 0.085} fill="currentColor" letterSpacing="2">
        <textPath href={`#p${id}`} startOffset="0">{topText} {topText}</textPath>
      </text>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
            fontFamily="Alfa Slab One" fontSize={size * 0.13} fill="currentColor">
        {center}
      </text>
      {sub && (
        <text x="50%" y={size * 0.66} textAnchor="middle"
              fontFamily="JetBrains Mono" fontWeight="700" fontSize={size * 0.055} fill="currentColor" letterSpacing="2">
          {sub}
        </text>
      )}
    </svg>
  );
};

// Ticket-stub style card with perforated edge
const TicketCard = ({ children, accent = "var(--brick)", style = {} }) => (
  <div style={{
    position: "relative",
    background: "var(--paper)",
    border: "2px solid var(--ink)",
    boxShadow: "6px 6px 0 var(--ink)",
    ...style,
  }}>
    <div style={{
      position: "absolute", left: 0, right: 0, top: 0, height: 8,
      background: accent,
      borderBott,
      om: "2px solid var(--ink)",
    }} />
    <div style={{ padding: "32px 28px 28px" }}>
      {children}
    </div>
    {/* perforated bottom */}
    <div style={{
      position: "absolute", left: 0, right: 0, bottom: -1, height: 14,
      backgroundImage: "radial-gradient(circle at 7px 14px, var(--paper) 5px, transparent 6px)",
      backgroundSize: "14px 14px",
      backgroundRepeat: "repeat-x",
      backgroundColor: "var(--ink)",
    }} />
  </div>
);

// Dotted/dashed divider with a tiny diamond
const Divider = ({ color = "var(--ink)", label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, color, margin: "12px 0" }}>
    <span style={{ flex: 1, borderTop: `2px dashed ${color}` }} />
    <span style={{ width: 8, height: 8, transform: "rotate(45deg)", background: color }} />
    {label && <span className="mono" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>{label}</span>}
    {label && <span style={{ width: 8, height: 8, transform: "rotate(45deg)", background: color }} />}
    <span style={{ flex: 1, borderTop: `2px dashed ${color}` }} />
  </div>
);

const Starburst = ({ size = 140, points = 16, color = "var(--gold)", children, rotate = 12 }) => {
  const cx = size/2, cy = size/2;
  const outer = size/2;
  const inner = size/2 - 8;
  const path = Array.from({ length: points * 2 }).map((_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI/2;
    return `${cx + Math.cos(a)*r},${cy + Math.sin(a)*r}`;
  }).join(" ");
  return (
    <div style={{ position: "relative", width: size, height: size, transform: `rotate(${rotate}deg)` }}>
      <svg width={size} height={size} style={{ position: "absolute", inset: 0 }}>
        <polygon points={path} fill={color} stroke="var(--ink)" strokeWidth="2" />
        <polygon points={path} fill="none" stroke="var(--ink)" strokeWidth="1" transform={`scale(0.86) translate(${size*0.08},${size*0.08})`} strokeDasharray="3 2" />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center",
                    textAlign: "center", padding: 18, transform: `rotate(${-rotate}deg)` }}>
        {children}
      </div>
    </div>
  );
};

// Phone CTA — the heart of the site, repeated
const PhoneStamp = ({ phone, rotate = -4, size = "lg", callTag = "☎ CALL TODAY · FREE ESTIMATE" }) => {
  const big = size === "lg";
  return (
    <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
       style={{
         display: "inline-flex", flexDirection: "column", alignItems: "center",
         padding: big ? "18px 32px" : "12px 22px",
         background: "var(--ink)", color: "var(--paper)",
         border: "3px solid var(--ink)",
         outline: "2px solid var(--paper)",
         outlineOffset: "-9px",
         textDecoration: "none",
         transform: `rotate(${rotate}deg)`,
         boxShadow: "8px 8px 0 var(--brick)",
         transition: "transform .15s ease, box-shadow .15s ease",
       }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = `rotate(${rotate*0.3}deg) translate(-2px,-2px)`; e.currentTarget.style.boxShadow = "12px 12px 0 var(--brick)"; }}
       onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rotate}deg)`; e.currentTarget.style.boxShadow = "8px 8px 0 var(--brick)"; }}>
      <span className="mono" style={{ fontSize: big ? 11 : 9, letterSpacing: 4, opacity: 0.7 }}>
        {callTag}
      </span>
      <span className="display" style={{ fontSize: big ? 38 : 26, marginTop: 4 }}>{phone}</span>
    </a>
  );
};

// Stylized SVG palm silhouette (simple shapes, no detailed illustration)
const PalmSilhouette = ({ color = "var(--forest)", height = 220 }) => (
  <svg viewBox="0 0 200 240" height={height} style={{ display: "block" }}>
    {/* trunk */}
    <path d="M 96 240 Q 100 160 95 80 Q 92 50 102 30" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"/>
    {/* fronds — simple curved triangles */}
    {[-70,-40,-10,20,50,80].map((a,i) => (
      <g key={i} transform={`translate(100 30) rotate(${a})`}>
        <path d="M 0 0 Q 30 -12 70 -8 Q 50 4 0 8 Z" fill={color}/>
        <path d="M 0 0 Q 30 -12 70 -8" stroke={color === 'var(--forest)' ? '#0f2417' : color} strokeWidth="1.5" fill="none" opacity="0.5"/>
      </g>
    ))}
    {/* coconuts */}
    <circle cx="98" cy="32" r="4" fill={color}/>
    <circle cx="106" cy="34" r="4" fill={color}/>
    <circle cx="93" cy="36" r="4" fill={color}/>
  </svg>
);

const SunBurst = ({ size = 300, color = "var(--gold)" }) => {
  const rays = 24;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      {Array.from({length: rays}).map((_,i) => {
        const a = (i/rays)*360;
        return <rect key={i} x="98" y="10" width="4" height="40" fill={color}
                     transform={`rotate(${a} 100 100)`} />;
      })}
      <circle cx="100" cy="100" r="42" fill={color} stroke="var(--ink)" strokeWidth="2"/>
      <circle cx="100" cy="100" r="34" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 3"/>
    </svg>
  );
};

// Service icon — simple geometric glyph in a circle stamp
const ServiceGlyph = ({ kind, size = 64 }) => {
  const stroke = "var(--ink)";
  const sw = 2.5;
  const inner = (() => {
    switch (kind) {
      case "mow": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          {/* mower silhouette */}
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
          {/* pressure washer wand */}
          <path d="M 14 44 L 26 32 L 30 36 L 18 48 Z" />
          <path d="M 28 34 L 40 22" />
          <path d="M 40 22 L 50 14" />
          <path d="M 44 26 L 52 22" />
          {/* water droplets */}
          <path d="M 38 30 L 36 34" />
          <path d="M 44 32 L 42 36" />
          <path d="M 50 30 L 48 34" />
        </g>
      );
      case "pool": return (
        <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round">
          {/* pool basin */}
          <path d="M 10 28 L 10 46 Q 32 52 54 46 L 54 28" />
          {/* waves */}
          <path d="M 12 32 Q 18 28 24 32 Q 30 36 36 32 Q 42 28 48 32 Q 52 34 54 32" />
          <path d="M 12 40 Q 18 36 24 40 Q 30 44 36 40 Q 42 36 48 40 Q 52 42 54 40" />
          {/* sun above */}
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
};

Object.assign(window, {
  RibbonBanner, SealBadge, TicketCard, Divider,
  Starburst, PhoneStamp, PalmSilhouette, SunBurst, ServiceGlyph,
});
