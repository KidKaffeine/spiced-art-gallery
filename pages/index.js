import Navbar from "../components/NavBar";
import Spotlight from "../components/Spotlight";

export default function HomePage(props) {
  return (
    <>
      <Spotlight {...props} />
      <Navbar />
    </>
  );
}
