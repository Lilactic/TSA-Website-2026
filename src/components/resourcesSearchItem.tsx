import { MapPin, Trees, LocateFixed, CarFront, WavesLadder, FerrisWheel, TargetIcon, Hospital, PawPrint, Croissant, Accessibility, Volleyball, Sun, Shirt, Baby, Backpack, CircleDollarSign, GraduationCap, Pill, Laptop, CalendarDays } from "lucide-react";

import '../global.css'
import styles from './resourcesSearchItem.module.css'
import { Link } from "react-router-dom";
import type { JSX } from "react";

interface ResourcesSearchItemProps {
  title: string;
  description: string;
  mapUrl: string;
  imageUrl: string;
  topics: Filters[];
}

type Filters =
  | "local"
  | "park"
  | "medical_care"
  | "pets"
  | "food_support"
  | "disability_care"
  | "swimming"
  | "sports"
  | "religion"
  | "material_support"
  | "prenatal_perinatal"
  | "children"
  | "financial_support"
  | "education"
  | "addiction"
  | "computer"
  | "events";

const filterElements: Record<Filters, JSX.Element> = {
  local: <LocateFixed size={20} strokeWidth={2} />,
  park: <Trees size={20} strokeWidth={2} />,
  medical_care: <Hospital size={20} strokeWidth={2} />,
  pets: <PawPrint size={20} strokeWidth={2} />,
  food_support: <Croissant size={20} strokeWidth={2} />,
  disability_care: <Accessibility size={20} strokeWidth={2} />,
  swimming: <WavesLadder size={20} strokeWidth={2} />,
  sports: <Volleyball size={20} strokeWidth={2} />,
  religion: <Sun size={20} strokeWidth={2} />,
  material_support: <Shirt size={20} strokeWidth={2} />,
  prenatal_perinatal: <Baby size={20} strokeWidth={2} />,
  children: <Backpack size={20} strokeWidth={2} />,
  financial_support: <CircleDollarSign size={20} strokeWidth={2} />,
  education: <GraduationCap size={20} strokeWidth={2} />,
  addiction: <Pill size={20} strokeWidth={2} />,
  computer: <Laptop size={20} strokeWidth={2} />,
  events: <CalendarDays size={20} strokeWidth={2} />,
};


const ResourcesSearchItem = ({
  title,
  description,
  mapUrl,
  imageUrl,
  topics
}: ResourcesSearchItemProps) => {
  return (
    <div className={styles.gridItem}>
        <div className={styles.imageBox}>
            <img 
            src={imageUrl} 
            alt="Image"
            className={styles.gridItemImage}
             />
        </div>
        <a href={mapUrl} target="_blank" rel="noreferrer" className={styles.mapCircle}>
            <MapPin size={30} strokeWidth={2}/>
        </a>
        <div className={styles.cardContent}>
            <h2 className='interHeader' style={{marginBottom: "0.3em"}}>{title}</h2>
            <h2 className='interDescription' style={{marginBottom: "1em"}}>{description}</h2>
            <div className={styles.cardTopicBox}>
                {topics.map(filter => (
                    <div className={styles.cardTopic}>
                        {filterElements[filter]}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ResourcesSearchItem;
