import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Spotlight({ image, artist }) {
  const URL = `https://example-apis.vercel.app/api/art`;

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>error</div>;
  if (isLoading) return <div>Loading Page...</div>;

  let rand = Math.floor(Math.random() * data.length);
  let randomPiece = data[rand];

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
    </>
  );
}
