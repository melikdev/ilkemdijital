import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
        <Head>
          <link rel="icon" href="/ilkem-logo.png" />
        </Head>
        <Navbar />
        {children}
        {/* <Footer /> */}
    </div>
  )
}

export default Layout