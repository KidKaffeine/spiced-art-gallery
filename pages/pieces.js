import ArtPieces from '../components/ArtPieces/index.js'
import {useRouter} from 'next/router.js';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Pieces () {

    const router = useRouter()

    const { slug } = router.query

    const URL = `https://example-apis.vercel.app/api/art`

    const { data, error, isLoading } = useSWR(URL, fetcher)

    if(!data) return <div> No data</div>
    if(error) return <div> Error</div>
    if(isLoading) return <div> Loading data</div>

    const piece = data.filter((element) => { element.slug === slug})
    if (!piece) return null

    console.log(data)
    console.log(slug)
    console.log(piece)


    return   <>
         <h1>Art Gallery</h1>
         <ArtPieces pieces={data} />
        </>
}   