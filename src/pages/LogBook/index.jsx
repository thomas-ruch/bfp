import imageBanner from "../../assets/banners/biblio.webp";
import imageChronicle from "../../assets/chronicles/accueil.webp";
import ImageCard from "../../components/ImageCard";
import CustomButton from "../../components/CustomButton";
import PageTitle from "../../components/PageTitle";

function LogBook() {
  return (
    <div id="logbook-main">
      <PageTitle title="Les chroniques du Panache" urlImage={imageBanner} />
      <ImageCard
        title="Titre de la chronique"
        date="Mardi 8 avril 2025"
        urlImage={imageChronicle}
      />
      <CustomButton text="Charger plus" />
    </div>
  );
}

export default LogBook;
