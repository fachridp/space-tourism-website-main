import { useState, useRef, useEffect, useMemo } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// Import Icons and Logo Website
import logoWebsite from '../assets/shared/logo.svg'
import iconMenu from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'

export default function Root() {
 const [navbarOpen, setNavbarOpen] = useState(false);
 const [currentNavClicked, setCurrentNavClicked] = useState("home");

 let location = useLocation();

 const navHomeRef = useRef(null);
 const navDestinationRef = useRef(null);
 const navCrewRef = useRef(null);
 const navTechnologyRef = useRef(null);

 const navHomeMobileRef = useRef(null);
 const navDestinationMobileRef = useRef(null);
 const navCrewMobileRef = useRef(null);
 const navTechnologyMobileRef = useRef(null);

 const navlinks = useMemo(() => [navHomeRef, navDestinationRef, navCrewRef, navTechnologyRef], []);
 const navlinksMobile = useMemo(() => [navHomeMobileRef, navDestinationMobileRef, navCrewMobileRef, navTechnologyMobileRef], []);

 // Navbar Toggler
 const navbarToggler = () => {
  setNavbarOpen(!navbarOpen);
 }

 // Overwrite Navbar Active State Based on current URL (Desktop)
 const navbarActiveHandler = (ref) => {
  setCurrentNavClicked(ref.innerText.toLowerCase());
 }

 // Overwrite Navbar Active State Based on current URL (Mobile)
 const navbarMobileActiveHandler = (ref) => {
  setCurrentNavClicked(ref.innerText.toLowerCase());

  // Close the Mobile Navbar
  setNavbarOpen(false);
 }

 // Store Current Navbar Active State in Session Storage
 if (location.pathname.slice(1) === currentNavClicked) {
  sessionStorage.setItem("navbarActive", currentNavClicked);
 } else if (location.pathname.slice(1).length === 0) {
  sessionStorage.setItem("navbarActive", "home");
 }

 useEffect(() => {
  // Whatever User Access the Website Route, it Will be Stored in Session Storage
  if (location.pathname.slice(1).length !== 0) {
   sessionStorage.setItem("navbarActive", location.pathname.slice(1));
  }

  // Navbar Desktop Active State Handler
  navlinks.map((navLink, index) => {
   if (sessionStorage.getItem("navbarActive") === navLink.current.innerText.toLowerCase() || sessionStorage.getItem("navbarActive") === navlinksMobile[index].current.innerText) {
    navLink.current.classList.add("after:w-full");

    // Sync with Mobile Navbar
    navlinksMobile[index].current.classList.add("after:w-full");
   } else {
    navLink.current.classList.remove("after:w-full");

    // Sync with Mobile Navbar
    navlinksMobile[index].current.classList.remove("after:w-full");
   }
  });

  // Navbar Mobile Active State Handler
  navlinksMobile.map((navlinkMobile, index) => {
   if (sessionStorage.getItem("navbarActive") === navlinkMobile.current.innerText.toLowerCase() || sessionStorage.getItem("navbarActive") === navlinks[index].current.innerText) {
    navlinkMobile.current.classList.add("after:w-full");

    // Sync with Desktop Navbar (adding)
    navlinks[index].current.classList.add("after:w-full");
   } else {
    navlinkMobile.current.classList.remove("after:w-full");

    // Sync with Desktop Navbar (remove)
    navlinks[index].current.classList.remove("after:w-full");
   }
  })

 }, [navlinks, navlinksMobile, location.pathname]);

 return (
  <>
   <header className='relative'>
    <nav className='flex items-center justify-between px-5 py-4 bg-transparent md:px-0 md:py-0 max-wrapper lg:py-4'>
     {/* Logo */}
     <div className='md:pl-7'>
      <img className='w-8 lg:w-[6.12rem]' src={logoWebsite} alt="Website Logo" />
     </div>

     {/* Just an Empty Tag to Make a Line for Decoration Purpose */}
     <div className='hidden lg:block lg:relative lg:w-full lg:z-40 lg:h-[.01rem] lg:bg-slate-600 lg:ml-10'>
     </div>

     {/* Desktop and Tablet Navigation */}
     <ul className='hidden bg-very-dark-blue md:items-center md:flex md:gap-5 md:py-6 md:px-10 lg:px-20 xl:px-32 xl:gap-10 lg:bg-transparent lg:backdrop-filter lg:backdrop-blur-3xl lg:relative lg:z-20'>
      <li>
       <Link to="/" ref={navHomeRef} onClick={() => navbarActiveHandler(navHomeRef.current)} className='relative nav-link-active after:w-full lg:before:content-["00"] lg:before:mr-2'>Home</Link>
      </li>
      <li><Link to="/destination" ref={navDestinationRef} onClick={() => navbarActiveHandler(navDestinationRef.current)} className='relative nav-link-active lg:before:content-["01"] lg:before:mr-2'>Destination</Link></li>
      <li><Link to="/crew" ref={navCrewRef} onClick={() => navbarActiveHandler(navCrewRef.current)} className='relative nav-link-active lg:before:content-["02"] lg:before:mr-2'>Crew</Link></li>
      <li><Link to="/technology" ref={navTechnologyRef} onClick={() => navbarActiveHandler(navTechnologyRef.current)} className='relative nav-link-active lg:before:content-["03"] lg:before:mr-2'>Technology</Link></li>
     </ul>

     {/* Mobile Navigation */}
     <div className='flex items-center justify-center md:hidden' onClick={navbarToggler}>
      {navbarOpen ? '' : <button>
       <img className='w-5' src={iconMenu} alt="Icon Menu" />
      </button>}
     </div>

     {/* Mobile Navigation Menu */}
     <div className={`${navbarOpen ? 'flex flex-col px-5 py-5 gap-6 items-center bg-very-dark-blue right-0 top-0 h-screen w-screen absolute z-50 md:hidden' : 'hidden'}`}>
      <button onClick={navbarToggler} className={`${navbarOpen ? 'flex items-center justify-center place-self-end' : 'hidden'}`}>
       <img className='w-5' src={iconClose} alt="Icon Close" />
      </button>

      <ul className='flex flex-col items-center w-screen h-screen gap-10 py-10'>
       <li>
        <Link to="/" ref={navHomeMobileRef} onClick={() => navbarMobileActiveHandler(navHomeMobileRef.current)} className='relative nav-link-mobile-active after:w-full'>
         Home
        </Link>
       </li>
       <li>
        <Link to="/destination" ref={navDestinationMobileRef} onClick={() => navbarMobileActiveHandler(navDestinationMobileRef.current)} className='relative nav-link-mobile-active'>
         Destination
        </Link>
       </li>
       <li><Link to="/crew" ref={navCrewMobileRef} onClick={() => navbarMobileActiveHandler(navCrewMobileRef.current)} className='relative nav-link-mobile-active'>
        Crew
       </Link></li>
       <li>
        <Link to="/technology" ref={navTechnologyMobileRef} onClick={() => navbarMobileActiveHandler(navTechnologyMobileRef.current)} className='relative nav-link-mobile-active'>
         Technology
        </Link>
       </li>
      </ul>
     </div>
    </nav>
   </header>

   <main>
    <Outlet />
   </main>
  </>
 )
}
