import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';

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
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor)
  });

  return (
    <div className={`navbar top-0 mb-2 fixed w-full text-black z-50 ${changeNavbarColor ? 'shadow-lg bg-white' : 'bg-transparent '}`}>
      <div className={"flex-1 px-2 mx-2"}>
        <span className={"text-lg font-bold"}>
          Manuk
        </span>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <Link to={"/tour"} className="btn btn-ghost btn-sm rounded-btn">
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
          <FiMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;