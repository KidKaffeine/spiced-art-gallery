import Image from "next/image";

export default function ArtPieces( {pieces}) {

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
    </div>
  );
}