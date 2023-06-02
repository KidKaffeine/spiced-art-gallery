import CommentForm from "../CommentForm";

export default function Comment({ slug, artPiecesInfo, handleComments }) {
  const commented = artPiecesInfo.filter((piece) => piece.slug === slug)[0];
  if (!commented) {
    return (
      <div>
        <CommentForm slug={slug} handleComments={handleComments} />
      </div>
    );
  }
  return (
    <div>
      {commented["comments"].map((item) => (
        <li key={commented.slug}>{item}</li>
      ))}
      <CommentForm slug={slug} handleComments={handleComments} />
    </div>
  );
}
