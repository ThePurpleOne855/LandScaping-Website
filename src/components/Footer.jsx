import { Fragment } from 'react';

export default function Footer({ phone, L }) {
  return (
    <footer id="about" style={{ background: "var(--forest)", color: "var(--paper)", padding: "60px 0 30px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 50 }}>
          <div>
            <div className="display" style={{ fontSize: 32, lineHeight: 1, marginBottom: 12 }}>SANCORPORATION</div>
            <p style={{ fontSize: 14, opacity: 0.85, maxWidth: 320, lineHeight: 1.55 }}>
              {L.footer.tagline}
            </p>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 2, marginTop: 14, opacity: 0.7 }}>
              {L.footer.lic}
            </div>
          </div>
          <div>
            <h4 className="mono" style={{ fontSize: 11, letterSpacing: 3, opacity: 0.7, margin: "0 0 14px" }}>{L.footer.servicesH}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 2 }}>
              {L.services.list.slice(0, 6).map((s, i) => <li key={i}>{s.name}</li>)}
            </ul>
          </div>
          <div id="area">
            <h4 className="mono" style={{ fontSize: 11, letterSpacing: 3, opacity: 0.7, margin: "0 0 14px" }}>{L.footer.areaH}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 2 }}>
              <li>Kissimmee</li><li>St. Cloud</li><li>Celebration</li>
              <li>Poinciana</li><li>BVL</li><li>Hunters Creek</li>
            </ul>
          </div>
          <div>
            <h4 className="mono" style={{ fontSize: 11, letterSpacing: 3, opacity: 0.7, margin: "0 0 14px" }}>{L.footer.callH}</h4>
            <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
               className="display"
               style={{ fontSize: 28, color: "var(--gold)", textDecoration: "none", display: "block", marginBottom: 10 }}>
              {phone}
            </a>
            <div className="mono" style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.7 }}>
              {L.footer.hoursLines.map((line, i) => (
                <Fragment key={i}>{line}<br/></Fragment>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px dashed var(--paper)", paddingTop: 22,
                      display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
                      fontFamily: "JetBrains Mono", fontSize: 11, letterSpacing: 2, opacity: 0.7 }}>
          <span>{L.footer.copy}</span>
          <span>{L.footer.tag}</span>
        </div>
      </div>
    </footer>
  );
}
