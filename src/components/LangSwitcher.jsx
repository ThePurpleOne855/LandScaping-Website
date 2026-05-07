import { TRANSLATIONS } from '../i18n/translations';

const codes = ["en", "es", "pt"];

export default function LangSwitcher({ lang, setLang, dark = false }) {
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
}
