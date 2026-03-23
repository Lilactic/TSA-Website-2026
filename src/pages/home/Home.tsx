import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SearchBar from '../../components/searchBar'
import MiniCalendar from '../../components/miniCalendar'
import FAQ from '../../components/faq'
import BentoBoard from '../../components/bentoBoard'
import Slideshow from '../../components/slideshow'
import '../../global.css'
import hopeVillage from '../../assets/images/hopeVillage.jpg';
import stevensonPark from '../../assets/images/stevensonPark.jpg';
import galvestonFoodBank from '../../assets/images/galvestonFoodBank.jpg';
import shepherdsNook from '../../assets/images/shepherdsNook.jpg';
import wrench from '../../assets/images/wrench.png'
import styles from './Home.module.css'
import holdingHands from '../../assets/images/holdingHands.jpg'
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <>
        <Navbar />
        
        <main className={styles.main}>
          <section className={styles.hero}>
            <div 
              /*src={heroBG} 
              alt="Background Image"*/
              className={styles.heroBG}
            />

            <div className={styles.content}>
              <h1 className={styles.title}>F<span className={styles.titleKerning}>r</span>iend<span className={styles.titleKerning2}>s</span>wood, TX</h1>
              <h2 className={`interSubtitle ${styles.subtitle}`}>Community Resource Hub</h2>
                <SearchBar  initialQuery={""} 
                  onSearch={(q) => navigate(`/resources?q=${encodeURIComponent(q)}`)}
                  onChange={() => {}}/>
            </div>

            <div className={styles.importantInfo}>
              <div className={styles.phoneBox}>
                <Phone size={16} strokeWidth={2} fill='true' style={{flexShrink: "0"}} className={styles.phoneBoxLogo}/>
                <h3 className='interDescription'>For life-threatening or serious emergencies, call 911</h3>
              </div>
              <h3 style={{maxWidth: "600px", textAlign: "center"}} className='interDescription'>Note: This site is a demo. Resource information is for example purposes and may not be current or complete. Always confirm details directly with the organizations listed.</h3>
            </div>
          </section>

          
          <section className={styles.description}>
            <img 
              src={holdingHands} 
              alt="Houston Food Bank" 
              className={styles.foodBankImg} 
            />
            <h1 className={styles.descriptionText}>Here at Friendswood's Community Resource Hub, we are dedicated to providing our community with the resources and support needed to thrive.</h1>
          </section>

          <section className={styles.spotlight}>
            <h1 className={styles.spotlightTitle}>Community Spotlight</h1>
            <Slideshow />
          </section>

          <section className={styles.events}>
            <h2 className={styles.eventsHeader}>Upcoming Events</h2>
            <div className={styles.eventsContentContainer}>
              <div className={styles.calendarContainer}>
                < MiniCalendar />
              </div>

              <div className={styles.upcomingEventsContainer}>
                <div className={styles.eventCardGrid}>
                  <div className={styles.eventCard}>
                    <div className={styles.dateContainer}>
                      <h3 className={styles.eventMonth}>Apr</h3>
                      <h3 className={styles.eventDay}>11</h3>
                    </div>
                    <div className={styles.eventDescContainer}>
                      <h3 className={styles.eventCardHeader}>Spring Sparkle</h3>
                      <p className={styles.eventCardDesc}> Join Keep Friendswood Beautiful for the semi-annual community-wide cleanup! </p>
                    </div>
                  </div>
                </div>

                <div className={styles.eventCard}>
                  <div className={styles.dateContainer}>
                    <h3 className={styles.eventMonth}>May</h3>
                    <h3 className={styles.eventDay}>1</h3>
                  </div>
                  <div className={styles.eventDescContainer}>
                    <h3 className={styles.eventCardHeader}>Concert in the Park</h3>
                    <p className={styles.eventCardDesc}> Join us every Friday in May and June for live performances in the beloved Stevenson Park! There will be raffle prizes during intermission. </p>
                  </div>
                </div>

                <div className={styles.eventCard}>
                  <div className={styles.dateContainer}>
                    <h3 className={styles.eventMonth}>May</h3>
                    <h3 className={styles.eventDay}>2</h3>
                  </div>
                  <div className={styles.eventDescContainer}>
                    <h3 className={styles.eventCardHeader}>Youth Fishing Derby</h3>
                    <p className={styles.eventCardDesc}> Cast your line and reel in the fun, where over 600 pounds of adult catfish will be stocked in the Centennial Park Pond for participants to catch for FREE! </p>
                  </div>
                </div>
                
                <div className={styles.eventButtonContainer}>
                  <Link className={styles.link} to="/events"><h3 className={styles.eventsButton}>View all upcoming events <ArrowRight size={16} strokeWidth={2}/></h3></Link>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.bentoBoard}>
            <BentoBoard />
          </section>

          <section className={styles.faq}>
            <FAQ />
          </section>

          <section className={styles.callToAction}>
            <div className={styles.callToActionContainer}>
              <h1 className='interTitle'>Building our Community.<br />Together.</h1>
              <Link className={styles.link} to="/contact-us" style={{textDecoration: "none"}}>
                <button className={styles.callToActionButton}>Make a difference<ArrowRight size={24} strokeWidth={3} style={{marginLeft: "16px"}} className={styles.callToActionButtonIcon}/></button>
              </Link>
            </div>
            <img src={wrench} alt="Wrench" className={styles.callToActionImage} />
          </section>
        </main>
        <Footer />
    </>
  )
}

export default Home
