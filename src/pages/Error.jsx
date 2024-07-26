import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Error() {
 const error = useRouteError();

 return (
  <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 tracking-wide text-center text-white max-wrapper bg-very-dark-blue">
   <h1 className="text-2xl md:text-9xl">Oops! {error.status} {error.statusText} </h1>

   <p className="text-2xl md:text-6xl">Sorry, an unexpected error has occurred.</p>
   <p className="text-2xl md:text-3xl">
    {error.data}
   </p>
   <button className="px-3 py-2 text-lg tracking-wider bg-white rounded-lg md:text-xl text-very-dark-blue">
    <Link to="/">Back to home</Link>
   </button>
  </div>
 )
}
