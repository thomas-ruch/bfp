function TextCard({ title, date, urlImage, content }) {
  return (
    <div className="tcard">
      <span className="tcard-title">{title}</span>
      {date && <span className="tcard-date">{date}</span>}
      {urlImage && <img src={urlImage} alt="illustration de l'article" />}
      <div className="tcard-content">{content}</div>
    </div>
  );
}

export default TextCard;
