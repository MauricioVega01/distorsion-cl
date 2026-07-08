export default function GlitchText({ text, as: Tag = "span", className = "", active = false }) {
  return (
    <Tag className={`glitch-title ${active ? "glitch-active" : ""} ${className}`}>
      {text}
      <span className="glitch-layer layer-cyan" aria-hidden="true">{text}</span>
      <span className="glitch-layer layer-magenta" aria-hidden="true">{text}</span>
    </Tag>
  );
}
