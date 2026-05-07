import { RibbonBanner, Divider } from '../ui';
import { SERVICE_KINDS } from '../constants';
import ServiceCard from './ServiceCard';

export default function ServicesSection({ compact, L }) {
  return (
    <section id="services" style={{ background: "var(--paper)", padding: "clamp(60px, 8vw, 100px) 0 clamp(48px, 6vw, 80px)" }}>
      <div className="services-container">
        <div className="services-header">
          <div>
            <div style={{ marginBottom: 14 }}>
              <RibbonBanner color="var(--brick)">{L.services.ribbon}</RibbonBanner>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 6vw, 84px)", lineHeight: 0.95, margin: 0, maxWidth: 780 }}>
              {L.services.h2a}<br/>{L.services.h2b}<br/>{L.services.h2c}
            </h2>
          </div>
          <p className="editorial" style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 380, fontStyle: "italic", lineHeight: 1.4 }}>
            {L.services.lead}
          </p>
        </div>

        <Divider label={L.services.divider} />

        <div className={`services-grid ${compact ? "services-grid-compact" : "services-grid-normal"}`}>
          {L.services.list.map((s, i) => (
            <ServiceCard key={i} service={s} kind={SERVICE_KINDS[i]} no={String(i + 1).padStart(2, "0")}
                         index={i} compact={compact} L={L} />
          ))}
        </div>

        <div style={{ marginTop: 64, textAlign: "center" }}>
          <p className="editorial" style={{ fontSize: "clamp(16px, 2.5vw, 22px)", fontStyle: "italic", marginBottom: 20 }}>
            {L.services.bottomCta}
          </p>
          <a href="#call" className="display"
             style={{
               display: "inline-block", padding: "16px 36px",
               background: "var(--forest)", color: "var(--paper)",
               border: "2px solid var(--ink)", textDecoration: "none",
               fontSize: "clamp(16px, 2.5vw, 22px)", letterSpacing: 1,
               boxShadow: "5px 5px 0 var(--ink)",
             }}>
            {L.services.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
