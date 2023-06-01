import Link from "next/link"

export default function Navbar () {
return <>
<ul>
<li>
 <Link href="/"> Homepage </Link>
</li>
<li>
 <Link href="/pieces"> Art Pieces </Link>
</li>
<li>
 <Link href="/favorites"> Favorites </Link>
</li>
</ul>
    </>
}