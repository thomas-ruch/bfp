function Subtitle({ text, level = 2 }) {
  const safeLevel = Math.min(Math.max(level, 2), 6);
  const Tag = `h${safeLevel}`;
  return <Tag className="subtitle">{text}</Tag>;
}

export default Subtitle;
