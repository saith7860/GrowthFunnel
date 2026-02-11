import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonial";
import {Routes,Route} from 'react-router'
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import ScrollToHash from "./components/ScrollToHash";
import SignUp from "./pages/SignUp";
import WhatsAppButton from "./components/WhatsppButton";
import VerifyEmail from "./pages/VerifyEmail";
import GoggleCalendar from "./pages/GoggleCalendar";
import VerifyBooking from "./pages/verifyBooking";
const App = () => {
  return (
    <>
     <Navbar/>
     <ScrollToHash/>
     <WhatsAppButton/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking"  element={<Booking/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/verifyemail" element={<VerifyEmail/>}/>
        <Route path="/googlelogin" element={<GoggleCalendar/>}/>
        <Route path="/verifybooking" element={<VerifyBooking/>}/>
        
      </Routes>
      <Footer></Footer>
      </div>
     
     
        
    </>
  );
};
export default App;
