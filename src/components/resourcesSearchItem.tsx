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

type FilterData = {
  label: string;
  icon: JSX.Element;
};

const filterData: Record<Filters, FilterData> = {
  local: {
    label: "Local",
    icon: <LocateFixed size={20} strokeWidth={2} />,
  },
  park: {
    label: "Parks",
    icon: <Trees size={20} strokeWidth={2} />,
  },
  medical_care: {
    label: "Medical Care",
    icon: <Hospital size={20} strokeWidth={2} />,
  },
  pets: {
    label: "Pets",
    icon: <PawPrint size={20} strokeWidth={2} />,
  },
  food_support: {
    label: "Food Support",
    icon: <Croissant size={20} strokeWidth={2} />,
  },
  disability_care: {
    label: "Disability Care",
    icon: <Accessibility size={20} strokeWidth={2} />,
  },
  swimming: {
    label: "Swimming",
    icon: <WavesLadder size={20} strokeWidth={2} />,
  },
  sports: {
    label: "Sports",
    icon: <Volleyball size={20} strokeWidth={2} />,
  },
  religion: {
    label: "Religion",
    icon: <Sun size={20} strokeWidth={2} />,
  },
  material_support: {
    label: "Material Support",
    icon: <Shirt size={20} strokeWidth={2} />,
  },
  prenatal_perinatal: {
    label: "Prenatal & Perinatal",
    icon: <Baby size={20} strokeWidth={2} />,
  },
  children: {
    label: "Children",
    icon: <Backpack size={20} strokeWidth={2} />,
  },
  financial_support: {
    label: "Financial Support",
    icon: <CircleDollarSign size={20} strokeWidth={2} />,
  },
  education: {
    label: "Education",
    icon: <GraduationCap size={20} strokeWidth={2} />,
  },
  addiction: {
    label: "Addiction",
    icon: <Pill size={20} strokeWidth={2} />,
  },
  computer: {
    label: "Computer Access",
    icon: <Laptop size={20} strokeWidth={2} />,
  },
  events: {
    label: "Events",
    icon: <CalendarDays size={20} strokeWidth={2} />,
  },
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
                        {filterData[filter].icon}
                        <div className={styles.hitbox} />
                        <h4 className={styles.tagText}>{filterData[filter].label}</h4>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ResourcesSearchItem;
