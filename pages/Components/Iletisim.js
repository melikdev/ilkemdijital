import styles from '../../styles/Iletisim.module.css'

const Iletisim = () => {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Iletisim