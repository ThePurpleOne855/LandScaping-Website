import { Fragment } from 'react';

export default function Footer({ phone, L }) {
  return (
    <footer id="about" style={{ background: "var(--forest)", color: "var(--paper)", padding: "clamp(40px, 5vw, 60px) 0 clamp(24px, 3vw, 30px)" }}>
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="display" style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1, marginBottom: 12 }}>SANCORPORATION</div>
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
               style={{ fontSize: "clamp(20px, 3vw, 28px)", color: "var(--gold)", textDecoration: "none", display: "block", marginBottom: 10 }}>
              {phone}
            </a>
            <div className="mono" style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.7 }}>
              {L.footer.hoursLines.map((line, i) => (
                <Fragment key={i}>{line}<br/></Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{L.footer.copy}</span>
          <span>{L.footer.tag}</span>
        </div>
      </div>
    </footer>
  );
}
