import { useParams, Navigate } from "react-router-dom";
import logBook from "../../datas/logbook.json";
import TextCard from "../../components/TextCard";
import CustomButton from "../../components/CustomButton";

function Log() {
  const { logId } = useParams();
  const ids = logBook.map((elem) => elem.id);

  if (ids.includes(logId)) {
    const log = logBook.find((elem) => elem.id === logId);

    return (
      <div id="log-main">
        <TextCard
          title={log.title}
          date={log.logDate}
          urlImage={log.urlImage}
          content={log.content}
        />
        <CustomButton to="/logBook/">Retour aux chroniques</CustomButton>
      </div>
    );
  } else {
    return <Navigate to="/error" />;
  }
}

export default Log;
