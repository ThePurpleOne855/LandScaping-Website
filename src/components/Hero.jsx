import { SunBurst, PalmSilhouette, SealBadge, Starburst, PhoneStamp } from '../ui';

export default function Hero({ phone, L }) {
  return (
    <section style={{
      position: "relative",
      background: "var(--forest)",
      color: "var(--paper)",
      overflow: "hidden",
      borderBottom: "2px solid var(--ink)",
    }}>
      <div style={{ position: "absolute", top: -120, right: -120, opacity: 0.55, color: "var(--gold)" }}>
        <SunBurst size={520} color="var(--gold)" />
      </div>
      <div className="halftone" style={{
        position: "absolute", inset: 0, color: "rgba(0,0,0,0.18)",
        mixBlendMode: "multiply", opacity: 0.6,
      }} />
      <div style={{ position: "absolute", left: -30, bottom: -10, opacity: 0.85, color: "#0a1f12" }}>
        <PalmSilhouette color="#0a1f12" height={280} />
      </div>

      <div className="hero-inner">
        {/* Left: copy */}
        <div>
          <div className="hero-badge-wrap">
            <span style={{ display: "inline-block", padding: "6px 14px", background: "var(--gold)", color: "var(--ink)",
                           border: "2px solid var(--ink)", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}
                  className="mono">
              {L.hero.badge}
            </span>
          </div>
          <h1 className="display" style={{
            fontSize: "clamp(44px, 8vw, 124px)",
            lineHeight: 0.88,
            margin: "10px 0 18px",
            textShadow: "4px 4px 0 var(--brick)",
          }}>
            {L.hero.h1a}<br/>{L.hero.h1b}<br/>
            <span style={{ color: "var(--gold)" }}>{L.hero.h1c}</span><br/>
            {L.hero.h1d}
          </h1>
          <p className="editorial" style={{ fontSize: "clamp(16px, 2.5vw, 22px)", maxWidth: 560, marginTop: 24, lineHeight: 1.35, fontStyle: "italic" }}>
            {L.hero.sub}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 40, flexWrap: "wrap" }}>
            <div className="phone-stamp-hero">
              <PhoneStamp phone={phone} rotate={-3} callTag={L.hero.callTag} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: 3, opacity: 0.7 }}>{L.hero.hoursLabel}</span>
              <span className="display" style={{ fontSize: 18 }}>{L.hero.hours}</span>
              <span className="mono" style={{ fontSize: 12, opacity: 0.85 }}>{L.hero.area}</span>
            </div>
          </div>
        </div>

        {/* Right: decorative (hidden on mobile) */}
        <div className="hero-deco">
          <div style={{ position: "absolute", top: 20, right: 20, color: "var(--paper)" }}>
            <SealBadge size={260} topText="KISSIMMEE · FLORIDA · OSCEOLA CO. ·"
                       center="SAN" sub="CO." rotate={-8} />
          </div>
          <div style={{ position: "absolute", bottom: 0, right: -10 }}>
            <Starburst size={180} rotate={14} color="var(--brick)">
              <div style={{ color: "var(--paper)" }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: 2 }}>{L.hero.freeYard[0]}</div>
                <div className="display" style={{ fontSize: 26, lineHeight: 1 }}>{L.hero.freeYard[1]}<br/>{L.hero.freeYard[2]}</div>
                <div className="mono" style={{ fontSize: 9, letterSpacing: 2, marginTop: 4 }}>{L.hero.freeYard[3]}</div>
              </div>
            </Starburst>
          </div>
          <div style={{ position: "absolute", top: 280, left: 0 }}>
            <Starburst size={140} rotate={-18} color="var(--gold)">
              <div style={{ color: "var(--ink)" }}>
                <div className="display" style={{ fontSize: 20, lineHeight: 1 }}>{L.hero.licensed[0]}<br/>{L.hero.licensed[1]}</div>
              </div>
            </Starburst>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "2px solid var(--ink)", background: "var(--brick)", color: "var(--paper)", overflow: "hidden" }}>
        <div className="display" style={{ display: "flex", gap: 40, padding: "12px 0", whiteSpace: "nowrap",
                                           animation: "ticker 38s linear infinite", fontSize: 18, letterSpacing: 1 }}>
          {Array.from({length: 6}).flatMap((_, i) =>
            L.hero.ticker.map((tk, j) => <span key={`${i}-${j}`}>{tk}</span>)
          )}
        </div>
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}
