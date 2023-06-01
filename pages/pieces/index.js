import ArtPieces from '/components/ArtPieces/index.js'
import Navbar from '/components/NavBar/index.js'


export default function Pieces ({pieces}) {


    return   <>
         <h1>Art Gallery</h1>
         <ArtPieces pieces={pieces} />
         <Navbar />
        </>
}   