import Tag from "../Tag";

function TextCard({ title, date, tags, urlImage, alt, lead, content }) {
  console.log("Tags reçus :", tags);
  return (
    <div className="tcard">
      <div className="cartridge">
        <div className="cart-first">
          <h2>{title}</h2>
          {date && <span>
            {new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric"
              })
            }</span>}
        </div>
        <div className="cart-tags">
          {tags && tags.map((tag) => (<Tag>{tag}</Tag>))}
        </div>
      </div>
      {urlImage && <img src={urlImage} alt={alt} />}
      <div className="tcard-lead">{lead}</div>
      <div className="tcard-content">{content}</div>
    </div>
  );
}

export default TextCard;
