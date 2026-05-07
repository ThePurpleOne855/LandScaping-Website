export default function TrustStrip({ L }) {
  return (
    <section style={{ background: "var(--paper-2)", borderBottom: "2px solid var(--ink)" }}>
      <div className="trust-grid">
        {L.trust.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1, color: "var(--brick)" }}>{s.num}</div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 2, marginTop: 8, textTransform: "uppercase" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
