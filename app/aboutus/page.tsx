import React from "react";
import AboutHome from "../about_us_pages/home_about_page/page";
import OurStory from "../about_us_pages/our_story/page";
import OurCore from "../about_us_pages/our_core/page";
import Impression from "../about_us_pages/impersetion_slider/page";
import Leader from "../about_us_pages/our_leader/page";
import WorkWithUs from "../about_us_pages/work_with_us/page";
import  Form  from "../contacts/page";
import Footer from "../footer/page";
import Different from "../about_us_pages/different_page/different";
import ExpertTeam from "../about_us_pages/experts_team/page";


const About = () => {
  return <> 
  < AboutHome/>
  <OurStory/>
  <OurCore/>
  <Impression/>
<Different/>
  <Leader/>
  <ExpertTeam/>
  <WorkWithUs/>
  <Form/>
  <Footer/>
   </>;
};

export default About;

