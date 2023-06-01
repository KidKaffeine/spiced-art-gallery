import Navbar from "../components/NavBar";
import Spotlight from '../components/Spotlight'

export default function HomePage({pieces}) {

  return (
<>
  <Spotlight pieces={pieces}/>
    <Navbar/>
 </>
  );
}

