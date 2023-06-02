import ArtPieces from '/components/ArtPieces/index.js'
import Navbar from '/components/NavBar/index.js'

export default function Pieces (props) {
    return   <>
         <ArtPieces {...props} />
         <Navbar />
        </>
}   