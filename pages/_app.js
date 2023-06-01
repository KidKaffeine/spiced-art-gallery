import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {

  const URL = `https://example-apis.vercel.app/api/art/`

  const { data, error, isLoading } = useSWR(URL, fetcher)

  if(!data) return <div> No data</div>
  if(error) return <div> Error</div>
  if(isLoading) return <div> Loading data</div>

  console.log(data)

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{
        fetcher, 
        refreshInterval: 10000,
      }}>
      <Component {...pageProps} pieces={data}/>
      </SWRConfig>
    </>
  );
}
