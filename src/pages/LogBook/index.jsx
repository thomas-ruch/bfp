import imageBanner from "../../assets/banners/biblio.webp";
import LogCard from "../../components/LogCard";
import CustomButton from "../../components/CustomButton";
import Banner from "../../components/Banner";
import Filter from "../../components/Filter";
import logbook from "../../datas/logbook.json";
import { useState } from "react";

function LogBook() {
  const [visibleLogs, setVisibleLogs] = useState(5);
  const [selectedTag, setSelectedTag] = useState("Tous");
  const [selectedYear, setSelectedYear] = useState("Toutes");

  const filteredLogs = logbook.filter((log) => {
  const matchesTag =
    selectedTag === "Tous" ||
    log.tags.includes(selectedTag);

  const matchesYear =
    selectedYear === "Toutes" ||
    log.publicationDate.slice(0, 4) === selectedYear;

  return matchesTag && matchesYear;
});

  return (
    <div className="logbook-main">
      <Banner urlImage={imageBanner}>Le journal</Banner>
      <div className="logbook-filters">
        <span className="filters">
          <span className="title-filters">Filtres par étiquettes</span>
          {["Tous",
          ...logbook
            .map((log) => log.tags)
            .flat()
            .filter((tag, index, tab) => tab.indexOf(tag) === index)
            .sort()
          ].map((tag) => (
              <Filter
                key = {tag}
                active = {selectedTag === tag}
                onClick = {() => {
                  setSelectedTag(tag);
                  setVisibleLogs(5);
                }}
              >
                {tag}
              </Filter>
            ))
          }
        </span>
        <span className="filters">
          <span className="title-filters">Filtres par années</span>
          {["Toutes",
          ...logbook
            .map((log) => log.publicationDate.slice(0, 4))
            .filter((date, index, tab) => tab.indexOf(date) === index)
            .sort()
          ].map((date) => (
              <Filter
                key = {date}
                active = {selectedYear === date} 
                onClick = {() => {
                  setSelectedYear(date);
                  setVisibleLogs(5);
                }}
              >
                {date}
              </Filter>
            ))
          }
        </span>
      </div>
      <ul className="logbook-cards">
        {filteredLogs
          .slice(0, visibleLogs)
          .map(({ id, title, publicationDate, urlImage, alt, tags }) => (
            <LogCard
              key={id}
              id={id}
              title={title}
              date={publicationDate}
              urlImage={urlImage}
              alt={alt}
              tags={tags}
            />
          ))}
      </ul>
      {filteredLogs.length > visibleLogs && (
        <CustomButton onClick={() => setVisibleLogs((prev) => prev + 5)}>
          Afficher plus
        </CustomButton>
      )}{" "}
    </div>
  );
}

export default LogBook;
