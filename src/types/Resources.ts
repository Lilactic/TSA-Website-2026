export type Filters =
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

export interface Resource {
  id: string;
  title: string;
  description: string;
  mapUrl: string;
  imageUrl: string;
  topics: Filters[];
}

