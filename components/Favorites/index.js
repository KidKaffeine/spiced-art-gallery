import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Favorites({ handleFavorite, artPiecesInfo, pieces }) {
  console.log(artPiecesInfo);

  const slugs = artPiecesInfo.map((value) => value.slug);

  return (
    <div>
      <ul>
        {pieces
          .filter((piece) => slugs.includes(piece.slug))
          .map((element) => (
            <li key={element.slug} role="list">
              <h3 role="heading">{element.artist}</h3>
              <Link href={`/pieces/${element.slug}`}>
                <Image
                  src={element.imageSource}
                  alt={element.name}
                  width={300}
                  height={150}
                  role="image"
                />
              </Link>
              <FavoriteButton
                handleFavorite={handleFavorite}
                artPiecesInfo={artPiecesInfo}
                id={element.slug}
              />
              <small role="small">{element.name}</small>
            </li>
          ))}
      </ul>
    </div>
  );
}
