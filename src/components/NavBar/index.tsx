import Link from "next/link";


export default function index() {
  return (
<nav>
    <Link href="/">Главная</Link>
    <Link href="/about">О школе</Link>
    {/* <Link href="/materials"></Link> */}
    <Link href="/contacts">Контакты</Link>
</nav>
  )
}
