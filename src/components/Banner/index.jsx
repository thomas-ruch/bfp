function Banner({ children, urlImage }) {
  return (
    <div className="banner">
      {urlImage && <img src={urlImage} alt="" />}
      <h1>{children}</h1>
    </div>
  );
}

export default Banner;
