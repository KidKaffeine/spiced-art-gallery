import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Pieces () {

    const URL = `https://example-apis.vercel.app/api/art`

    const { data, error, isLoading } = useSWR(URL, fetcher)

    if(!data) return <div> No data</div>
    if(error) return <div> Error</div>
    if(isLoading) return <div> Loading data</div>


    return   <>

<h1>yo</h1>
        
        </>
}   