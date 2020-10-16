import React from "react";
import WideImage from "./page-components/WideImage";
import TextBanner from "./page-components/TextBanner";
import SectionHeader from "./page-components/SectionHeader";
import Paragraph from "./page-components/Paragraph";
import ParagraphTitle from "./page-components/ParagraphTitle";
import List from "./page-components/List";
import TwoColumnSection from "./page-components/TwoColumnSection";
import SingleColumnSection from "./page-components/SingleColumnSection";
import styles from "./Rentals.module.scss"
import Button from "./page-components/Button";


const nowOpenText = "NASHOBA PADDLER IS NOW OPEN! \n BY PHONE RESERVATION ONLY, SORRY NO WALK-INS";
const safetyProceduresText = "PLEASE MAKE SURE TO FULLY READ THROUGH OUR RENTAL POLICIES\n REGARDING SAFETY MEASURES AND NEW PROCEDURES";

const Rentals: React.FC = () => (
  <>
    <SingleColumnSection>
      <TextBanner text={nowOpenText}/>
      <WideImage src="/assets/background-image.jpg" alt="people kayaking"/>
      <TextBanner text={safetyProceduresText}/>
    </SingleColumnSection>
    <TwoColumnSection>
      <div>
        <h2 className={styles.hoursTitle}>
          2020 Hours
        </h2>
        <TextBanner text={"open may - october"}/>
        <Paragraph>
          <b>Spring: June 6 - June 20th</b>
          {"\n"}
          Weekends and holidays, 9:30am - 6:30pm
          {"\n\n"}
          <b>Spring: June 6 - June 20th</b>
          {"\n"}
          Weekends and holidays, 9:30am - 6:30pm
          {"\n\n"}
          <b>Spring: June 6 - June 20th</b>
          {"\n"}
          Weekends and holidays, 9:30am - 6:30pm
          {"\n\n"}
        </Paragraph>
        <TextBanner text={"PHONE RESERVATIONS ONLY"}/>
        <TextBanner text={"978-448-8699\n398 West Main Street Groton, MA"}/>
      </div>
      <div>
        <Paragraph>
          Rent quality Old Town canoes and kayaks and BIC stand up paddleboards on the beautiful, friendly Nashua River
          in West Groton, Massachusetts. Launch from our rental site and paddle for hours in either direction! Our
          friendly
          rental staff will assist you with your boat, provide paddling and safety tips, give you an idea of what you
          might see on the river, and share the amazing story of the Nashua River's history.
          {"\n\n"}
          Have fun exploring the main
          channel of the Nashua, the smaller tributary of the Squannacook, and the pond-like ox bow of Dead River. Each
          season brings different experiences and sightings. Paddles and life vests included for all ages.
        </Paragraph>
        <Button text={"CALL TO MAKE A RESERVATION"} href={"https://google.com"}/>
      </div>
    </TwoColumnSection>
    <SingleColumnSection>
      <SectionHeader text={"rental options"}/>
      <ParagraphTitle>
        Rental Rates
      </ParagraphTitle>
      <TextBanner text={"BOAT TYPE    HALF DAY PRICE    FULL DAY PRICE"}/>
      <Paragraph>
        Price
        {"\n"}
        Chart
        {"\n"}
        Goes
        {"\n"}
        Here
        {"\n"}
      </Paragraph>
      <TextBanner text={"OFFSITE RENTALS ARE NOT AVAILABLE THIS YEAR"}/>
      <ParagraphTitle>
        Rental Procedures
      </ParagraphTitle>
      <Paragraph>
        In order to reduce the possibility of spreading COVID 19, we have had to change the way we handle our rentals.
        Though we won’t be able to provide the hands-on personal assistance we have come to be known for, our staff will
        always be there with a smile (under their masks) to help guide you through the process so you can enjoy some
        well-needed time on the river. We are following the state’s WORKPLACE SAFETY and REOPENING STANDARDS including
        disinfecting equipment between uses and requiring social distancing & wearing of face masks at our rental site.
      </Paragraph>
      <ParagraphTitle>
        Making a Reservation: Call us at <a href={""}>978-448-8699</a>
      </ParagraphTitle>
      <List>
        <li>You MUST make a phone reservation. Sorry, but <b>NO WALK-INS</b>.</li>
        <li>People sharing a boat must be from the same household group. Before you make a reservation, be aware that
          you
          must be comfortable entering and exiting your boat from our dock <b>WITHOUT OUR ASSISTANCE</b> in order to
          maintain
          social distancing. Kayaks are challenging. (Instructional video coming soon)
        </li>
        <li>You will be required to prepay over the phone and will receive an email confirmation with important
          information. (Please see our cancellation & refund policy.)
        </li>
        <li>Online LIABILITY RELEASES will be included in your confirmation email. A SEPARATE ONE IS REQUIRED FOR EACH
          PERSON. You will need to enter emails of everyone in your party in order for us to send them the online
          waiver.
          Minors must have their own forms signed by their parent/legal guardian.
        </li>
        <li>
          You will need to reserve life jackets to fit everyone in your party so find out in advance what sizes are
          needed. (Infant; 30-50 lbs; 50-90 lbs; Adult XS/S; Adult M; Adult L; Adult XL)
        </li>
        <li>
          Groups will be limited to 10 people.
        </li>
      </List>
      <SectionHeader text={"Gift Certificates"}/>
      <Paragraph>
        Our Gift Certificates are can be used for our canoe, kayak, and SUP rentals, for our Monthly Guided Nature
        Tours,
        for our Paddling Instruction Clinics, or for our rental Season Passes. You can order online to receive an email
        certificate, or stop by our rental stand to pick up a physical copy.
      </Paragraph>
      <SectionHeader text={"Season Passes"} anchor={"season-passes"}/>
      <TextBanner text={"SEASON PASSES ARE NOT AVAILABLE THIS YEAR"}/>
    </SingleColumnSection>
  </>
);

export default Rentals;