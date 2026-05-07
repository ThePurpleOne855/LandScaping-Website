export default function ProcessStrip({ L }) {
  return (
    <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "70px 0", borderBottom: "2px solid var(--ink)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <div className="mono" style={{ fontSize: 12, letterSpacing: 4, opacity: 0.7, marginBottom: 14 }}>
          {L.process.kicker}
        </div>
        <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: "0 0 56px", lineHeight: 0.95 }}>
          {L.process.h2}
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
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
              <h3 className="display" style={{ fontSize: 24, margin: "0 0 10px" }}>{s.t.toUpperCase()}</h3>
              <p style={{ margin: 0, fontSize: 14, opacity: 0.85, lineHeight: 1.55 }}>{s.d}</p>
              {i < 3 && (
                <div style={{
                  position: "absolute", top: 26, right: -20, width: 24, height: 4,
                  background: "var(--paper)", opacity: 0.4,
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
