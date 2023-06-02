import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "../components/Layout ";
import useSWR from "swr";
import { useState } from "react";
import { useImmer } from "use-immer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  if (!data) return <div> No data</div>;
  if (error) return <div> Error</div>;
  if (isLoading) return <div> Is loading</div>;

  // function handleFavorite(id) {
  //   const addedArray = data.filter((piece) => piece.slug === id)[0];
  //   if (isFavorite.includes(addedArray)) {
  //     setIsFavorite(isFavorite.filter((piece) => piece !== addedArray));
  //   } else {
  //     setIsFavorite((isFavorite) => [...isFavorite, addedArray]);
  //   }
  // }

  // function handleFavorite(slug) {
  //   const addedArray = data.filter((piece) => piece.slug === slug)[0];
  //   if (addedArray.isFav == true) {
  //     setIsFavorite(
  //       data.map((piece) =>
  //         piece.slug === slug
  //           ? {
  //               ...piece,
  //               isFav: false,
  //             }
  //           : piece
  //       )
  //     );
  //   } else {
  //     setIsFavorite(
  //       data.map((piece) =>
  //         piece.slug === slug
  //           ? {
  //               ...piece,
  //               isFav: true,
  //             }
  //           : piece
  //       )
  //     );
  //   }
  // }

  // handleFavorite((draft) => {
  //   const piece = draft.find((piece) => piece.slug === slug);
  //   piece.isFavorite = !isFavorite;
  // });

  function handleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const piece = artPiecesInfo.filter((piece) => piece.slug === slug)[0];
      if (piece) {
        return artPiecesInfo.map((piece) => {
          return piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece;
        });
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  function handleComments(slug, comment) {
    setArtPiecesInfo((artPiecesInfo) => {
      const piece = artPiecesInfo.filter((piece) => piece.slug === slug)[0];
      if (piece) {
        piece.comments.push(comment);
      }
      return [...artPiecesInfo, { slug, comments: [comment] }];
    });
  }
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <Component
            {...pageProps}
            pieces={data}
            artPiecesInfo={artPiecesInfo}
            handleFavorite={handleFavorite}
            handleComments={handleComments}
          />
        </SWRConfig>
      </Layout>
    </>
  );
}
