function ImageCard({ urlImage, alt, caption }) {
  return (
    <figure className="icard">
      <img src={urlImage} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default ImageCard;
