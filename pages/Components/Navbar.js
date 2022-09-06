import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link crossorigin="anonymous" href="/">
          <a>
            <Image crossorigin="anonymous" src="/logo.png" height={60} width={220} alt="img" />
          </a>
        </Link>
      </div>
      <div className={styles.links}>
        <Link crossorigin="anonymous" href="/">
          <a>Ana Sayfa</a>
        </Link>
        <Link crossorigin="anonymous" href="/urunlerimiz">
          <a>Ürünlerimiz</a>
        </Link>
        <Link crossorigin="anonymous" href="/makine_parkuru">
          <a>Makine Parkuru</a>
        </Link>
        <Link crossorigin="anonymous" href="/hakkimizda">
          <a>Hakkımızda</a>
        </Link>
        <Link crossorigin="anonymous" href="/iletisim">
          <a>İletişim</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar