import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>İlkem Dijital - Ana Sayfa</title>
        <meta name="description" content="ilkem fotokopi, dijital baskı, kartvizit, broşür, branda, folyo, etiket, bilet, pvc, kitap, baskı" />
        <link crossOrigin rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link crossOrigin rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link crossOrigin href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className={styles.main}></div> 
    </div>
  )
}
