import { SunBurst, PhoneStamp } from '../ui';

export default function BigCallSection({ phone, L }) {
  return (
    <section id="call" style={{
      position: "relative",
      background: "var(--brick)", color: "var(--paper)",
      padding: "clamp(60px, 10vw, 120px) 0 clamp(72px, 11vw, 140px)",
      overflow: "hidden",
      borderBottom: "2px solid var(--ink)",
    }}>
      <div className="halftone" style={{
        position: "absolute", inset: 0, color: "rgba(0,0,0,0.2)", mixBlendMode: "multiply",
        backgroundSize: "10px 10px",
      }} />
      <div style={{ position: "absolute", top: -160, left: -140, color: "var(--gold)", opacity: 0.4 }}>
        <SunBurst size={500} color="var(--gold)" />
      </div>

      <div className="bigcall-inner">
        <div className="mono" style={{ fontSize: 13, letterSpacing: 6, marginBottom: 18, opacity: 0.85 }}>
          {L.bigCall.kicker}
        </div>
        <h2 className="display" style={{ fontSize: "clamp(48px, 10vw, 156px)", lineHeight: 0.85, margin: "0 0 30px",
                                         textShadow: "5px 5px 0 var(--ink)" }}>
          {L.bigCall.h2a}<br/>
          <span style={{ color: "var(--gold)" }}>{L.bigCall.h2b}</span>
        </h2>
        <p className="editorial" style={{ fontSize: "clamp(16px, 2.5vw, 24px)", fontStyle: "italic", maxWidth: 640, margin: "0 auto 50px", lineHeight: 1.35 }}>
          {L.bigCall.lead}
        </p>
        <div style={{ display: "inline-block", transform: "rotate(-2deg)" }}>
          <div className="phone-stamp-bigcall">
            <PhoneStamp phone={phone} rotate={0} size="lg" callTag={L.hero.callTag} />
          </div>
        </div>
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          <span className="mono" style={{ fontSize: 12, letterSpacing: 3 }}>{L.bigCall.hours}</span>
          <span className="mono" style={{ fontSize: 12, letterSpacing: 3 }}>{L.bigCall.email}</span>
          <span className="mono" style={{ fontSize: 12, letterSpacing: 3 }}>{L.bigCall.area}</span>
        </div>
      </div>
    </section>
  );
}
