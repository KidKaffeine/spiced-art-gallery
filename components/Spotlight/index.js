import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import { StyledHeader, StyledDiv } from "./Spotlight.styled";

export default function Spotlight({ pieces }) {
 
  let rand = Math.floor(Math.random() * pieces.length);
  let randomPiece = pieces[rand];

  return (
    <>
  <StyledDiv>
    <StyledHeader>
      <h3 role="header">{randomPiece.artist}</h3>
      </StyledHeader>
      <Image
        role="image"
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={300}
        height={300}
      />
      <FavoriteButton/>
      </StyledDiv>
    </>
  );
}
