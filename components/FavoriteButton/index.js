export default function FavoriteButton({ artPiecesInfo, handleFavorite, id }) {
  return (
    <button
      type="button"
      onClick={() => {
        handleFavorite(id);
      }}
    >
      {artPiecesInfo ? "YES" : "NO"}
    </button>
  );
}
