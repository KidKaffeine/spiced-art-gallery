import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../../components/FavoriteButton";
import Comment from "../../components/Comment";
import Link from "next/link";
import styles from '../../components/ArtPieces/ArtPieces.module.css'

export default function ArtPieces({
  pieces,
  handleComments,
  handleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.filter((e) => e.slug === slug)[0];

  return (
    <div className={styles.singlePieceContainer}>
      <h1 className={styles.pieceHeader}>{piece.artist}</h1>
      <div className={styles.singlePieceImage}>
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={300}
        height={150}
      />
      </div>
      <small>{piece.name}</small>
      <small>{piece.genre}</small>
      <small>{piece.year}</small>
      <FavoriteButton
        handleFavorite={handleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      <Link href="/comment" style={{
        textDecoration: 'none',
        color: 'black',
      }} >Add new comment
      </Link>
      <Link href="/" style={{
        textDecoration: 'none',
        color: 'black',
      }}>Back
      </Link>
      <Comment slug={slug} artPiecesInfo={artPiecesInfo} handleComments={handleComments} />
    </div>
  );
}
