function CustomButton({ text, onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick(e);
      }}
      className={`custom-button`}
    >
      {text}
    </div>
  );
}

export default CustomButton;
