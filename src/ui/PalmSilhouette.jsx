export default function PalmSilhouette({ color = "var(--forest)", height = 220 }) {
  return (
    <svg viewBox="0 0 200 240" height={height} style={{ display: "block" }}>
      <path d="M 96 240 Q 100 160 95 80 Q 92 50 102 30" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"/>
      {[-70, -40, -10, 20, 50, 80].map((a, i) => (
        <g key={i} transform={`translate(100 30) rotate(${a})`}>
          <path d="M 0 0 Q 30 -12 70 -8 Q 50 4 0 8 Z" fill={color}/>
          <path d="M 0 0 Q 30 -12 70 -8" stroke={color === 'var(--forest)' ? '#0f2417' : color} strokeWidth="1.5" fill="none" opacity="0.5"/>
        </g>
      ))}
      <circle cx="98" cy="32" r="4" fill={color}/>
      <circle cx="106" cy="34" r="4" fill={color}/>
      <circle cx="93" cy="36" r="4" fill={color}/>
    </svg>
  );
}
