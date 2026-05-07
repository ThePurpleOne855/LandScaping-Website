export default function TicketCard({ children, accent = "var(--brick)", style = {} }) {
  return (
    <div style={{
      position: "relative",
      background: "var(--paper)",
      border: "2px solid var(--ink)",
      boxShadow: "6px 6px 0 var(--ink)",
      ...style,
    }}>
      <div style={{
        position: "absolute", left: 0, right: 0, top: 0, height: 8,
        background: accent,
        borderBottom: "2px solid var(--ink)",
      }} />
      <div style={{ padding: "32px 28px 28px" }}>
        {children}
      </div>
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: -1, height: 14,
        backgroundImage: "radial-gradient(circle at 7px 14px, var(--paper) 5px, transparent 6px)",
        backgroundSize: "14px 14px",
        backgroundRepeat: "repeat-x",
        backgroundColor: "var(--ink)",
      }} />
    </div>
  );
}
