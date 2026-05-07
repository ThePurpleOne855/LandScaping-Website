import { TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakToggle, TweakText } from '../tweaks/TweaksPanel';

export default function TweaksUI({ t, setTweak, L }) {
  return (
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
}
