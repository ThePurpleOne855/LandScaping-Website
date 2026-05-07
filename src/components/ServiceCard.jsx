import { useState } from 'react';
import { ServiceGlyph } from '../ui';

export default function ServiceCard({ service, kind, no, index, compact, L }) {
  const [hover, setHover] = useState(false);
  const accents = ["var(--brick)", "var(--forest)", "var(--gold)", "var(--brick)"];
  const accent = accents[index % accents.length];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "var(--paper-2)",
        border: "2px solid var(--ink)",
        boxShadow: hover ? "10px 10px 0 var(--ink)" : "6px 6px 0 var(--ink)",
        transform: hover ? "translate(-2px,-2px)" : "translate(0,0)",
        transition: "all .18s ease",
        padding: compact ? "20px" : "28px 28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: compact ? 12 : 18,
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 8,
        background: accent, borderBottom: "2px solid var(--ink)",
      }} />
      <div style={{
        position: "absolute", top: -16, right: 18,
        background: "var(--ink)", color: "var(--paper)",
        padding: "4px 12px", border: "2px solid var(--ink)",
        fontFamily: "JetBrains Mono", fontWeight: 700, fontSize: 12, letterSpacing: 3,
      }}>
        № {no}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 6 }}>
        <ServiceGlyph kind={kind} size={compact ? 56 : 72} />
        <div style={{ flex: 1 }}>
          <h3 className="display" style={{ fontSize: compact ? 20 : 26, margin: 0, lineHeight: 1.05 }}>
            {service.name.toUpperCase()}
          </h3>
          {service.tag && !compact && (
            <span className="mono" style={{
              display: "inline-block", marginTop: 6, padding: "2px 8px",
              background: "var(--gold)", color: "var(--ink)",
              border: "1px solid var(--ink)", fontSize: 10, letterSpacing: 2, fontWeight: 700,
            }}>★ {service.tag.toUpperCase()}</span>
          )}
        </div>
      </div>

      {!compact && (
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>{service.blurb}</p>
      )}

      <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1.5px dashed var(--ink)",
                    display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        <span className="mono" style={{ fontSize: 10, letterSpacing: 2, opacity: 0.7 }}>{L.services.pricingLabel}</span>
        <span className="display" style={{ fontSize: compact ? 14 : 16, color: accent, textAlign: "right" }}>{L.services.priceText}</span>
      </div>
    </div>
  );
}
