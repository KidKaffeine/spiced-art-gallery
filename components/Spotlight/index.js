import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import styles from './Spotlight.module.css'

export default function Spotlight({ pieces }) {
 
  let rand = Math.floor(Math.random() * pieces.length);
  let randomPiece = pieces[rand];

  return (
    <>
    <div className={styles.containerRandom}>
      <h3 role="header" className={styles.homepageHeader}>{randomPiece.artist}</h3>
      <Image
        role="image"
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={300}
        height={300}
      />
      <FavoriteButton/>
      </div>
    </>
  );
}
