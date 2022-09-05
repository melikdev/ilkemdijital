import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/logo.png" height={50} width={200} />
          </a>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <a>Ana Sayfa</a>
        </Link>
        <Link href="/urunlerimiz">
          <a>Ürünlerimiz</a>
        </Link>
        <Link href="/makine_parkuru">
          <a>Makine Parkuru</a>
        </Link>
        <Link href="/hakkimizda">
          <a>Hakkımızda</a>
        </Link>
        <Link href="/iletisim">
          <a>İletişim</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar