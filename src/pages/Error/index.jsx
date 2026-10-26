import Banner from "../../components/Banner";
import CustomButton from "../../components/CustomButton";

function Error() {
  return (
    <div id="error-main">
      <Banner>Erreur 404</Banner>
      <p>
        Même avec tout le panache du monde, impossible de
        retrouver cette page !
      </p>
      <CustomButton to="/">
        Retour à l'accueil
      </CustomButton>
    </div>
  );
}

export default Error;