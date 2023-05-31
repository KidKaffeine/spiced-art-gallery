import useSWR from 'swr'
import Image from 'next/image';


const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function ArtPieces ( ) {
    const URL = `https://example-apis.vercel.app/api/art`

    const { data, error, isLoading } = useSWR(URL, fetcher)

    if(!data) return <div> No data</div>
    if(error) return <div> Error</div>
    if(isLoading) return <div> Loading data</div>


return <div> 
    <h1> Art Pieces </h1>
        <ul>
            {data.map((element) => (
                <li key={element.slug}>
                <h3>{element.artist}</h3>
                <Image src={element.imageSource} alt={element.name} width={300} height={150}/>
          <small>{element.name}</small>
        </li>   
    ))} 
</ul>
</div>
}