import imageBanner from "../../assets/banners/accueil.webp";
import imageChronicle from "../../assets/chronicles/accueil.webp";
import TextCard from "../../components/TextCard";
import PageTitle from "../../components/PageTitle";
import Subtitle from "../../components/Subtitle";

function Home() {
  return (
    <div id="home-main">
      <PageTitle title="Le Bureau Français du Panache" urlImage={imageBanner} />
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
        title="Titre de la chronique"
        date="Mardi 8 avril 2025"
        urlImage={imageChronicle}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}

export default Home;
