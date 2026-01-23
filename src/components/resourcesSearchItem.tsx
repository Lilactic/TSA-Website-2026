import { MapPin, Trees, LocateFixed, WavesLadder, Hospital, PawPrint, Croissant, Accessibility, Volleyball, Sun, Shirt, Baby, Backpack, CircleDollarSign, GraduationCap, Pill, Laptop, CalendarDays } from "lucide-react";

import '../global.css'
import styles from './resourcesSearchItem.module.css'
import type { JSX } from "react";
import type { Filters } from "../types/Resources";
import { filterData } from "../config/filters";

interface ResourcesSearchItemProps {
  title: string;
  description: string;
  mapUrl: string;
  imageUrl: string;
  topics: Filters[];
}

const ResourcesSearchItem = ({
  title,
  description,
  mapUrl,
  imageUrl,
  topics,
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
