export default function TrustStrip({ L }) {
  return (
    <section style={{ background: "var(--paper-2)", borderBottom: "2px solid var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 28px",
                    display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {L.trust.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div className="display" style={{ fontSize: 56, lineHeight: 1, color: "var(--brick)" }}>{s.num}</div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 2, marginTop: 8, textTransform: "uppercase" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
