import {Pages} from "../common/types";
import Rentals from "./Rentals";
import NotFound404 from "./NotFound404";

export const getPageContent = (page: Pages): any => {
  switch(page){
    case Pages.Rentals:
      return Rentals;
    default:
      return NotFound404;
  }
};