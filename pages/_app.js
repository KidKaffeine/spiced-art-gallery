import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "../components/Layout ";
import useSWR from "swr";
import { useState } from "react";



const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  const [isFavorite, setIsFavorite] = useState([]);

  if (!data) return <div> No data</div>;
  if (error) return <div> Error</div>;
  if (isLoading) return <div> Is loading</div>;

  function handleFavorite(id) {
    let addedArray = data.filter((piece) => piece.slug === id)[0];
    setIsFavorite(isFavorite.push(addedArray));
    console.log(isFavorite);
  }


  return (
    <>
      <GlobalStyle />
      <Layout >
      <SWRConfig value={{
        fetcher, 
        refreshInterval: 1000,
      }}>
          <Component
            {...pageProps}
            pieces={data}
            isFavorite={isFavorite}
            handleFavorite={handleFavorite}
          />
        </SWRConfig>
      </Layout>
    </>
  );
}
