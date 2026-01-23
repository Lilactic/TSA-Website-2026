import {
  LocateFixed,
  Trees,
  Hospital,
  PawPrint,
  Croissant,
  Accessibility,
  WavesLadder,
  Volleyball,
  Sun,
  Shirt,
  Baby,
  Backpack,
  CircleDollarSign,
  GraduationCap,
  Pill,
  Laptop,
  CalendarDays,
} from "lucide-react";

import type { Filters } from "../types/Resources.ts";
import type { JSX } from "react";

export interface FilterData {
  label: string;
  icon: JSX.Element;
}

export const filterData: Record<Filters, FilterData> = {
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