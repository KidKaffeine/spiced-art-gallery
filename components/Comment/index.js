import CommentForm from "../CommentForm";
import styles from '../CommentForm/CommentForm.module.css'


export default function Comment({ slug, artPiecesInfo, handleComments }) {

  const date = new Date()
  const day = date.getDay()
  const month = date.getMonth();
  const updatedMonth = month +1; 
  const year = date.getFullYear()
  const fullDate = `${day}/${updatedMonth}/${year}`

  const commented = artPiecesInfo.filter((piece) => piece.slug === slug)[0];

  if (!commented) {
    return (
      <div>
        <CommentForm slug={slug} handleComments={handleComments} />
      </div>
    );
  }
  return (
    <div >
      <ul className={styles.formUnorderedList}>
      {commented["comments"].map((item) => (
        <li key={commented.slug} className={styles.formListItem}>{item} {" "} {fullDate} </li>
      ))}
    </ul>
      <CommentForm slug={slug} handleComments={handleComments} />
    </div>
  );
}
