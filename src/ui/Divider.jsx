export default function Divider({ color = "var(--ink)", label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, color, margin: "12px 0" }}>
      <span style={{ flex: 1, borderTop: `2px dashed ${color}` }} />
      <span style={{ width: 8, height: 8, transform: "rotate(45deg)", background: color }} />
      {label && <span className="mono" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>{label}</span>}
      {label && <span style={{ width: 8, height: 8, transform: "rotate(45deg)", background: color }} />}
      <span style={{ flex: 1, borderTop: `2px dashed ${color}` }} />
    </div>
  );
}
