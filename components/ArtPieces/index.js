import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/index"

export default function ArtPieces( {pieces}) {

  return (
    <div>
      <ul>
        {pieces.map((element) => (
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
            <FavoriteButton />
            <small role="small">{element.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
