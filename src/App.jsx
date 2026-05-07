import { useEffect } from 'react';
import { PALETTES, TWEAK_DEFAULTS } from './constants';
import { TRANSLATIONS } from './i18n/translations';
import { useTweaks } from './tweaks/TweaksPanel';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicesSection from './components/ServicesSection';
import ProcessStrip from './components/ProcessStrip';
import BigCallSection from './components/BigCallSection';
import Footer from './components/Footer';
import TweaksUI from './components/TweaksUI';

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const phone = t.phone || "(407) 860-5954";
  const pal = PALETTES[t.palette] || PALETTES.classic;
  const lang = TRANSLATIONS[t.lang] ? t.lang : "en";
  const L = TRANSLATIONS[lang];

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--paper", pal.paper);
    r.setProperty("--paper-2", pal.paper2);
    r.setProperty("--ink", pal.ink);
    r.setProperty("--forest", pal.forest);
    r.setProperty("--brick", pal.brick);
    r.setProperty("--gold", pal.gold);
  }, [pal]);

  useEffect(() => {
    const styleId = "__grain_toggle";
    let s = document.getElementById(styleId);
    if (!s) { s = document.createElement("style"); s.id = styleId; document.head.appendChild(s); }
    s.textContent = t.showGrain ? "" : "body::before, body::after { display: none; }";
  }, [t.showGrain]);

  useEffect(() => {
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
