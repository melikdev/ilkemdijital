import Head from 'next/head'
import styles from '../../styles/Iletisim.module.css'

const Iletisim = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>İlkem Dijital - İletişim</title>
      </Head>
      <div className={styles.form}>
        <p>Sormuş olduğunuz ürünün fiyat bilgisi, sistemimizde kullandığınız e-mail üzerinden tarafınıza bildirilecektir.</p>
        <label>Adınız: </label>
        <input type="text" />
        <label>Soyadınız: </label>
        <input type="text" />
        <label>E-mail Adresiniz: </label>
        <input type="email" />
        <label>Mesajınız:</label>
        <textarea cols="40" rows="7"></textarea>
        <button>Gönder</button>
      </div>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12509.830057729945!2d27.1835071!3d38.3846693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x761c4c825b040eae!2s%C4%B0lkem%20Fotokopi%20%26%20Dijital%20Bask%C4%B1!5e0!3m2!1str!2str!4v1662588961957!5m2!1str!2str" width="600" height="450" style={{border: "none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Iletisim