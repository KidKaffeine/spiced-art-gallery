export default function CommentForm({ slug, handleComments }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const input = new FormData(event.target);
    const data = Object.fromEntries(input);
    handleComments(slug, data.comment);
    event.target.reset();
    event.target.elements.comment.focus();
  }

  return (
    <div>
      <h1>Comments</h1>
      <form onSubmit={handleFormSubmit}>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}
