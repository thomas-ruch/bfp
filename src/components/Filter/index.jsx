function Filter({ children, onClick, active }) {
  return (
    <button
      type="button"
      className={`filter ${active ? "filter--active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Filter;