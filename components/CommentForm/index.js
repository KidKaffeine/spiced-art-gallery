import styles from './CommentForm.module.css'

export default function CommentForm({ slug, handleComments }) {
  function handleFormSubmit(event) {
    console.log(slug)
    event.preventDefault();
    const input = new FormData(event.target);
    const data = Object.fromEntries(input);
    handleComments(slug, data.comment);
    event.target.reset();
    event.target.elements.comment.focus();
  }

  return (
    <div className={styles.formContainer}>
      <h1>Comments</h1>
      <form onSubmit={handleFormSubmit} className={styles.formInput} >
        <input type="text" name="comment" id="comment"  className={styles.textArea} />
        <button type="submit" className={styles.formButton} >Submit Comment</button>
      </form>
    </div>
  );
}
