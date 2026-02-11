import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { useNavigate } from "react-router";
const HeroSection = () => {
  const navigate=useNavigate();
  return (
    
    <section id="home"  className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
       Get 20+ Booked Clients Every Month
        <span className="bg-linear-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
          {" "}
         On Autopilot
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      A complete client-acquisition system including landing pages, automation, and call booking — built to scale your business.
      </p>
      <div className="flex justify-center my-10">
        <button
          onClick={()=>navigate("/booking")}
          className="bg-linear-to-r from-orange-500 to-orange-600 font-medium py-3 px-4 mx-3 rounded-md"
        >
          Schedule Free Booking Call
        </button>
           <button
          onClick={()=>navigate("/signup")}
          className="bg-linear-to-r from-orange-500 to-orange-600 font-medium py-3 px-4 mx-3 rounded-md"
        >
         SignUp To Get Free Guide
        </button>
      
      </div>
    <div className="flex mt-10 justify-center px-2">
  <video
    loop
    
    controls
    playsInline
    className="
      rounded-lg
      w-full           /* mobile: full width */
      sm:w-4/5         /* small screens */
      md:w-2/3         /* tablets */
             /* desktop */
      border border-orange-700
      shadow-sm shadow-orange-400
      my-4
    "
  >
    <source src={video1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    </section>
   
  );
};

export default HeroSection;