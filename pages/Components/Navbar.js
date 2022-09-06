import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  const handleScroll = () => {
    alert('fuck off')
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link crossorigin="anonymous" href="/">
          <a>
            <Image crossOrigin src="/LOGO.png" height={60} width={220} alt="" />
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
        <div className={styles.divider}></div>
        <div className={styles.social}>
          <Link href="https://www.instagram.com/ilkemdijitalbaski/">
            <a target="_blank">
              <Image src="/instagram-logo.png" height={20} width={20} alt="" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar