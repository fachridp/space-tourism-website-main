import { useEffect, useState, useRef, useMemo } from "react"

import backgroundImageMobile from "../assets/crew/background-crew-mobile.jpg"
import backgroundImageTablet from "../assets/crew/background-crew-tablet.jpg"
import backgroundImageDesktop from "../assets/crew/background-crew-desktop.jpg"
import imageDouglasHurley from "../assets/crew/image-douglas-hurley.webp"
import imageMarkShuttleworth from "../assets/crew/image-mark-shuttleworth.webp"
import imageVictorGlover from "../assets/crew/image-victor-glover.webp"
import imageAnoushehAnsari from "../assets/crew/image-anousheh-ansari.webp"

const body = document.querySelector("body");

export default function Crew() {
 const buttonNextCrewRef0 = useRef(null);
 const buttonNextCrewRef1 = useRef(null);
 const buttonNextCrewRef2 = useRef(null);
 const buttonNextCrewRef3 = useRef(null);

 const butonNextCrewsRef = useMemo(() => [buttonNextCrewRef0, buttonNextCrewRef1, buttonNextCrewRef2, buttonNextCrewRef3], []);

 const initalDataCrewActive = {
  index: "0",
  crewRole: "Commander",
  crewName: "Douglas Hurley",
  crewImage: imageDouglasHurley,
  crewBio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
 }

 const [userClickedNextDataCrew, setUserClickedNextDataCrew] = useState(initalDataCrewActive);

 const getCrewDataHandler = (ref) => {
  sessionStorage.setItem("dataCrewActive", JSON.stringify(ref.dataset));
  setUserClickedNextDataCrew(ref.dataset);

  butonNextCrewsRef.map(butonNextCrewRef => {
   if (butonNextCrewRef.current.dataset.index === ref.dataset.index) {
    butonNextCrewRef.current.classList.add("bg-white");
   } else {
    butonNextCrewRef.current.classList.remove("bg-white");
    butonNextCrewRef.current.classList.add("bg-slightly-transparent-white-2");
   }
  })
 }

 useEffect(() => {
  const items = JSON.parse(sessionStorage.getItem("dataCrewActive"));

  if (items) {
   setUserClickedNextDataCrew(items);

   butonNextCrewsRef.map(butonNextCrewRef => {
    if (butonNextCrewRef.current.dataset.index === items.index) {
     butonNextCrewRef.current.classList.add("bg-white");
    } else {
     butonNextCrewRef.current.classList.remove("bg-white");
     butonNextCrewRef.current.classList.add("bg-slightly-transparent-white-2");
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
   body.style.overflow = "visible";
  } else if (window.innerWidth > 767 && window.innerWidth < 1023) {
   body.style.backgroundImage = `url(${backgroundImageTablet})`;
   body.style.minWidth = "100vw";
   body.style.minHeight = "100vh";
   body.style.backgroundSize = "cover";
   body.style.backgroundPosition = "center";
   body.style.backgroundRepeat = "no-repeat";
  } else if (window.innerWidth > 1023) {
   body.style.backgroundImage = `url(${backgroundImageDesktop})`;
   body.style.minWidth = "100vw";
   body.style.minHeight = "100vh";
   body.style.backgroundSize = "cover";
   body.style.backgroundPosition = "center";
   body.style.backgroundRepeat = "no-repeat";
  }

  window.addEventListener("resize", () => {
   if (window.innerWidth > 0 && window.innerWidth < 767) {
    body.style.backgroundImage = `url(${backgroundImageMobile})`;
    body.style.minWidth = "100vw";
    body.style.minHeight = "100vh";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.overflow = "visible";
   } else if (window.innerWidth > 767 && window.innerWidth < 1023) {
    body.style.backgroundImage = `url(${backgroundImageTablet})`;
    body.style.minWidth = "100vw";
    body.style.minHeight = "100vh";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat"
   } else if (window.innerWidth > 1023) {
    body.style.backgroundImage = `url(${backgroundImageDesktop})`;
    body.style.minWidth = "100vw";
    body.style.minHeight = "100vh";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
   }
  })
 }, [butonNextCrewsRef])
 return (
  <>
   <section className="crew px-[1.3rem] pt-3 md:pt-10 text-white md:px-12 lg:px-24 pb-5">
    <p className="uppercase relative before:content-['02'] before:mr-2 before:text-slightly-transparent-white-2 tracking-widest text-sm sm:text-lg lg:text-2xl lg:px-0">Meet Your Crew</p>

    <div className="pt-5 text-center text-white space-y-7 md:text-left md:flex md:flex-row-reverse md:items-center md:gap-2 md:pt-10 lg:pt-0">
     {/* Crew Image */}
     <div className="md:flex-1 animate__animated animate__fadeIn">
      <img src={userClickedNextDataCrew.crewImage} className="w-32 mx-auto sm:w-32 mobile-l:w-44 md:w-[19rem] lg:w-[25rem]" alt="Douglas Hurley" />
     </div>

     {/* Background Story Crew */}
     <div className="space-y-7 md:flex-1 md:space-y-0 md:flex md:flex-col-reverse animate__animated animate__fadeIn">
      <div className="flex items-center justify-center gap-3 md:justify-start">

       <span data-crew-name="Douglas Hurley" data-crew-image={imageDouglasHurley} data-crew-role="Commander" data-crew-bio="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2." ref={buttonNextCrewRef0} onClick={() => getCrewDataHandler(buttonNextCrewRef0.current)} data-index="0" className="w-3 h-3 bg-white rounded-full cursor-pointer"></span>

       <span data-crew-name="Mark Shuttleworth" data-crew-image={imageMarkShuttleworth} data-crew-role="Mission Specialist" data-crew-bio="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist." ref={buttonNextCrewRef1} onClick={() => getCrewDataHandler(buttonNextCrewRef1.current)} data-index="1" className="w-3 h-3 rounded-full cursor-pointer bg-slightly-transparent-white-2"></span>

       <span data-crew-name="Victor Glover" data-crew-image={imageVictorGlover} data-crew-role="Pilot" data-crew-bio="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer." ref={buttonNextCrewRef2} onClick={() => getCrewDataHandler(buttonNextCrewRef2.current)} data-index="2" className="w-3 h-3 rounded-full cursor-pointer bg-slightly-transparent-white-2"></span>

       <span data-crew-name="Anousheh Ansari" data-crew-image={imageAnoushehAnsari} data-crew-role="Flight Engineer" data-crew-bio="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space." ref={buttonNextCrewRef3} onClick={() => getCrewDataHandler(buttonNextCrewRef3.current)} data-index="3" className="w-3 h-3 rounded-full cursor-pointer bg-slightly-transparent-white-2"></span>
      </div>

      <div className="space-y-4 md:space-y-5">
       <p className="text-sm tracking-widest uppercase text-slightly-transparent-white-2 sm:text-lg lg:text-3xl">{userClickedNextDataCrew.crewRole}</p>
       <h2 className="text-4xl font-bold tracking-widest uppercase md:text-6xl">{userClickedNextDataCrew.crewName}</h2>
       <p className="leading-6 text-sm tracking-wide mobile-l:text-lg mobile-l:max-w-[34.375rem] mobile-l:mx-auto md:text-lg md:pt-4 md:pb-10 lg:text-xl lg:max-w-[30rem] lg:m-0">{userClickedNextDataCrew.crewBio}.</p>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}
