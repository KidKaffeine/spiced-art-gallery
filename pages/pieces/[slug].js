import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../../components/FavoriteButton";

export default function ArtPieces({ pieces, handleFavorite, isFavorite }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.filter((e) => e.slug === slug)[0];
  return (
    <div>
      <h3>{piece.artist}</h3>
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={300}
        height={150}
      />
      <small>{piece.name}</small>
      <small>{piece.genre}</small>
      <small>{piece.year}</small>
      <FavoriteButton handleFavorite={handleFavorite} isFavorite={isFavorite} />
    </div>
  );
}
