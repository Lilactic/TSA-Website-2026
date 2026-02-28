import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SearchBar from '../../components/searchBar'
import MiniCalendar from '../../components/miniCalendar'
import FAQ from '../../components/faq'
import BentoBoard from '../../components/bentoBoard'
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
            <div className={styles.projectGrid}>
              <div className={styles.projectCard}>
                <img 
                  src={hopeVillage}
                  alt="Hope Village"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Hope Village</h2>
                  <Link className={styles.link} to="/resources" style={{textDecoration: "none"}}>
                    <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                  </Link>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Nonprofit</h3>
                  <h3 className={styles.cardTag}>Care</h3>
                  <h3 className={styles.cardTag}>Support</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={galvestonFoodBank}
                  alt="Galveston Food Bank"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Galveston Food Bank</h2>
                  <Link className={styles.link} to="/resources" style={{textDecoration: "none"}}>
                    <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                  </Link>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Volunteer</h3>
                  <h3 className={styles.cardTag}>Nonprofit</h3>
                  <h3 className={styles.cardTag}>Service</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={shepherdsNook}
                  alt="The Shepherd's Nook"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>The Shepherd's Nook</h2>
                  <Link className={styles.link} to="/resources" style={{textDecoration: "none"}}>
                    <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                  </Link>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Donation</h3>
                  <h3 className={styles.cardTag}>Volunteer</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>

              <div className={styles.projectCard}>
                <img 
                  src={stevensonPark}
                  alt="Stevenson Park"
                  className={styles.cardImage}
                />
                <div className={styles.cardHeaderGrid}>
                  <h2 className={styles.cardHeader}>Stevenson Park</h2>
                  <Link className={styles.link} to="/resources" style={{textDecoration: "none"}}>
                    <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                  </Link>
                </div>
                <div className={styles.cardTagGrid}>
                  <h3 className={styles.cardTag}>Fitness</h3>
                  <h3 className={styles.cardTag}>Leisure</h3>
                  <h3 className={styles.cardTag}>Family</h3>
                </div>
              </div>
            </div>
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
                      <h3 className={styles.eventMonth}>Feb</h3>
                      <h3 className={styles.eventDay}>21</h3>
                    </div>
                    <div className={styles.eventDescContainer}>
                      <h3 className={styles.eventCardHeader}>Daddy Daughter Dance</h3>
                      <p className={styles.eventCardDesc}> This special evening includes dinner, dessert, dancing, and lots of boogying—all wrapped up in a night to remember. </p>
                    </div>
                  </div>
                </div>

                <div className={styles.eventCard}>
                  <div className={styles.dateContainer}>
                    <h3 className={styles.eventMonth}>Mar</h3>
                    <h3 className={styles.eventDay}>9</h3>
                  </div>
                  <div className={styles.eventDescContainer}>
                    <h3 className={styles.eventCardHeader}>Friendswood Fish Camp</h3>
                    <p className={styles.eventCardDesc}> Children and their families will be introduced to the basics of fishing, all while catching fish throughout! </p>
                  </div>
                </div>

                <div className={styles.eventCard}>
                  <div className={styles.dateContainer}>
                    <h3 className={styles.eventMonth}>Apr</h3>
                    <h3 className={styles.eventDay}>11</h3>
                  </div>
                  <div className={styles.eventDescContainer}>
                    <h3 className={styles.eventCardHeader}>Spring Sparkle</h3>
                    <p className={styles.eventCardDesc}> Join Keep Friendswood Beautiful on April 11, 2026, for the semi-annual community-wide cleanup! </p>
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
