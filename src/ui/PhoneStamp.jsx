export default function PhoneStamp({ phone, rotate = -4, size = "lg", callTag = "☎ CALL TODAY · FREE ESTIMATE" }) {
  const big = size === "lg";
  return (
    <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
       style={{
         display: "inline-flex", flexDirection: "column", alignItems: "center",
         padding: big ? "18px 32px" : "12px 22px",
         background: "var(--ink)", color: "var(--paper)",
         border: "3px solid var(--ink)",
         outline: "2px solid var(--paper)",
         outlineOffset: "-9px",
         textDecoration: "none",
         transform: `rotate(${rotate}deg)`,
         boxShadow: "8px 8px 0 var(--brick)",
         transition: "transform .15s ease, box-shadow .15s ease",
       }}
       onMouseEnter={(e) => { e.currentTarget.style.transform = `rotate(${rotate * 0.3}deg) translate(-2px,-2px)`; e.currentTarget.style.boxShadow = "12px 12px 0 var(--brick)"; }}
       onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rotate}deg)`; e.currentTarget.style.boxShadow = "8px 8px 0 var(--brick)"; }}>
      <span className="mono" style={{ fontSize: big ? 11 : 9, letterSpacing: 4, opacity: 0.7 }}>
        {callTag}
      </span>
      <span className="display" style={{ fontSize: big ? 38 : 26, marginTop: 4 }}>{phone}</span>
    </a>
  );
}
