import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ArtPieces ( { pieces } ) {
    const URL = `https://example-apis.vercel.app/api/art`

    const { data, error, isLoading } = useSWR(URL, fetcher)

    if(!data) return <div> No data</div>
    if(error) return <div> Error</div>
    if(isLoading) return <div> Loading data</div>
return <div> 
        <ul>
            {data.map((piece) => (
                <li key={piece.slug}>
                <h3>{piece.artist}</h3>
                <Link href={`/pieces/${piece.slug}`}>
                <Image src={piece.imageSource} alt={piece.name} width={300} height={150}/>    
                <small>{piece.name}</small>
                </Link>
        </li>   
    ))} 
</ul>
</div>
}