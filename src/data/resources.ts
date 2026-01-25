import type { Filters } from "../types/Resources"
import stevensonPark from '../assets/images/stevensonPark.jpg'
import library from '../assets/images/library.png'
import pitties1 from '../assets/images/pitties1.jpg'
import cyber2 from '../assets/images/cyber2.png'
import shepherdsNook from '../assets/images/shepherdsNook.jpg'
import centennial from '../assets/images/centennial.jpg'
import birthdayJoy from '../assets/images/birthdayJoy.jpg'
import innovative from '../assets/images/innovativeAlternatives.webp'
import anchorPoint from '../assets/images/anchorPoint.jpg'
import dogPark from '../assets/images/dogPark.jpg'
import hopeVillage from '../assets/images/hopeVillage.jpg'
import lpjHangar from '../assets/images/lpjHangar.jpg'
import memorialPark from '../assets/images/memorialPark.jpg'
import treasureOfDreams from '../assets/images/treasureOfDreams.jpg'
import agape from '../assets/images/agape.jpg'
import atrium from '../assets/images/atrium.jpg'
import BACODA from '../assets/images/BACODA.jpg'
import galvestonFoodBank from '../assets/images/galvestonFoodBank.jpg'
import inspira from '../assets/images/inspira.jpg'
import maryQueen from '../assets/images/maryQueen.jpg'
import cssSportsPark from '../assets/images/cssSportsPark.jpg'
import renwick from '../assets/images/renwick.jpg'
import WJC from '../assets/images/WJCPark.jpg'
import forgottenAngels from '../assets/images/forgottenAngels.jpg'

export interface Resource {
  id: string;
  title: string;
  description: string;
  mapUrl: string;
  imageUrl: string;
  topics: Filters[];
}

export const resources: Resource[] = [
  {
    id: "friendswood-library",
    title: "Friendswood Library",
    description: "The Friendswood community library, media, and event center.",
    mapUrl: "https://www.friendswood.lib.tx.us/about-us/",
    imageUrl: library,
    topics: ["local", "children", "education", "computer", "events"],
  },
  {
    id: "stevenson-park",
    title: "Stevenson Park",
    description:
      "Friendswood's central park, featuring paths, a playground, swimming pools, and events.",
    mapUrl: "https://www.ci.friendswood.tx.us/529/Stevenson-Park",
    imageUrl: stevensonPark,
    topics: ["local", "park", "swimming", "sports"],
  },
  {
    id: "centennial-park",
    title: "Centennial Park",
    description:
      "A local park featuring trails, a basketball court, and many playing fields.",
    mapUrl: "https://www.ci.friendswood.tx.us/480/Centennial-Park",
    imageUrl: centennial,
    topics: ["local", "park", "sports"],
  },
  {
    id: "friendswood-dog-park",
    title: "Friendswood Dog Park",
    description:
      "Friendswood's primary safe place for our canine friends to play.",
    mapUrl: "https://www.ci.friendswood.tx.us/261/Dog-Park",
    imageUrl: dogPark,
    topics: ["local", "park", "pets"],
  },
  {
    id: "css-sportspark",
    title: "C.S.S. Sportspark",
    description:
      "Formally named the Corporal Steven Schulz Sportspark.",
    mapUrl: "https://www.ci.friendswood.tx.us/481/Sportspark",
    imageUrl: cssSportsPark,
    topics: ["local", "park", "sports", "children"],
  },
  {
    id: "shepherds-nook",
    title: "The Shepherd's Nook",
    description:
      "A Christian outreach ministry serving Friendswood and the surrounding communities.",
    mapUrl: "https://www.gshepherd.net/outreach-ministries",
    imageUrl: shepherdsNook,
    topics: ["local", "religion", "children"],
  },
  {
    id: "lpj-hangar",
    title: "L.P.J. Hangar",
    description:
      "Formally named the Leavesley Park Jones Hangar, an event center and playground.",
    mapUrl: "https://www.ci.friendswood.tx.us/526/Leavesley-Park-Jones-Hangar",
    imageUrl: lpjHangar,
    topics: ["local", "events", "children"],
  },
  {
    id: "renwick-sports-complex",
    title: "Renwick Sports Complex",
    description: "19 acres of baseball and multi-purpose fields.",
    mapUrl: "https://www.ci.friendswood.tx.us/528/Renwick-Sports-Complex",
    imageUrl: renwick,
    topics: ["local", "sports", "children"],
  },
  {
    id: "lance-corporal-wjc-park",
    title: "Lance Corporal W.J.C. Park",
    description:
      "Formally known as Lance Corporal Wesley J. Canning Park.",
    mapUrl: "https://www.ci.friendswood.tx.us/791/Lance-Corporal-Wesley-J-Canning-Park",
    imageUrl: WJC,
    topics: ["local", "park"],
  },
  {
    id: "1776-memorial-park",
    title: "1776 Memorial Park",
    description: "Features trails, ideal for wildlife viewing.",
    mapUrl: "https://www.ci.friendswood.tx.us/792/1776-Memorial-Park",
    imageUrl: memorialPark,
    topics: ["local", "park"],
  },
  {
    id: "mary-queen-food-pantry",
    title: "Mary Queen Food Pantry",
    description:
      "Mary Queen Catholic Church's food distribution center.",
    mapUrl: "https://www.maryqueencatholicchurch.org/food-pantry",
    imageUrl: maryQueen,
    topics: ["local", "food_support", "religion"],
  },
  {
    id: "galveston-food-bank",
    title: "Galveston Food Bank",
    description:
      "Provides easy access to nutritional food for the economically disadvantaged.",
    mapUrl: "https://www.galvestoncountyfoodbank.org/",
    imageUrl: galvestonFoodBank,
    topics: ["local", "food_support"],
  },
  {
    id: "hope-village",
    title: "Hope Village",
    description:
      "A loving home for people with intellectual and cognitive disabilities.",
    mapUrl: "https://hope-village.com/",
    imageUrl: hopeVillage,
    topics: ["local", "disability_care"],
  },
  {
    id: "forgotten-angels",
    title: "Forgotten Angels",
    description:
      "A Christ-centered non-profit transforming the lives of people living with disabilities.",
    mapUrl: "https://forgottenangels.org/",
    imageUrl: forgottenAngels,
    topics: ["local", "disability_care", "religion"],
  },
  {
    id: "a-treasure-of-dreams",
    title: "A Treasure of Dreams",
    description:
      "Specialized, individualized care for those with intellectual and developmental disabilities.",
    mapUrl: "https://atreasureofdreams.org/",
    imageUrl: treasureOfDreams,
    topics: ["local", "disability_care", "religion"],
  },
  {
    id: "agape-centric",
    title: "Agape Centric",
    description:
      "Assisting local families in need of food, clothing, toiletries, school supplies, and inspiration.",
    mapUrl: "https://www.agapecentric.org/",
    imageUrl: agape,
    topics: ["local", "food_support", "material_support"],
  },
  {
    id: "anchor-point",
    title: "Anchor Point",
    description:
      "Champions the future of children by educating and empowering parents.",
    mapUrl: "https://anchorpoint.us/",
    imageUrl: anchorPoint,
    topics: ["children", "prenatal_perinatal", "education"],
  },
  {
    id: "atrium-foundation",
    title: "Atrium Foundation",
    description:
      "Provides support for patients in cancer diagnosis-related financial crisis.",
    mapUrl: "https://www.atriumfoundation.org/",
    imageUrl: atrium,
    topics: ["local", "medical_care", "financial_support"],
  },
  {
    id: "plus3-cybersafety",
    title: "Plus3ForCyberSafety",
    description: "Equipping communities to combat cyberbullying.",
    mapUrl: "https://plus3forcybersafety.org/",
    imageUrl: cyber2,
    topics: ["children", "education", "computer"],
  },
  {
    id: "inspira-resource-center",
    title: "Inspira Resource Center",
    description:
      "Prenatal/perinatal care services in Friendswood.",
    mapUrl: "https://inspiraresourcecenter.com/",
    imageUrl: inspira,
    topics: ["local", "prenatal_perinatal", "medical_care", "education"],
  },
  {
    id: "three-little-pitties",
    title: "Three Little Pitties Rescue",
    description:
      "Committed to rescuing dogs and cats in need.",
    mapUrl: "https://www.threelittlepittiesrescue.org/",
    imageUrl: pitties1,
    topics: ["local", "pets"],
  },
  {
    id: "birthday-joy-program",
    title: "The Birthday Joy Program",
    description:
      "We offer birthday assistance to families and throw birthday parties in local shelters.",
    mapUrl: "https://thebirthdayjoyprogram.com/",
    imageUrl: birthdayJoy,
    topics: ["children", "material_support"],
  },
  {
    id: "innovative-alternatives",
    title: "Innovative Alternatives",
    description:
      "We strive to make mental wellness available for everyone.",
    mapUrl: "https://www.innovativealternatives.org/",
    imageUrl: innovative,
    topics: ["medical_care"],
  },
  {
    id: "bacoda",
    title: "BACODA",
    description:
      "Bay Area Council on Drugs and Alcohol. Mental health / recovery assistance.",
    mapUrl: "https://www.bacoda.org/",
    imageUrl: BACODA,
    topics: ["addiction", "medical_care", "education"],
  },
];