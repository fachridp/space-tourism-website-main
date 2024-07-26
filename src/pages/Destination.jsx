import { useEffect, useMemo, useRef, useState } from "react";

const body = document.querySelector("body");

import imageMoon from "../assets/destination/image-moon.png"
import imageMars from "../assets/destination/image-mars.png"
import imageEuropa from "../assets/destination/image-europa.png"
import imageTitan from "../assets/destination/image-titan.png"

import backgroundImageMobile from "../assets/destination/background-destination-mobile.jpg"
import backgroundImageTablet from "../assets/destination/background-destination-tablet.jpg"
import backgroundImageDesktop from "../assets/destination/background-destination-desktop.jpg"

export default function Destination() {
 const moonDestinationRef = useRef(null);
 const marsDestinationRef = useRef(null);
 const europaDestinationRef = useRef(null);
 const titanDestinationRef = useRef(null);

 const initialPlanetDestination = {
  planetImage: imageMoon,
  planetName: "MOON",
  planetDescriptive: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  planetAvgDistance: "384,400 km",
  planetTravelTime: "3 days",
 }

 const [planetDestination, setPlanetDestination] = useState(initialPlanetDestination);
 const navDestinationsRef = useMemo(() => [moonDestinationRef, marsDestinationRef, europaDestinationRef, titanDestinationRef], []);

 const destinationActiveHandler = (ref) => {
  setPlanetDestination(ref.dataset);
  sessionStorage.setItem("destinationActive", JSON.stringify(ref.dataset));

  navDestinationsRef.map(navDestinationRef => {
   if (navDestinationRef.current.dataset.planetName === ref.dataset.planetName) {
    navDestinationRef.current.classList.add("after:w-full");
   } else {
    navDestinationRef.current.classList.remove("after:w-full");
   }
  })
 }

 useEffect(() => {
  const items = JSON.parse(sessionStorage.getItem("destinationActive"));

  if (items) {
   setPlanetDestination(items);

   navDestinationsRef.map(navDestinationRef => {
    if (navDestinationRef.current.dataset.planetName === items.planetName) {
     navDestinationRef.current.classList.add("after:w-full");
    } else {
     navDestinationRef.current.classList.remove("after:w-full");
    }
   })
  }

  if (window.innerWidth > 0 && window.innerWidth < 767) {
   body.style.backgroundImage = `url(${backgroundImageMobile})`;
   body.style.minWidth = "100vw";
   body.style.minHeight = "100vh";
   body.style.backgroundSize = "cover";
   body.style.backgroundPosition = "center";
   body.style.backgroundRepeat = "no-repeat";
   body.style.overflowY = "visible";
   body.style.overflowX = "hidden";
  } else if (window.innerWidth > 767 && window.innerWidth < 1023) {
   body.style.backgroundImage = `url(${backgroundImageTablet})`;
   body.style.minWidth = "100vw";
   body.style.minHeight = "100vh";
   body.style.backgroundSize = "cover";
   body.style.backgroundPosition = "center";
   body.style.backgroundRepeat = "no-repeat";
   body.style.overflowY = "visible";
   body.style.overflowX = "hidden";
  } else if (window.innerWidth > 1023) {
   body.style.backgroundImage = `url(${backgroundImageDesktop})`;
   body.style.minWidth = "100vw";
   body.style.minHeight = "100vh";
   body.style.backgroundSize = "cover";
   body.style.backgroundPosition = "center";
   body.style.backgroundRepeat = "no-repeat"
  }

  window.addEventListener("resize", () => {
   if (window.innerWidth > 0 && window.innerWidth < 767) {
    body.style.backgroundImage = `url(${backgroundImageMobile})`;
    body.style.minWidth = "100vw";
    body.style.minHeight = "100vh";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.overflowY = "visible";
    body.style.overflowX = "hidden";
   }
   else if (window.innerWidth > 767 && window.innerWidth < 1023) {
    body.style.backgroundImage = `url(${backgroundImageTablet})`;
    body.style.minWidth = "100vw";
    body.style.minHeight = "100vh";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.overflowY = "visible";
    body.style.overflowX = "hidden";
   } else if (window.innerWidth > 1023) {
    body.style.backgroundImage = `url(${backgroundImageDesktop})`;
    body.style.minWidth = "100vw";
    body.style.minHeight = "100vh";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
   }
  })
 }, [navDestinationsRef]);

 return (
  <>
   <section className="destination px-[1.3rem] pt-3 md:pt-10 pb-5">
    <p className="text-white uppercase relative before:content-['01'] before:mr-2 before:text-slightly-transparent-white-2 tracking-widest text-sm sm:text-lg mobile-l:text-xl lg:text-2xl lg:px-10">Pick your destination</p>

    <div className="pt-5 text-center text-white space-y-7 md:text-left md:flex md:justify-center md:items-center md:gap-2 md:pt-10 lg:gap-0">
     {/* Image of the Planet */}
     <div className="md:flex-1 animate__animated animate__fadeIn">
      <img className="w-32 mx-auto sm:w-32 mobile-l:w-44 md:w-72 lg:w-80" src={planetDestination.planetImage} alt="Image of the moon" />
     </div>

     {/* Content of the Planet */}
     <div className="space-y-7 md:flex-1 md:space-y-10 animate__animated animate__fadeIn">
      {/* Navigation to other Planets */}
      <nav>
       <ul className="flex justify-between text-sm tracking-widest uppercase text-slightly-transparent-white mobile-l:text-lg mobile-l:max-w-[37.375rem] mobile-l:mx-auto md:justify-start md:gap-6 md:text-base lg:text-lg lg:gap-10">
        <li ref={moonDestinationRef} onClick={() => destinationActiveHandler(moonDestinationRef.current)} className="relative nav-link-mobile-active after:w-full" data-planet-image={imageMoon} data-planet-name="MOON" data-planet-descriptive="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." data-planet-avg-distance="384,400 km" data-planet-travel-time="3 days">Moon</li>
        <li ref={marsDestinationRef} onClick={() => destinationActiveHandler(marsDestinationRef.current)} className="relative nav-link-mobile-active" data-planet-image={imageMars} data-planet-name="MARS" data-planet-descriptive="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!" data-planet-avg-distance="225 mil. km" data-planet-travel-time="9 months">Mars</li>
        <li ref={europaDestinationRef} onClick={() => destinationActiveHandler(europaDestinationRef.current)} className="relative nav-link-mobile-active" data-planet-image={imageEuropa} data-planet-name="EUROPA" data-planet-descriptive="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit ofice skating, curling, hockey, or simple relaxation in your snug wintery cabin." data-planet-avg-distance="628 mil. km" data-planet-travel-time="3 years">Europa</li>
        <li ref={titanDestinationRef} onClick={() => destinationActiveHandler(titanDestinationRef.current)} className="relative nav-link-mobile-active" data-planet-image={imageTitan} data-planet-name="TITAN" data-planet-descriptive="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn." data-planet-avg-distance="1.6 bil. km" data-planet-travel-time="7 years">Titan</li>
       </ul>
      </nav>

      {/* Description of the Current Planet */}
      <div className="space-y-4">
       {/* Title of the Current Planet */}
       <h2 className="text-4xl font-bold tracking-widest uppercase md:text-6xl">{planetDestination.planetName}</h2>

       <p className="border-b-[1px] border-slightly-transparent-white-2 pb-3 leading-6 text-sm tracking-wide mobile-l:text-lg mobile-l:max-w-[34.375rem] mobile-l:mx-auto md:text-lg md:pt-4 md:pb-10 lg:text-xl lg:max-w-[30rem] lg:m-0">{planetDestination.planetDescriptive}</p>

       <div className="tracking-wider uppercase md:flex md:items-center md:gap-8 md:pt-2 lg:gap-16">
        <p className="pt-2 text-sm distance">Avg. distance <br /><span className="text-xl font-bold sm:text-3xl">{planetDestination.planetAvgDistance}</span> <br />
        </p>
        <p className="pt-2 text-sm distance">
         Est. travel time <br />
         <span className="text-xl font-bold sm:text-3xl">{planetDestination.planetTravelTime}</span>
        </p>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}
