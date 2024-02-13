import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

function Contact()
{
 return(
   <>
   <Navbar/>
  <Hero
  cName ="hero-mid"
  heroimg={ContactImg}
  title= "Contact"
  btnClass="hide"
  />
  <Contactform/>
  <Footer/>
   </>
 )
}
export default Contact;