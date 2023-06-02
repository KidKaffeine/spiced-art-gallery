import styles from './FavoriteButton.module.css';

export default function FavoriteButton({ isFavorite, handleFavorite, id }) {
  return (
    <button
      type="button"
      onClick={() => {
        handleFavorite(id);
      }}
      className={styles.favoriteButton}
    >
      {isFavorite ? "YES" : "NO"}
    </button>
  );
}
