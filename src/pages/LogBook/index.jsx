import imageBanner from "../../assets/banners/biblio.webp";
import LogCard from "../../components/LogCard";
import CustomButton from "../../components/CustomButton";
import PageTitle from "../../components/PageTitle";
import logbook from "../../datas/logbook.json";
import { useState } from "react";

function LogBook() {
  const [visibleLogs, setVisibleLogs] = useState(5);

  return (
    <div id="logbook-main">
      <PageTitle title="Les chroniques du Panache" urlImage={imageBanner} />
      <ul id="logbook-cards">
        {logbook
          .slice(0, visibleLogs)
          .map(({ id, title, logDate, urlImage, alt }) => (
            <LogCard
              key={id}
              id={id}
              title={title}
              date={logDate}
              urlImage={urlImage}
              alt={alt}
            />
          ))}
      </ul>
      {logbook.length > visibleLogs && (
        <CustomButton onClick={() => setVisibleLogs((prev) => prev + 5)}>
          Afficher plus
        </CustomButton>
      )}{" "}
    </div>
  );
}

export default LogBook;
