import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SearchBar from '../../components/searchBar'
import '../../global.css'
import styles from './Resources.module.css'

import heroBG from '../../assets/images/heroBG2.png'
import stevensonPark from '../../assets/images/stevensonPark.webp'
import foodBank from '../../assets/images/foodbank.webp'

import { CarFront, CircleParking, FerrisWheel, LocateFixed, MapPin, Trees, WavesLadder } from 'lucide-react'
import ResourcesSearchItem from '../../components/resourcesSearchItem'

function Resources() {
  return (
    <>
      <body>
        <Navbar />
        
        <main className={styles.main}>
          <section className={styles.hero}>
            <div 
              className={styles.heroBG}
            />

            <div className={styles.content}>
              <h1 className={styles.title}>Community Resources</h1>
              <h2 className={`interSubtitle ${styles.subtitle}`}>Search for local community resources and organizations.</h2>
            </div>
          </section>

          <section className={styles.searchHeader}>
            <div className={styles.searchBox}>
              <SearchBar />
            </div>
          </section>

          <section className={styles.resourceList}>
            <div className={styles.itemGrid}>

              <ResourcesSearchItem 
                title={'Friendswood Library'} 
                description={"The friendswood community library, media, and event center."} 
                mapUrl = {"https://www.friendswood.lib.tx.us/about-us/"}
                imageUrl={stevensonPark} 
                topics={["local", "children", "education", "computer", "events"]}
              />

              <ResourcesSearchItem 
                title={'Stevenson Park'} 
                description={"Friendswood's central park, featuring paths, a playground, swimming pools, and events."} 
                mapUrl = {"https://www.ci.friendswood.tx.us/529/Stevenson-Park"}
                imageUrl={stevensonPark} 
                topics={["local", "park", "swimming", "sports"]}
              />

              <ResourcesSearchItem 
                title={'Centennial Park'} 
                description={"A local park featuring trails, a basketball court, and many playing fields."} 
                mapUrl = {"https://www.ci.friendswood.tx.us/261/Dog-Park"}
                imageUrl={stevensonPark} 
                topics={["local", "park", "sports"]}
              />

              <ResourcesSearchItem 
                title={'Friendswood Dog Park'} 
                description={"Friendswood's primary safe place for our canine friends to play."} 
                mapUrl = {"https://www.ci.friendswood.tx.us/480/Centennial-Park"}
                imageUrl={stevensonPark} 
                topics={["local", "park", "pets"]}
              />

              <ResourcesSearchItem 
                title={'C.S.S. Sportspark'} 
                description={"Formally named the Corporal Steven Schulz Sportspark."} 
                mapUrl = {"https://www.ci.friendswood.tx.us/481/Sportspark"}
                imageUrl={stevensonPark} 
                topics={["local", "park", "sports", "children"]}
              />

              <ResourcesSearchItem
                title={'L.P.J. Hangar'} 
                description={"Formally named the Leavesley Park Jones Hangar, an event center and playground."} 
                mapUrl = {"https://www.ci.friendswood.tx.us/526/Leavesley-Park-Jones-Hangar"}
                imageUrl={stevensonPark} 
                topics={["local", "events", "children"]}
              />

              <ResourcesSearchItem 
                title={'Renwick Sports Complex'} 
                description={"19 acres of baseball and multi-purpose fields."} 
                mapUrl = {"https://www.ci.friendswood.tx.us/528/Renwick-Sports-Complex"}
                imageUrl={stevensonPark} 
                topics={["local", "sports", "children"]}
              />

              <ResourcesSearchItem 
                title={'Lance Corporal W.J.C. Park'} 
                description={"Formally known as Lance Corporal Wesley J. Canning Park."} 
                mapUrl = {"https://www.ci.friendswood.tx.us/791/Lance-Corporal-Wesley-J-Canning-Park"}
                imageUrl={stevensonPark} 
                topics={["local", "park"]}
              />

              <ResourcesSearchItem 
                title={'1776 Memorial Park'} 
                description={"Features trails, ideal for wildlife viewing."} 
                mapUrl = {"https://www.ci.friendswood.tx.us/792/1776-Memorial-Park"}
                imageUrl={stevensonPark} 
                topics={["local", "park"]}
              />

              <ResourcesSearchItem 
                title={'Mary Queen Food Pantry'} 
                description={"Mary Queen Catholic Church's food distribution center."} 
                mapUrl = {"https://www.maryqueencatholicchurch.org/food-pantry"}
                imageUrl={stevensonPark} 
                topics={["local", "food_support", "religion"]}
              />

              <ResourcesSearchItem 
                title={'Galveston Food Bank'} 
                description={'Provides easy access to nutritional food for the economically disadvantaged.'} 
                mapUrl = {"https://www.galvestoncountyfoodbank.org/"}
                imageUrl={stevensonPark} 
                topics={["local", "food_support"]}
              />

              <ResourcesSearchItem 
                title={'Hope Village'} 
                description={'A loving home for people with intellectual and cognitive disabilities.'} 
                mapUrl = {"https://hope-village.com/"}
                imageUrl={stevensonPark} 
                topics={["local", "disability_care"]}
              />

              <ResourcesSearchItem 
                title={'Forgotten Angels'} 
                description={'A Christ-centered non-profit transforming the lives of people living with disabilities.'} 
                mapUrl = {"https://forgottenangels.org/"}
                imageUrl={stevensonPark} 
                topics={["local", "disability_care", "religion"]}
              />

              <ResourcesSearchItem 
                title={'A Treasure of Dreams'} 
                description={'Specialized, individualized care for those with intellectual and developmental disabilities.'} 
                mapUrl = {"https://atreasureofdreams.org/"}
                imageUrl={stevensonPark} 
                topics={["local", "disability_care", "religion"]}
              />

              <ResourcesSearchItem 
                title={'Agape Centric'} 
                description={'Assisting local families in need of food, clothing, toiletries, school supplies, and inspiration.'} 
                mapUrl = {"https://www.agapecentric.org/"}
                imageUrl={stevensonPark} 
                topics={["local", "food_support", "material_support"]}
              />

              <ResourcesSearchItem 
                title={'Anchor Point'} 
                description={'Champions the future of children by educating and empowering parents.'} 
                mapUrl = {"https://anchorpoint.us/"}
                imageUrl={stevensonPark} 
                topics={["children", "prenatal_perinatal", "education"]}
              />

              <ResourcesSearchItem 
                title={'Atrium Foundation'} 
                description={'The Atrium Foundation provides support for patients in cancer diagnosis-related financial crisis.'} 
                mapUrl = {"https://www.atriumfoundation.org/"}
                imageUrl={stevensonPark} 
                topics={["local", "medical_care", "financial_support"]}
              />

              <ResourcesSearchItem 
                title={'Plus3ForCyberSafety'} 
                description={'Equipping Communities to Combat Cyberbullying.'} 
                mapUrl = {"https://plus3forcybersafety.org/"}
                imageUrl={stevensonPark} 
                topics={["children", "education", "computer"]}
              />

              <ResourcesSearchItem 
                title={'Inspira Resource Center'} 
                description={'Prenatal/perinatal care services in Friendswood.'} 
                mapUrl = {"https://inspiraresourcecenter.com/"}
                imageUrl={stevensonPark} 
                topics={["local", "prenatal_perinatal", "medical_care", "education"]}
              />

              <ResourcesSearchItem 
                title={'Three Little Pitties Rescue'} 
                description={'Committed to rescuing dogs and cats in need.'} 
                mapUrl = {"https://www.threelittlepittiesrescue.org/"}
                imageUrl={stevensonPark} 
                topics={["local", "pets"]}
              />

              <ResourcesSearchItem 
                title={'The Birthday Joy Program'} 
                description={'We offer birthday assistance to families and throw birthday parties in local shelters.'} 
                mapUrl = {"https://thebirthdayjoyprogram.com/"}
                imageUrl={stevensonPark} 
                topics={["children", "material_support"]}
              />

              <ResourcesSearchItem 
                title={'Innovative Alternatives'} 
                description={'We strive to make mental wellness available for everyone.'} 
                mapUrl = {"https://www.innovativealternatives.org/"}
                imageUrl={stevensonPark} 
                topics={["medical_care"]}
              />

              <ResourcesSearchItem 
                title={'BACODA'} 
                description={'Bay Area Council on Drugs and Alcohol. Mental health / recovery assistance.'} 
                mapUrl = {"https://www.bacoda.org/"}
                imageUrl={stevensonPark} 
                topics={["addiction", "medical_care", "education"]}
              />

            </div>
          </section>

        </main>

        <Footer />
      </body>
    </>
  )
}

export default Resources;
