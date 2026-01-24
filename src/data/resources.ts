import type { Filters } from "../types/Resources"
import stevensonPark from '../assets/images/stevensonPark.jpg'
import library from '../assets/images/library.png'
import pitties1 from '../assets/images/pitties1.jpg'
import cyber2 from '../assets/images/cyber2.png'

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
    mapUrl: "https://www.ci.friendswood.tx.us/261/Dog-Park",
    imageUrl: stevensonPark,
    topics: ["local", "park", "sports"],
  },
  {
    id: "friendswood-dog-park",
    title: "Friendswood Dog Park",
    description:
      "Friendswood's primary safe place for our canine friends to play.",
    mapUrl: "https://www.ci.friendswood.tx.us/480/Centennial-Park",
    imageUrl: stevensonPark,
    topics: ["local", "park", "pets"],
  },
  {
    id: "css-sportspark",
    title: "C.S.S. Sportspark",
    description:
      "Formally named the Corporal Steven Schulz Sportspark.",
    mapUrl: "https://www.ci.friendswood.tx.us/481/Sportspark",
    imageUrl: stevensonPark,
    topics: ["local", "park", "sports", "children"],
  },
  {
    id: "lpj-hangar",
    title: "L.P.J. Hangar",
    description:
      "Formally named the Leavesley Park Jones Hangar, an event center and playground.",
    mapUrl: "https://www.ci.friendswood.tx.us/526/Leavesley-Park-Jones-Hangar",
    imageUrl: stevensonPark,
    topics: ["local", "events", "children"],
  },
  {
    id: "renwick-sports-complex",
    title: "Renwick Sports Complex",
    description: "19 acres of baseball and multi-purpose fields.",
    mapUrl: "https://www.ci.friendswood.tx.us/528/Renwick-Sports-Complex",
    imageUrl: stevensonPark,
    topics: ["local", "sports", "children"],
  },
  {
    id: "lance-corporal-wjc-park",
    title: "Lance Corporal W.J.C. Park",
    description:
      "Formally known as Lance Corporal Wesley J. Canning Park.",
    mapUrl: "https://www.ci.friendswood.tx.us/791/Lance-Corporal-Wesley-J-Canning-Park",
    imageUrl: stevensonPark,
    topics: ["local", "park"],
  },
  {
    id: "1776-memorial-park",
    title: "1776 Memorial Park",
    description: "Features trails, ideal for wildlife viewing.",
    mapUrl: "https://www.ci.friendswood.tx.us/792/1776-Memorial-Park",
    imageUrl: stevensonPark,
    topics: ["local", "park"],
  },
  {
    id: "mary-queen-food-pantry",
    title: "Mary Queen Food Pantry",
    description:
      "Mary Queen Catholic Church's food distribution center.",
    mapUrl: "https://www.maryqueencatholicchurch.org/food-pantry",
    imageUrl: stevensonPark,
    topics: ["local", "food_support", "religion"],
  },
  {
    id: "galveston-food-bank",
    title: "Galveston Food Bank",
    description:
      "Provides easy access to nutritional food for the economically disadvantaged.",
    mapUrl: "https://www.galvestoncountyfoodbank.org/",
    imageUrl: stevensonPark,
    topics: ["local", "food_support"],
  },
  {
    id: "hope-village",
    title: "Hope Village",
    description:
      "A loving home for people with intellectual and cognitive disabilities.",
    mapUrl: "https://hope-village.com/",
    imageUrl: stevensonPark,
    topics: ["local", "disability_care"],
  },
  {
    id: "forgotten-angels",
    title: "Forgotten Angels",
    description:
      "A Christ-centered non-profit transforming the lives of people living with disabilities.",
    mapUrl: "https://forgottenangels.org/",
    imageUrl: stevensonPark,
    topics: ["local", "disability_care", "religion"],
  },
  {
    id: "a-treasure-of-dreams",
    title: "A Treasure of Dreams",
    description:
      "Specialized, individualized care for those with intellectual and developmental disabilities.",
    mapUrl: "https://atreasureofdreams.org/",
    imageUrl: stevensonPark,
    topics: ["local", "disability_care", "religion"],
  },
  {
    id: "agape-centric",
    title: "Agape Centric",
    description:
      "Assisting local families in need of food, clothing, toiletries, school supplies, and inspiration.",
    mapUrl: "https://www.agapecentric.org/",
    imageUrl: stevensonPark,
    topics: ["local", "food_support", "material_support"],
  },
  {
    id: "anchor-point",
    title: "Anchor Point",
    description:
      "Champions the future of children by educating and empowering parents.",
    mapUrl: "https://anchorpoint.us/",
    imageUrl: stevensonPark,
    topics: ["children", "prenatal_perinatal", "education"],
  },
  {
    id: "atrium-foundation",
    title: "Atrium Foundation",
    description:
      "Provides support for patients in cancer diagnosis-related financial crisis.",
    mapUrl: "https://www.atriumfoundation.org/",
    imageUrl: stevensonPark,
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
    imageUrl: stevensonPark,
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
    imageUrl: stevensonPark,
    topics: ["children", "material_support"],
  },
  {
    id: "innovative-alternatives",
    title: "Innovative Alternatives",
    description:
      "We strive to make mental wellness available for everyone.",
    mapUrl: "https://www.innovativealternatives.org/",
    imageUrl: stevensonPark,
    topics: ["medical_care"],
  },
  {
    id: "bacoda",
    title: "BACODA",
    description:
      "Bay Area Council on Drugs and Alcohol. Mental health / recovery assistance.",
    mapUrl: "https://www.bacoda.org/",
    imageUrl: stevensonPark,
    topics: ["addiction", "medical_care", "education"],
  },
];