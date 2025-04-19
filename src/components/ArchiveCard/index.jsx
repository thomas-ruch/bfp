function ArchiveCard({ id, cover }) {
  return (
    <div className="archive-card">
      <img src={cover} alt={`${id} cover`} />
    </div>
  );
}

export default ArchiveCard;
