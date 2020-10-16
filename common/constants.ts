import {PrimaryNavItem} from "../components/nav/types";
import {Pages} from "./types";

export const topNavItems: PrimaryNavItem[] = [
  {
    name: Pages.Rentals,
    slug: "rentals",
    secondaryNavItems: [
      {
        name: "Rental Rates",
        anchor: "rental-rates"
      },
      {
        name: "Gift Certificates",
        anchor: "gift-certificates"
      },
      {
        name: "Season Passes",
        anchor: "season-passes"
      },
      {
        name: "Group Rentals",
        anchor: "group-rentals"
      }
    ]
  },
  {
    name: Pages.Tours,
    slug: "tours",
    secondaryNavItems: [
      {
        name: "Nature Tours",
        anchor: "nature-tours"
      },
      {
        name: "Birthday Parties",
        anchor: "birthday-parties"
      },
      {
        name: "Custom Guided Tours",
        anchor: "custom-tours"
      }
    ]
  },
  {
    name: Pages.Instruction,
    slug: "instruction",
    secondaryNavItems: [
      {
        name: "Paddling Clinics",
        anchor: "paddling-clinics"
      },
      {
        name: "Private Lessons",
        anchor: "private-lessons"
      }
    ]
  },
  {
    name: Pages.RiverCamp,
    slug: "river-camp",
    secondaryNavItems: [
      {
        name: "Sessions",
        anchor: "sessions"
      },
      {
        name: "Dates & Prices",
        anchor: "dates-prices"
      },
      {
        name: "About River Camp",
        anchor: "about-camp"
      },
      {
        name: "Testimonials",
        anchor: "testimonials"
      }
    ]
  },
  {
    name: Pages.RiverClassroom,
    slug: "river-classroom",
  },
  {
    name: Pages.Directions,
    slug: "directions",
  }
];


export const bottomNavItems: PrimaryNavItem[] = [
  {
    name: Pages.AboutUs,
    slug: "about-us"
  },
  {
    name: Pages.Employment,
    slug: "careers"
  },
  {
    name: Pages.Events,
    slug: "events"
  },
  {
    name: Pages.Forms,
    slug: "forms"
  }
];

export const allNavItems: PrimaryNavItem[] = [...topNavItems, ...bottomNavItems];