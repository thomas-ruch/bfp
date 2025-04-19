function ImageCard({ title, date, urlImage }) {
  return (
    <div className="icard">
      <span className="icard-title">{title}</span>
      <span className="icard-date">{date}</span>
      <img src={urlImage} alt="illustration de la carte" />
    </div>
  );
}

export default ImageCard;
