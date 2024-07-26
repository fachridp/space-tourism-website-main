/* eslint-disable react/no-unescaped-entities */
import { useEffect, useMemo, useRef, useState } from "react";
import 'animate.css';

import backgroundImageMobile from "../assets/technology/background-technology-mobile.jpg"
import backgroundImageTablet from "../assets/technology/background-technology-tablet.jpg"
import backgroundImageDesktop from "../assets/technology/background-technology-desktop.jpg"

import imageLaunchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg"
import imageSpacePortLandscape from "../assets/technology/image-spaceport-landscape.jpg"
import imageSpaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg"

import imageLaunchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg"
import imageSpacePortPortrait from "../assets/technology/image-spaceport-portrait.jpg"
import imageSpaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg"

const body = document.querySelector("body");

export default function Technology() {
 const [orientationImage, setOrientationImage] = useState("landscape");
 const initialSpaceLunchActive = {
  spaceLunchImagePortrait: imageLaunchVehiclePortrait,
  spaceLunchImageLandscape: imageLaunchVehicleLandscape,
  spaceLunchName: "LAUNCH VEHICLE",
  spaceLunchDescriptive: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
 }
 const [spaceLunch, setSpaceLunch] = useState(initialSpaceLunchActive);

 const imageSpaceLaunchRef = useRef(null);
 const buttonNextSpaceLunchRef1 = useRef(null);
 const buttonNextSpaceLunchRef2 = useRef(null);
 const buttonNextSpaceLunchRef3 = useRef(null);
 const butonNextSpaceLunchsRef = useMemo(() => [buttonNextSpaceLunchRef1, buttonNextSpaceLunchRef2, buttonNextSpaceLunchRef3], []);

 const spaceLunchActiveHandler = (ref) => {
  setSpaceLunch(ref.dataset);
  sessionStorage.setItem("spaceLunchActive", JSON.stringify(ref.dataset));

  butonNextSpaceLunchsRef.map(butonNextSpaceLunchRef => {
   if (butonNextSpaceLunchRef.current.dataset.spaceLunchName === ref.dataset.spaceLunchName) {
    butonNextSpaceLunchRef.current.classList.add("bg-white");
    butonNextSpaceLunchRef.current.classList.add("text-black");
    butonNextSpaceLunchRef.current.classList.remove("text-white");
   } else {
    butonNextSpaceLunchRef.current.classList.remove("bg-white");
    butonNextSpaceLunchRef.current.classList.add("text-white");
    butonNextSpaceLunchRef.current.classList.remove("text-black");
   }
  });
 }

 useEffect(() => {
  const items = JSON.parse(sessionStorage.getItem("spaceLunchActive"));

  if (items) {
   setSpaceLunch(items);

   butonNextSpaceLunchsRef.map(butonNextSpaceLunchRef => {
    if (butonNextSpaceLunchRef.current.dataset.spaceLunchName === items.spaceLunchName) {
     // bg-white text-black
     butonNextSpaceLunchRef.current.classList.add("bg-white");
     butonNextSpaceLunchRef.current.classList.add("text-black");
    } else {
     butonNextSpaceLunchRef.current.classList.remove("text-black");
     butonNextSpaceLunchRef.current.classList.remove("bg-white");
    }
   });
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
   setOrientationImage("landscape");
  } else if (window.innerWidth > 767 && window.innerWidth < 1023) {
   body.style.backgroundImage = `url(${backgroundImageTablet})`;
   body.style.minWidth = "100vw";
   body.style.minHeight = "100vh";
   body.style.backgroundSize = "cover";
   body.style.backgroundPosition = "center";
   body.style.backgroundRepeat = "no-repeat";
   body.style.overflowY = "visible";
   body.style.overflowX = "hidden";
   setOrientationImage("landscape");
  } else if (window.innerWidth > 1023) {
   body.style.backgroundImage = `url(${backgroundImageDesktop})`;
   body.style.minWidth = "100vw";
   body.style.minHeight = "100vh";
   body.style.backgroundSize = "cover";
   body.style.backgroundPosition = "center";
   body.style.backgroundRepeat = "no-repeat";
   setOrientationImage("portrait");
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
    setOrientationImage("landscape");
   } else if (window.innerWidth > 767 && window.innerWidth < 1023) {
    body.style.backgroundImage = `url(${backgroundImageTablet})`;
    body.style.minWidth = "100vw";
    body.style.minHeight = "100vh";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat"
    body.style.overflowY = "visible";
    body.style.overflowX = "hidden";
    setOrientationImage("landscape");
   } else if (window.innerWidth > 1023) {
    body.style.backgroundImage = `url(${backgroundImageDesktop})`;
    body.style.minWidth = "100vw";
    body.style.minHeight = "100vh";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    setOrientationImage("portrait");
   }
  });
 }, [butonNextSpaceLunchsRef]);
 return (
  <>
   <section className="pt-3 pb-5 text-white technology md:pt-10 lg:px-24 laptop-l:pl-[6.88rem] lg:pr-0">
    <p className="px-[1.3rem] uppercase relative before:content-['03'] before:mr-2 before:text-slightly-transparent-white-2 tracking-widest text-sm sm:text-lg lg:text-2xl lg:px-0">Space Launch 101</p>

    <div className="pt-5 text-center text-white space-y-7 lg:flex lg:space-y-0 lg:flex-row-reverse lg:text-left lg:items-center lg:gap-5 xl:gap-0">
     {/* Technology Image */}
     <div className="lg:basis-[25rem] animate__animated animate__fadeIn">
      {orientationImage === "portrait" ?
       <img ref={imageSpaceLaunchRef} className="mx-auto" src={spaceLunch.spaceLunchImagePortrait} alt={`Image of ${spaceLunch.spaceLunchName}`} />
       :
       <img ref={imageSpaceLaunchRef} className="mx-auto" src={spaceLunch.spaceLunchImageLandscape} alt={`Image of ${spaceLunch.spaceLunchName}`} />
      }
     </div>

     {/* Technology Description */}
     <div className="px-[1.3rem] space-y-6 lg:flex lg:gap-8 lg:text-lg lg:flex-1 lg:pl-0 animate__animated animate__fadeIn">
      {/* Next Button Image */}
      <div className="flex items-center justify-center gap-3 lg:flex-col lg:justify-evenly">
       <span ref={buttonNextSpaceLunchRef1} onClick={() => spaceLunchActiveHandler(buttonNextSpaceLunchRef1.current)} className="bg-white text-black cursor-pointer w-9 h-9 bg-transparent border-[1px] rounded-full border-slightly-transparent-white-2 text-center place-content-center flex justify-center items-center lg:w-14 lg:h-14 lg:text-2xl" data-space-lunch-image-landscape={imageLaunchVehicleLandscape} data-space-lunch-image-portrait={imageLaunchVehiclePortrait} data-space-lunch-name="Launch vehicle" data-space-lunch-descriptive="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!">
        1
       </span>

       <span ref={buttonNextSpaceLunchRef2} onClick={() => spaceLunchActiveHandler(buttonNextSpaceLunchRef2.current)} className="flex justify-center items-center cursor-pointer w-9 h-9 bg-transparent border-[1px] rounded-full border-slightly-transparent-white-2 text-center place-content-center lg:w-14 lg:h-14 lg:text-2xl" data-space-lunch-image-landscape={imageSpacePortLandscape} data-space-lunch-image-portrait={imageSpacePortPortrait} data-space-lunch-name="Spaceport" data-space-lunch-descriptive="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.">2</span>

       <span ref={buttonNextSpaceLunchRef3} onClick={() => spaceLunchActiveHandler(buttonNextSpaceLunchRef3.current)} className="flex justify-center items-center cursor-pointer w-9 h-9 bg-transparent border-[1px] rounded-full border-slightly-transparent-white-2 text-center place-content-center lg:w-14 lg:h-14 lg:text-2xl" data-space-lunch-image-landscape={imageSpaceCapsuleLandscape} data-space-lunch-image-portrait={imageSpaceCapsulePortrait} data-space-lunch-name="Space capsule" data-space-lunch-descriptive="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.">3</span>
      </div>

      <div className="space-y-2 lg:space-y-0 xl:max-w-[26.034rem]">
       <p className="text-sm tracking-widest uppercase sm:text-lg lg:text-base lg:px-0">The Terminology...</p>
       <h2 className="text-3xl uppercase sm:text-4xl lg:text-5xl lg:pb-2">{spaceLunch.spaceLunchName}</h2>
       <p>{spaceLunch.spaceLunchDescriptive}</p>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}
