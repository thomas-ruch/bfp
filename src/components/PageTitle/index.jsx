import Banner from "../Banner";

function PageTitle({ title, urlImage }) {
  return (
    <div className="page-title-wrapper">
      <Banner urlImage={urlImage}></Banner>
      <h1 className="page-title">{title}</h1>
    </div>
  );
}

export default PageTitle;
