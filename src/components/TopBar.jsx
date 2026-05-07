import LangSwitcher from './LangSwitcher';

export default function TopBar({ phone, L, lang, setLang }) {
  return (
    <div style={{ borderBottom: "2px solid var(--ink)", background: "var(--paper)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "10px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "var(--forest)", color: "var(--paper)",
            display: "grid", placeItems: "center",
            border: "2px solid var(--ink)",
            fontFamily: "Alfa Slab One", fontSize: 20,
          }}>S</div>
          <div style={{ lineHeight: 1.1 }}>
            <div className="display" style={{ fontSize: 20 }}>SANCORPORATION</div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 2, opacity: 0.7 }}>
              {L.topbar.tagline}
            </div>
          </div>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a href="#services" className="mono" style={{ textDecoration: "none", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{L.nav.services}</a>
          <a href="#area" className="mono" style={{ textDecoration: "none", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{L.nav.area}</a>
          <a href="#about" className="mono" style={{ textDecoration: "none", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{L.nav.about}</a>
          <a href="#reviews" className="mono" style={{ textDecoration: "none", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{L.nav.reviews}</a>
          <LangSwitcher lang={lang} setLang={setLang} />
          <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
             className="display"
             style={{
               background: "var(--brick)", color: "var(--paper)",
               padding: "10px 18px", border: "2px solid var(--ink)",
               textDecoration: "none", fontSize: 16, letterSpacing: 1,
               boxShadow: "3px 3px 0 var(--ink)",
             }}>
            ☎ {phone}
          </a>
        </nav>
      </div>
    </div>
  );
}
