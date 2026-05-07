import { useState } from 'react';
import LangSwitcher from './LangSwitcher';

export default function TopBar({ phone, L, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const telHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  return (
    <div style={{ borderBottom: "2px solid var(--ink)", background: "var(--paper)", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="topbar-inner">
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "var(--forest)", color: "var(--paper)",
            display: "grid", placeItems: "center", flexShrink: 0,
            border: "2px solid var(--ink)",
            fontFamily: "Alfa Slab One", fontSize: 18,
          }}>S</div>
          <div style={{ lineHeight: 1.1 }}>
            <div className="display" style={{ fontSize: "clamp(13px, 3.5vw, 20px)", whiteSpace: "nowrap" }}>SANCORPORATION</div>
            <div className="topbar-tagline mono" style={{ fontSize: 10, letterSpacing: 2, opacity: 0.7 }}>
              {L.topbar.tagline}
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="topbar-nav">
          <a href="#services" className="mono" style={{ textDecoration: "none", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{L.nav.services}</a>
          <a href="#area" className="mono" style={{ textDecoration: "none", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{L.nav.area}</a>
          <a href="#about" className="mono" style={{ textDecoration: "none", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{L.nav.about}</a>
          <a href="#reviews" className="mono" style={{ textDecoration: "none", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>{L.nav.reviews}</a>
          <LangSwitcher lang={lang} setLang={setLang} />
          <a href={telHref}
             className="display"
             style={{
               background: "var(--brick)", color: "var(--paper)",
               padding: "10px 18px", border: "2px solid var(--ink)",
               textDecoration: "none", fontSize: 16, letterSpacing: 1,
               boxShadow: "3px 3px 0 var(--ink)", whiteSpace: "nowrap",
             }}>
            ☎ {phone}
          </a>
        </nav>

        {/* Mobile: phone icon + hamburger */}
        <div className="topbar-mobile-right">
          <a href={telHref}
             className="display"
             aria-label={`Call ${phone}`}
             style={{
               background: "var(--brick)", color: "var(--paper)",
               padding: "9px 13px", border: "2px solid var(--ink)",
               textDecoration: "none", fontSize: 18, lineHeight: 1,
               boxShadow: "2px 2px 0 var(--ink)",
             }}>☎</a>
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}>
            <span style={{ display: "block", width: 22, height: 2, background: "var(--ink)" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "var(--ink)" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "var(--ink)" }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <a href="#services" onClick={() => setMenuOpen(false)} className="mobile-nav-link">{L.nav.services}</a>
        <a href="#area"     onClick={() => setMenuOpen(false)} className="mobile-nav-link">{L.nav.area}</a>
        <a href="#about"    onClick={() => setMenuOpen(false)} className="mobile-nav-link">{L.nav.about}</a>
        <a href="#reviews"  onClick={() => setMenuOpen(false)} className="mobile-nav-link">{L.nav.reviews}</a>
        <div className="mobile-nav-footer">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a href={telHref}
             className="display"
             style={{
               background: "var(--brick)", color: "var(--paper)",
               padding: "10px 16px", border: "2px solid var(--ink)",
               textDecoration: "none", fontSize: 15, letterSpacing: 1,
               boxShadow: "3px 3px 0 var(--ink)", whiteSpace: "nowrap",
             }}>☎ {phone}</a>
        </div>
      </div>
    </div>
  );
}
