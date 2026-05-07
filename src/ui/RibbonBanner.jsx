export default function RibbonBanner({ children, color = "var(--brick)", textColor = "var(--paper)" }) {
  return (
    <div style={{ position: "relative", display: "inline-block", padding: "10px 28px", background: color, color: textColor }}
         className="display">
      <span style={{ position: "absolute", top: 0, left: -14, width: 0, height: 0,
                     borderTop: "22px solid transparent", borderBottom: "22px solid transparent",
                     borderRight: `14px solid ${color}` }} />
      <span style={{ position: "absolute", top: 0, right: -14, width: 0, height: 0,
                     borderTop: "22px solid transparent", borderBottom: "22px solid transparent",
                     borderLeft: `14px solid ${color}` }} />
      {children}
    </div>
  );
}
