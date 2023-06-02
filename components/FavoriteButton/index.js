import styles from './FavoriteButton.module.css';

export default function FavoriteButton({ artPiecesInfo, handleFavorite, id }) {

console.log("data", artPiecesInfo, "id:", id)

  return (
    <button
      type="button"
      onClick={() => {
        handleFavorite(id);
      }}
      className={styles.favoriteButton}
    >
      {artPiecesInfo ? "YES" : "NO"}
    </button>
  );
}
