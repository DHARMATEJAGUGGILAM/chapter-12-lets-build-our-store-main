import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Instamart",
    path: "/instamart",
  },
  {
    title: "Help",
    path: "/help",
  },
];

export const Title = () => {
  return (
    <Link to="/">
      {" "}
      <img className="logo ml-2.5 w-[70px]" alt={"logo"} src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" />{" "}
    </Link>
  );
};


export const NavComponent = () => {
  const navigate = useNavigate();
  const isOnline = useOnline();
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  console.log("Header:", totalItemsCount);
  const [menuActive, setMenuActive] = useState(false);

  const closeMenu = () => {
    const menu = document.querySelector(".menu-content-container");
    menu.classList.remove("active");
    menu.classList.add("false");
    setMenuActive(!menuActive);
  };


  return (
    <div className="flex items-center justify-between">
      <div
        className={`menu-content-container flex items-center pr-7  ${
          menuActive && "active"
        }`}
      >
        <ul
          className={`h-full lg:flex xl:flex md:flex items-center pr-5 ${
            !menuActive && "hidden"
          }  ${menuActive && "flex flex-col flex-start "}`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="p-2.5">
              <Link to={link.path}>
                <button className="nav--btn">{link.title}</button>
              </Link>
            </li>
          ))}
          <li className="p-2.5">
            <Link to="/cart">
              {" "}
              <button className="nav--btn">
                {" "}
                Cart{" "}
                <span className="text-orange font-bold pl-1">
                  {totalItemsCount}
                </span>{" "}
              </button>{" "}
            </Link>
          </li>

        </ul>
      </div>
      <AiOutlineMenu
        className="lg:hidden xl:hidden md:hidden flex w-[65px] text-base text-blue-dark cursor-pointer "
        onClick={() => {
          console.log("icon");
          closeMenu();
          setMenuActive(!menuActive);
        }}
      />
    </div>
  );
};

export const Header = () => {
  return (
    <div className="flex justify-between bg-white shadow fixed top-0 left-0 w-full h-[70px] z-50">
      <Title />
      <NavComponent />
    </div>
  );
};

export default Header;
