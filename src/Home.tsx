import Footer from './components/footer'
import Navbar from './components/navbar'
import './global.css'
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <body>
        <Navbar />
        
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.content}>

              <h1 className={styles.title}>F<span className={styles.titleKerning}>r</span>iend<span className={styles.titleKerning2}>s</span>wood, TX</h1>
              <h2 className={`interSubtitle ${styles.subtitle}`}>Community Resource Hub</h2>
              <div className={styles.searchBar}>

              </div>

            </div>
          </section>
          
          <section className={styles.description}>
          </section>
        </main>

        <Footer />
      </body>
    </>
  )
}

export default Home
