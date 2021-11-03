import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [changeNavbarColor, setChangeNavbarColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 180) {
      setChangeNavbarColor(true);
    } else {
      setChangeNavbarColor(false);
    }
  }

  useEffect(() => {
    return () => {
      changeBackgroundColor();
      window.addEventListener("scroll", changeBackgroundColor)
    };
  });

  return (
    <div className={`navbar mb-2 fixed w-full text-black z-50 ${changeNavbarColor ? 'shadow-lg bg-white' : 'bg-transparent'} `}>
      <div className={"flex-1 px-2 mx-2"}>
        <span className={"text-lg font-bold"}>
          Manuk
        </span>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <Link to={"/"} className="btn btn-ghost btn-sm rounded-btn">
            Tour
          </Link>
          <Link to={"/"} className="btn btn-ghost btn-sm rounded-btn">
            Pemandu
          </Link>
          <Link to={"/"} className="btn btn-ghost btn-sm rounded-btn">
            Galeri
          </Link>
          <Link to={"/"} className="btn btn-ghost btn-sm rounded-btn">
            Kontak
          </Link>
        </div>
      </div>
      <div className="lg:hidden sm:flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;