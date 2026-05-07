import { useId } from 'react';

export default function SealBadge({ size = 220, topText = "EST · 1978 · KISSIMMEE · FL ·", center, sub, rotate = -8 }) {
  const rawId = useId().replace(/:/g, "");
  const r = size / 2 - 18;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
         style={{ transform: `rotate(${rotate}deg)`, display: "block" }}>
      <defs>
        <path id={`p${rawId}`} d={`M ${size/2} ${size/2} m -${r} 0 a ${r} ${r} 0 1 1 ${r*2} 0 a ${r} ${r} 0 1 1 -${r*2} 0`} />
      </defs>
      <circle cx={size/2} cy={size/2} r={size/2 - 4} fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx={size/2} cy={size/2} r={size/2 - 12} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      <text fontFamily="Alfa Slab One" fontSize={size * 0.085} fill="currentColor" letterSpacing="2">
        <textPath href={`#p${rawId}`} startOffset="0">{topText} {topText}</textPath>
      </text>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
            fontFamily="Alfa Slab One" fontSize={size * 0.13} fill="currentColor">
        {center}
      </text>
      {sub && (
        <text x="50%" y={size * 0.66} textAnchor="middle"
              fontFamily="JetBrains Mono" fontWeight="700" fontSize={size * 0.055} fill="currentColor" letterSpacing="2">
          {sub}
        </text>
      )}
    </svg>
  );
}
