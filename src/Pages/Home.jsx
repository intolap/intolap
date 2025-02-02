import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Choose1 from "../Components/Choose/Choose1";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import ContactList from "../Components/ContactInfo/ContactList";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Marquee from "../Components/Marquee/Marquee";
import Partner1 from "../Components/Partner/Partner1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Process from "../Components/Process/Process";
import Services1 from "../Components/Services/Services1";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           <HeroBanner1
                videotext="<strong>Watch</strong><br>INTOLAP STORY"
                title="Unleashing <br><span class='bold'>Innovations</span><br> Empowering <br><span class='bold'>Growth</span>"
                btnname="Let’s Talk"
                btnurl="/contact"
                mainimg="/assets/images/banner/hero-img-1.jpg"
                Clientnumber="1k+"
                Client="Clients Globally"
                customers="Happy Customers"
                rating="4.8"
                review="(120K Reviews)"
           ></HeroBanner1>
           <About1
                subtitle="ABOUT INTOLAP"
                title="Best <span class='bold'>business consulting <br>  agency </span> for your <br> brand success"
                rotatetext="  * IT CONSULTANCY * INTERIOR DESIGN  *  FASHION"
                subtitle2="SINCE 2012"
                // content="Collaboratively <span class='text-theme'>disintermediate</span> one to functionalities and long term impacter compellingly granulars web leveling competencie consult"

                content="We have been driving <span class='text-theme'>innovation and excellence</span> in consulting. Through a collaborative approach, we streamline complex functionalities, ensuring long-term impact and sustainable growth. Our expertise enables businesses to harness granular web technologies, elevating their competencies and positioning them for success in the digital landscape."

                btnname="More About"
                expyear="12"
                exptitle="<span class='fw-semibold'>Years of Industry</span> <br> Experience"
                avatar="/assets/images/about/about02.jpg"
                name="Debashis Biswas"
                designation="CEO Founder"
           ></About1>
           {/* <Partner1></Partner1> */}
           <Services1></Services1>
           <Choose1></Choose1>
           {/* <Process></Process> */}
           <Testimonial></Testimonial>
           {/* <ContactInfo1></ContactInfo1> */}
           {/* <Pricing1></Pricing1> */}
           {/* <Marquee></Marquee> */}
           {/* <Blog1></Blog1> */}
           {/* <ContactList></ContactList> */}
           {/* <Nwesletter addclass="newsletter-section"></Nwesletter> */}
        </div>
    );
};

export default Home;