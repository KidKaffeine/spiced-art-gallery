import CommentForm from "../components/CommentForm";
import Navbar from "../components/NavBar";

export default function Favorite(props) {
  return (
    <>
      <CommentForm {...props} />
      <Navbar />
    </>
  );
}
