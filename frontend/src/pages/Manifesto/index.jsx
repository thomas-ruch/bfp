import imageBanner from "../../assets/banners/manifeste.webp";
import manifesto from "../../datas/manifesto.json";
import TextCard from "../../components/TextCard";
import Banner from "../../components/Banner";

function Manifesto() {
  return (
    <div id="manifesto-main">
      <Banner urlImage={imageBanner}>Le manifeste du Panache</Banner>
      <div id="manifesto-intro">
        <p>
          Le panache n’est pas, comme pourraient le prétendre certains esprits
          chagrins, un simple ornement, une fioriture ou une coquetterie. Bien
          plus que cela, il est une attitude, un éclat, une manière d’être au
          monde qui défie la platitude et l’ordinaire !
        </p>
        <p>
          Et le panache à la française alors ? Tout simplement la même chose...
          mais sans filet. C’est une audace qui se situe quelque part entre l’
          «impossible n’est pas français » napoléonien et le « on sait jamais,
          sur un malentendu, ça peut marcher » dussien. Un grand écart audacieux
          entre grandeur et improvisation, entre fougue et frivolité. Loin de la
          perfidie britannique ou de la froideur teutonne, le panache français
          s’exprime dans un éclat de hardiesse relevé d’un sourire en coin.
        </p>
      </div>
      <div className="manifesto-cards">
        {manifesto.map(({ id, title, content }) => (
          <TextCard key={id} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Manifesto;
