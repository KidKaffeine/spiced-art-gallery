import styles from "./FavoriteButton.module.css";


export default function FavoriteButton({
  artPiecesInfo,
  handleFavorite,
  slug,
}) {
  
  return (
    <button
      type="button"
      onClick={() => {
        handleFavorite(slug);
      }}
      className={styles.favoriteButton}
    >
      {artPiecesInfo ? "Unsave" : "Save"}
    </button>
  );
}
