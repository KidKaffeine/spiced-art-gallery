import ArtPieces from '/components/ArtPieces/index.js'
import Navbar from '/components/NavBar/index.js'


export default function Pieces (props) {


    return   <>
         <h1>Art Gallery</h1>
         <ArtPieces {...props} />
         <Navbar />
        </>
}   