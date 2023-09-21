import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constant/index";
import { useState } from "react";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}></img>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <div className="flex flex-col">
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              onClick={toggleHandler}
            />
            <div className={` ${toggle ? "flex" : "hidden"} absolute top-20 right-0 min-w-[140px] bg-black rounded-md justify-center items-center`}>
              <ul className=" flex justify-center items-center flex-col  gap-4 z-10 ">
                {navLinks.map((item) => {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
