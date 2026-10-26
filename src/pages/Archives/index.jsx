import archives from "../../datas/archives.json";
import imageBanner from "../../assets/banners/stock.webp";
import ArchiveCard from "../../components/ArchiveCard";
import CustomButton from "../../components/CustomButton";
import Banner from "../../components/Banner";
import { useState } from "react";

function Archives() {
  const [visibleArchives, setVisibleArchives] = useState(7);

  return (
    <div id="archives-main">
      <Banner urlImage={imageBanner}>Les archives</Banner>
      <ul id="archives-cards">
        {archives.slice(0, visibleArchives).map(({ id, cover }) => (
          <ArchiveCard key={id} id={id} cover={cover} />
        ))}
      </ul>
      {archives.length > visibleArchives && (
        <CustomButton onClick={() => setVisibleArchives((prev) => prev + 7)}>
          Afficher plus
        </CustomButton>
      )}
    </div>
  );
}

export default Archives;
