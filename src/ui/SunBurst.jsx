export default function SunBurst({ size = 300, color = "var(--gold)" }) {
  const rays = 24;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      {Array.from({ length: rays }).map((_, i) => {
        const a = (i / rays) * 360;
        return <rect key={i} x="98" y="10" width="4" height="40" fill={color}
                     transform={`rotate(${a} 100 100)`} />;
      })}
      <circle cx="100" cy="100" r="42" fill={color} stroke="var(--ink)" strokeWidth="2"/>
      <circle cx="100" cy="100" r="34" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="2 3"/>
    </svg>
  );
}
