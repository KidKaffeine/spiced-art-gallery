import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ArtPieces() {

  const URL = `https://example-apis.vercel.app/api/art`;
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = useSWR(slug ? URL : null, fetcher);


  if (!data) return null;
  if (error) return <div> Error</div>;
  if (isLoading) return <div> Loading data</div>;
  
  const piece = data.filter((e) => e.slug === slug)[0];
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