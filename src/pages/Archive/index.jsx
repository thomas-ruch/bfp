import { useParams, Navigate } from "react-router-dom";
import archives from "../../datas/archives.json";
import ImageCard from "../../components/ImageCard";
import CustomButton from "../../components/CustomButton";

function Archive() {
  const { archId } = useParams();
  const ids = archives.map((elem) => elem.id);

  if (ids.includes(archId)) {
    const currentArch = archives.find((elem) => elem.id === archId);

    return (
      <div id="archive-main">
        <div className="archive-id">
          <div className="archive-ref">{`Archive ${currentArch.id}`}</div>
        </div>
        <div className="archive-secondary">
          <div className="archive-meta">
            <h2>{currentArch.title}</h2>
            <p>{currentArch.archiveDate}</p>
            <p>{currentArch.game}</p>
          </div>

          <p className="archive-intro">{currentArch.intro}</p>
          <div className="archive-image">
            <ImageCard
              urlImage={currentArch.mainImage.src}
              alt={currentArch.mainImage.alt}
            />
          </div>

          <div className="archive-content">
            {currentArch.content.map((item, index) => {
              if (item.type === "paragraph") {
                return <p key={index}>{item.text}</p>;
              }

              if (item.type === "image") {
                return (
                  <div key={index} className="archive-image">
                    <ImageCard
                      urlImage={item.src}
                      alt={item.alt}
                      caption={item.caption}
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
        <CustomButton to="/Archives/">Retour aux archives</CustomButton>
      </div>
    );
  } else {
    return <Navigate to="/error" />;
  }
}

export default Archive;
