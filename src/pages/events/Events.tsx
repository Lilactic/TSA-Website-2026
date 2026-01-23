import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import '../../global.css'
import styles from './Events.module.css'
import Calendar from '../../components/calendar'
import heroBG from '../../assets/images/heroBG2.png'

function Events() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.hero}>
            <div 
              className={styles.heroBG}
            />

            <div className={styles.content}>
              <h1 className={styles.title}>Upcoming Events</h1>
              <h2 className={`interSubtitle ${styles.subtitle}`}>Find community events near you!</h2>
            </div>
          </section>
        < Calendar />
      </main>

      <Footer />
    </>
  )
}

export default Events;
