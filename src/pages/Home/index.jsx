import imageBanner from "../../assets/banners/accueil.webp";
import TextCard from "../../components/TextCard";
import Banner from "../../components/Banner";
import Subtitle from "../../components/Subtitle";
import logBook from "../../datas/logbook.json";

function Home() {
  const log = logBook[0];
  return (
    <div id="home-main">
      <Banner urlImage={imageBanner}>Le Bureau Français du Panache</Banner>
      <div id="home-intro">
        <p>
          BFP… Des initiales qui ont fait le renom de la France. Émanation
          française de l’internationale des Héros, au même titre que la Justice
          League ou les Avengers, le Bureau Français du Panache défend une
          certaine idée de la France. Hubert Bonnisseur de la Bath, Super
          Résistant, Jean-Claude Duss, tous ont fait le renom de cette
          institution.
        </p>
        <p>
          Mais des petites mains y sont également à l’œuvre. C’est l’histoire de
          l’une d’elles que nous allons vous conter.
        </p>
      </div>
      <Subtitle text="La dernière chronique parue" />
      <TextCard
        title={log.title}
        date={log.publicationDate}
        lead={log.lead}
        tags={log.tags}
        urlImage={log.urlImage}
        content={log.content}
      />
    </div>
  );
}

export default Home;
