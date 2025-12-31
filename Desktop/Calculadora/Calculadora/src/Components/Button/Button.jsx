import "../Button/Button.css";

export default function Button({ label, onClick, widthLarge }) {
  return (
    <button
      className={widthLarge ? "widthLarge" : "normalWidth"}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}
