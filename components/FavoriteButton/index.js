export default function FavoriteButton({ isFavorite, handleFavorite, id }) {
  return (
    <button
      type="button"
      onClick={() => {
        handleFavorite(id);
      }}
    >
      {isFavorite ? "YES" : "NO"}
    </button>
  );
}
