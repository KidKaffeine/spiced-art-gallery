import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            fontSize: 20,
            color: "white",
          }}
        >
          {" "}
          Homepage{" "}
        </Link>
        <Link
          href="/pieces"
          style={{
            textDecoration: "none",
            fontSize: 20,
            color: "white",
          }}
        >
          {" "}
          Art Pieces{" "}
        </Link>
        <Link
          href="/favorites"
          style={{
            textDecoration: "none",
            fontSize: 20,
            color: "white",
          }}
        >
          {" "}
          Favorites{" "}
        </Link>
      </div>
    </>
  );
}
