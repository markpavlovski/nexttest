export enum Pages {
  Rentals = "Rentals",
  Tours = "Tours",
  Instruction = "Instruction",
  RiverCamp = "River Camp",
  RiverClassroom = "River Classroom",
  Directions = "Directions",
  AboutUs = "About Us",
  Employment = "Employment",
  Events = "Events",
  Forms = "Forms",
  BoatSale = "Boat Sale",
}

export interface BannerContent {
  visibleContent?: string;
  hiddenContent?: string;
}

export interface FooterContent {
  content?: string;
}