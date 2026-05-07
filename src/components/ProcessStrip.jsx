export default function ProcessStrip({ L }) {
  return (
    <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "clamp(48px, 6vw, 70px) 0", borderBottom: "2px solid var(--ink)" }}>
      <div className="process-container">
        <div className="mono" style={{ fontSize: 12, letterSpacing: 4, opacity: 0.7, marginBottom: 14 }}>
          {L.process.kicker}
        </div>
        <h2 className="display" style={{ fontSize: "clamp(32px, 5vw, 72px)", margin: "0 0 clamp(32px, 5vw, 56px)", lineHeight: 0.95 }}>
          {L.process.h2}
        </h2>

        <div className="process-grid">
          {L.process.steps.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "var(--gold)", color: "var(--ink)",
                border: "2px solid var(--paper)",
                display: "grid", placeItems: "center",
                fontFamily: "Alfa Slab One", fontSize: 20,
                marginBottom: 18,
              }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="display" style={{ fontSize: "clamp(16px, 3.5vw, 24px)", margin: "0 0 10px" }}>{s.t.toUpperCase()}</h3>
              <p style={{ margin: 0, fontSize: 14, opacity: 0.85, lineHeight: 1.55 }}>{s.d}</p>
              {i < 3 && <div className="process-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
