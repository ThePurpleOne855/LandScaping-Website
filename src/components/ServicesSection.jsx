import { RibbonBanner, Divider } from '../ui';
import { SERVICE_KINDS } from '../constants';
import ServiceCard from './ServiceCard';

export default function ServicesSection({ compact, L }) {
  return (
    <section id="services" style={{ background: "var(--paper)", padding: "100px 0 80px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between",
                      gap: 32, marginBottom: 56, flexWrap: "wrap" }}>
          <div>
            <div style={{ marginBottom: 14 }}>
              <RibbonBanner color="var(--brick)">{L.services.ribbon}</RibbonBanner>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(48px, 6vw, 84px)", lineHeight: 0.95, margin: 0, maxWidth: 780 }}>
              {L.services.h2a}<br/>{L.services.h2b}<br/>{L.services.h2c}
            </h2>
          </div>
          <p className="editorial" style={{ fontSize: 20, maxWidth: 380, fontStyle: "italic", lineHeight: 1.4 }}>
            {L.services.lead}
          </p>
        </div>

        <Divider label={L.services.divider} />

        <div style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: compact ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
          gap: compact ? 20 : 28,
        }}>
          {L.services.list.map((s, i) => (
            <ServiceCard key={i} service={s} kind={SERVICE_KINDS[i]} no={String(i + 1).padStart(2, "0")}
                         index={i} compact={compact} L={L} />
          ))}
        </div>

        <div style={{ marginTop: 64, textAlign: "center" }}>
          <p className="editorial" style={{ fontSize: 22, fontStyle: "italic", marginBottom: 20 }}>
            {L.services.bottomCta}
          </p>
          <a href="#call" className="display"
             style={{
               display: "inline-block", padding: "16px 36px",
               background: "var(--forest)", color: "var(--paper)",
               border: "2px solid var(--ink)", textDecoration: "none",
               fontSize: 22, letterSpacing: 1,
               boxShadow: "5px 5px 0 var(--ink)",
             }}>
            {L.services.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
