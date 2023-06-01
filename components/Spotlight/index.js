import useSWR from "swr";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";


export default function Spotlight({ pieces }) {
 
  let rand = Math.floor(Math.random() * pieces.length);
  let randomPiece = pieces[rand];

  return (
    <>
      <h3 role="header">{randomPiece.artist}</h3>
      <Image
        role="image"
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={300}
        height={150}
      />
      <FavoriteButton/>
    </>
  );
}
