import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import styles from './Favorites.module.css'

export default function Favorites({ handleFavorite, artPiecesInfo, pieces }) {
  const slugs = artPiecesInfo.map((value) => value.slug);
  console.log(pieces)
   return (
      <div className={styles.favoritesContainer}>
        <h1 className={styles.favoritesHeader}>Favorites</h1>
        <ul className={styles.favoritesUnorderedList}>
          {pieces
            .filter((piece) => slugs.includes(piece.slug))
            .map((element) => (
              <li key={element.slug} role="list" className={styles.favoritesListItem}>
                <h3 role="heading">{element.artist}</h3>
                <Link href={`/pieces/${element.slug}`}>
                  <div className={styles.favoritesImageContainer}>
                  <Image
                    src={element.imageSource}
                    alt={element.name}
                    width={300}
                    height={150}
                    role="image"
                  />
                  </div>
                </Link>
                <FavoriteButton
                  handleFavorite={handleFavorite}
                  artPiecesInfo={artPiecesInfo}
                  id={element.slug}
                />
                <small role="small">{element.name}</small>
               <small>{element.year}</small>
              </li>
            ))}
        </ul>
      </div>
    ); 
}
