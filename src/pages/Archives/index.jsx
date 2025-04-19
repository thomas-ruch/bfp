import archives from "../../datas/archives-shelves.json";
import imageBanner from "../../assets/banners/stock.webp";
import ArchiveCard from "../../components/ArchiveCard";
import CustomButton from "../../components/CustomButton";
import PageTitle from "../../components/PageTitle";
import archiveData from "../../datas/archives.json";
import Archive from "../../components/Archive";

function Archives() {
  const archive = archiveData[0];
  return (
    <div id="archives-main">
      <PageTitle title="Les archives du BFP" urlImage={imageBanner} />
      <div id="archives-cards">
        {archives.map(({ id, cover }) => (
          <ArchiveCard key={id} cover={cover} />
        ))}
      </div>
      <CustomButton text="Charger plus" />
      <Archive data={archive} />
    </div>
  );
}

export default Archives;
