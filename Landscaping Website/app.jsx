// SanCorporation — Retro Americana Lawn & Garden Care
// Single-page site, services-focused, primary CTA = call.

const {
  RibbonBanner, SealBadge, TicketCard, Divider,
  Starburst, PhoneStamp, PalmSilhouette, SunBurst, ServiceGlyph,
  TRANSLATIONS,
} = window;

const PALETTES = {
  classic:   { paper: "#f1e6cc", paper2: "#e8d9b6", ink: "#1a1612", forest: "#1f3d2b", brick: "#b5482e", gold: "#c8a24c" },
  citrus:    { paper: "#f5ecd0", paper2: "#ecdfb6", ink: "#1c1410", forest: "#2c5530", brick: "#d2691e", gold: "#e3a72f" },
  twilight:  { paper: "#ecd9b6", paper2: "#dcc290", ink: "#171312", forest: "#0e3030", brick: "#a23b2c", gold: "#d4a13c" },
  meadow:    { paper: "#eee4c9", paper2: "#dfd0a6", ink: "#1a1c14", forest: "#3a5a23", brick: "#9c3b2c", gold: "#bc8b3a" },
};

const SERVICE_KINDS = ["mow","hedge","irrigation","mulch","tree","leaf","wash","pool"];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const phone = t.phone || "(407) 860-5954";
  const pal = PALETTES[t.palette] || PALETTES.classic;
  const lang = TRANSLATIONS[t.lang] ? t.lang : "en";
  const L = TRANSLATIONS[lang];

  // Apply palette via CSS vars
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--paper", pal.paper);
    r.setProperty("--paper-2", pal.paper2);
    r.setProperty("--ink", pal.ink);
    r.setProperty("--forest", pal.forest);
    r.setProperty("--brick", pal.brick);
    r.setProperty("--gold", pal.gold);
  }, [pal]);

  React.useEffect(() => {
    const styleId = "__grain_toggle";
    let s = document.getElementById(styleId);
    if (!s) { s = document.createElement("style"); s.id = styleId; document.head.appendChild(s); }
    s.textContent = t.showGrain ? "" : "body::before, body::after { display: none; }";
  }, [t.showGrain]);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div data-screen-label="Home" style={{ minHeight: "100vh", background: "var(--paper)" }}>
      <TopBar phone={phone} L={L} lang={lang} setLang={(v) => setTweak("lang", v)} />
      <Hero phone={phone} L={L} />
      <TrustStrip L={L} />
      <ServicesSection compact={t.compact} L={L} />
      <ProcessStrip L={L} />
      <BigCallSection phone={phone} L={L} />
      <Footer phone={phone} L={L} />
      <TweaksUI t={t} setTweak={setTweak} L={L} />
    </div>
  );
}

const LangSwitcher = ({ lang, setLang, dark = false }) => {
  const codes = ["en", "es", "pt"];
  return (
    <div style={{ display: "inline-flex", border: `2px solid ${dark ? "var(--paper)" : "var(--ink)"}`,
                   background: dark ? "transparent" : "var(--paper)" }}>
      {codes.map((c, i) => (
        <button key={c}
                onClick={() => setLang(c)}
                className="mono"
                style={{
                  padding: "5px 9px",
                  fontSize: 11, letterSpacing: 2, fontWeight: 700,
                  border: 0,
                  borderLeft: i === 0 ? 0 : `1px solid ${dark ? "var(--paper)" : "var(--ink)"}`,
                  background: lang === c ? (dark ? "var(--gold)" : "var(--ink)") : "transparent",
                  color: lang === c ? (dark ? "var(--ink)" : "var(--paper)") : (dark ? "var(--paper)" : "var(--ink)"),
                  cursor: "pointer",
                }}>
          {TRANSLATIONS[c].code}
        </button>
      ))}
    </div>
  );
};

const TopBar = ({ phone, L, lang, setLang }) => (
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
        <a href={`tel:${phone.replace(/[^0-9+]/g,"")}`}
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

const Hero = ({ phone, L }) => (
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

    <div style={{
      position: "relative",
      maxWidth: 1280, margin: "0 auto",
      padding: "80px 28px 100px",
      display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center",
    }}>
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <span style={{ display: "inline-block", padding: "6px 14px", background: "var(--gold)", color: "var(--ink)",
                         border: "2px solid var(--ink)", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}
                className="mono">
            {L.hero.badge}
          </span>
        </div>
        <h1 className="display" style={{
          fontSize: "clamp(56px, 8vw, 124px)",
          lineHeight: 0.88,
          margin: "10px 0 18px",
          textShadow: "4px 4px 0 var(--brick)",
        }}>
          {L.hero.h1a}<br/>{L.hero.h1b}<br/>
          <span style={{ color: "var(--gold)" }}>{L.hero.h1c}</span><br/>
          {L.hero.h1d}
        </h1>
        <p className="editorial" style={{ fontSize: 22, maxWidth: 560, marginTop: 24, lineHeight: 1.35, fontStyle: "italic" }}>
          {L.hero.sub}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 40, flexWrap: "wrap" }}>
          <PhoneStamp phone={phone} rotate={-3} callTag={L.hero.callTag} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span className="mono" style={{ fontSize: 11, letterSpacing: 3, opacity: 0.7 }}>{L.hero.hoursLabel}</span>
            <span className="display" style={{ fontSize: 18 }}>{L.hero.hours}</span>
            <span className="mono" style={{ fontSize: 12, opacity: 0.85 }}>{L.hero.area}</span>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", minHeight: 420 }}>
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

const TrustStrip = ({ L }) => (
  <section style={{ background: "var(--paper-2)", borderBottom: "2px solid var(--ink)" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 28px",
                  display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
      {L.trust.map((s, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <div className="display" style={{ fontSize: 56, lineHeight: 1, color: "var(--brick)" }}>{s.num}</div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: 2, marginTop: 8, textTransform: "uppercase" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ServicesSection = ({ compact, L }) => (
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
          <ServiceCard key={i} service={s} kind={SERVICE_KINDS[i]} no={String(i+1).padStart(2,"0")}
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

const ServiceCard = ({ service, kind, no, index, compact, L }) => {
  const [hover, setHover] = React.useState(false);
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
};

const ProcessStrip = ({ L }) => (
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
            }}>{String(i+1).padStart(2,"0")}</div>
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

const BigCallSection = ({ phone, L }) => (
  <section id="call" style={{
    position: "relative",
    background: "var(--brick)", color: "var(--paper)",
    padding: "120px 0 140px",
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

    <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
      <div className="mono" style={{ fontSize: 13, letterSpacing: 6, marginBottom: 18, opacity: 0.85 }}>
        {L.bigCall.kicker}
      </div>
      <h2 className="display" style={{ fontSize: "clamp(64px, 10vw, 156px)", lineHeight: 0.85, margin: "0 0 30px",
                                       textShadow: "5px 5px 0 var(--ink)" }}>
        {L.bigCall.h2a}<br/>
        <span style={{ color: "var(--gold)" }}>{L.bigCall.h2b}</span>
      </h2>
      <p className="editorial" style={{ fontSize: 24, fontStyle: "italic", maxWidth: 640, margin: "0 auto 50px", lineHeight: 1.35 }}>
        {L.bigCall.lead}
      </p>
      <div style={{ display: "inline-block", transform: "rotate(-2deg)" }}>
        <PhoneStamp phone={phone} rotate={0} size="lg" callTag={L.hero.callTag} />
      </div>
      <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
        <span className="mono" style={{ fontSize: 12, letterSpacing: 3 }}>{L.bigCall.hours}</span>
        <span className="mono" style={{ fontSize: 12, letterSpacing: 3 }}>{L.bigCall.email}</span>
        <span className="mono" style={{ fontSize: 12, letterSpacing: 3 }}>{L.bigCall.area}</span>
      </div>
    </div>
  </section>
);

const Footer = ({ phone, L }) => (
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
            {L.services.list.slice(0,6).map((s, i) => <li key={i}>{s.name}</li>)}
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
          <a href={`tel:${phone.replace(/[^0-9+]/g,"")}`}
             className="display"
             style={{ fontSize: 28, color: "var(--gold)", textDecoration: "none", display: "block", marginBottom: 10 }}>
            {phone}
          </a>
          <div className="mono" style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.7 }}>
            {L.footer.hoursLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br/></React.Fragment>
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

const TweaksUI = ({ t, setTweak, L }) => (
  <TweaksPanel title={L.tweaks.panelTitle}>
    <TweakSection label={L.tweaks.language}>
      <TweakRadio label={L.tweaks.languageLabel}
                  value={t.lang}
                  options={[
                    { value: "en", label: "EN" },
                    { value: "es", label: "ES" },
                    { value: "pt", label: "PT" },
                  ]}
                  onChange={(v) => setTweak("lang", v)} />
    </TweakSection>

    <TweakSection label={L.tweaks.palette}>
      <TweakSelect label={L.tweaks.moreThemes}
                   value={t.palette}
                   options={[
                     { value: "classic", label: L.tweaks.paletteOpts.classicLong },
                     { value: "citrus", label: L.tweaks.paletteOpts.citrusLong },
                     { value: "twilight", label: L.tweaks.paletteOpts.twilight },
                     { value: "meadow", label: L.tweaks.paletteOpts.meadow },
                   ]}
                   onChange={(v) => setTweak("palette", v)} />
    </TweakSection>

    <TweakSection label={L.tweaks.layout}>
      <TweakToggle label={L.tweaks.compact} value={t.compact}
                   onChange={(v) => setTweak("compact", v)} />
      <TweakToggle label={L.tweaks.grain} value={t.showGrain}
                   onChange={(v) => setTweak("showGrain", v)} />
    </TweakSection>

    <TweakSection label={L.tweaks.phoneSection}>
      <TweakText label={L.tweaks.phoneLabel} value={t.phone}
                 onChange={(v) => setTweak("phone", v)} />
    </TweakSection>
  </TweaksPanel>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
