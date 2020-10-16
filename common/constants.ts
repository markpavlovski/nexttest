import {PrimaryNavItem} from "../components/nav/types";
import {Pages} from "./types";

export const topNavItems: PrimaryNavItem[] = [
  {
    name: Pages.Rentals,
    title: "Canoe, Kayak, & SUP Rentals",
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
    title: "Paddling Tours",
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
    title: "title",
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
    title: "title",
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
    title: "title",
    slug: "river-classroom",
  },
  {
    name: Pages.Directions,
    title: "title",
    slug: "directions",
  }
];


export const bottomNavItems: PrimaryNavItem[] = [
  {
    name: Pages.AboutUs,
    title: "title",
    slug: "about-us"
  },
  {
    name: Pages.Employment,
    title: "title",
    slug: "careers"
  },
  {
    name: Pages.Events,
    title: "title",
    slug: "events"
  },
  {
    name: Pages.Forms,
    title: "title",
    slug: "forms"
  }
];

export const allNavItems: PrimaryNavItem[] = [...topNavItems, ...bottomNavItems];