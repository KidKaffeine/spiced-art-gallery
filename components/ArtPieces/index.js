import Image from 'next/image';
import Link from 'next/link';

export default function ArtPieces ( { pieces } ) {

return <>
        {/* <ul>
            {pieces.map((piece) => (
                <li key={piece.slug}>
                <h3>{piece.artist}</h3>
                <Link href={`/pieces/${piece.slug}`}>
                <Image src={piece.imageSource} alt={piece.name} width={300} height={150}/>    
                <small>{piece.name}</small>
                </Link>
        </li>   
    ))} 
</ul> */}
</>
}