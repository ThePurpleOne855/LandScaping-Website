export default function Starburst({ size = 140, points = 16, color = "var(--gold)", children, rotate = 12 }) {
  const cx = size / 2, cy = size / 2;
  const outer = size / 2;
  const inner = size / 2 - 8;
  const path = Array.from({ length: points * 2 }).map((_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
  }).join(" ");
  return (
    <div style={{ position: "relative", width: size, height: size, transform: `rotate(${rotate}deg)` }}>
      <svg width={size} height={size} style={{ position: "absolute", inset: 0 }}>
        <polygon points={path} fill={color} stroke="var(--ink)" strokeWidth="2" />
        <polygon points={path} fill="none" stroke="var(--ink)" strokeWidth="1" transform={`scale(0.86) translate(${size * 0.08},${size * 0.08})`} strokeDasharray="3 2" />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center",
                    textAlign: "center", padding: 18, transform: `rotate(${-rotate}deg)` }}>
        {children}
      </div>
    </div>
  );
}
