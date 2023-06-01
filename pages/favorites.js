import Favorites from "../components/Favorites";
import Navbar from "../components/NavBar";

export default function Favorite(props) {
  return (
    <>
      <Favorites {...props} />
      <Navbar />
    </>
  );
}

