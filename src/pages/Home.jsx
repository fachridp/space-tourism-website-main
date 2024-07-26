/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Link } from "react-router-dom";

const body = document.querySelector("body");

import backgroundImageMobile from "../assets/home/background-home-mobile.jpg"
import backgroundImageTablet from "../assets/home/background-home-tablet.jpg"
import backgroundImageDesktop from "../assets/home/background-home-desktop.jpg"

export default function Home() {
 useEffect(() => {
  if (window.innerWidth > 0 && window.innerWidth < 767) {
   body.style.backgroundImage = `url(${backgroundImageMobile})`;
   body.style.minWidth = "100vw";
   body.style.minHeight = "100vh";
   body.style.backgroundSize = "cover";
   body.style.backgroundPosition = "center";
   body.style.backgroundRepeat = "no-repeat";
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
  })
 }, []);
 return (
  <>
   <section className="px-[1.3rem] pt-5 text-white space-y-14 md:pt-16 lg:flex lg:items-center lg:justify-evenly lg:gap-36 lg:pt-48 lg:space-y-0">
    <div className="text-center animate__animated animate__fadeIn lg:text-left">
     <span className="tracking-widest uppercase md:tracking-widest lg:text-[1.4rem]">So, you want to travel to</span>
     <h1 className="pt-3 tracking-[.15em] uppercase pb-7 text-7xl md:text-9xl md:tracking-wider lg:text-8xlxl">Space</h1>
     <p className="text-[0.813rem] leading-6 tracking-wider md:max-w-[26.5rem] md:mx-auto lg:max-w-[23.38rem]">Let's face it: if you want to go to sapce, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
    </div>

    <Link to="/destination" className="font-normal uppercase flex items-center justify-center mx-auto tracking-widest bg-white rounded-full w-28 h-28 text-very-dark-blue lg:m-0 lg:w-[13rem] lg:h-[13rem] lg:text-3xl animate__animated animate__fadeIn">
     Explore
    </Link>
   </section>
  </>
 )
}
