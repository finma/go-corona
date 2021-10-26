import { Transition } from "@headlessui/react";
import Image from "next/image";
import type { VFC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#support", label: "Support" },
  { href: "/#contact-us", label: "Contact Us" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  const changeBG = () => {
    if (window.scrollY > 70) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  };

  useEffect(() => {
    changeBG();
    window.addEventListener("scroll", changeBG);
  }, [hasScroll]);

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <header className="fixed z-50 w-full">
      <nav className={`${hasScroll ? "bg-white" : "bg-transparent"} px-[100px]  dark:bg-gray-800`}>
        <div className="mx-auto">
          <div className="flex justify-between items-center h-16">
            <div className=" flex justify-between items-center w-full">
              <a className="md:flex-shrink-0 -ml-3" href="/">
                <Image width={140} height={40} className="" src="/icons/logo.svg" alt="GoCorona" />
              </a>
              <div className="hidden md:block">
                <div className="flex items-center ml-10 space-x-4 w-full">
                  {items.map(({ href, label }) => {
                    return (
                      <NavLink key={href} href={href} activeClassName="text-[#EC5863]">
                        <a className="py-2 px-[10px] font-menu text-xs hover:text-[#EC5863] font-extrabold tracking-widest leading-3 text-gray-500 dark:hover:text-white uppercase rounded-md">
                          {label}
                        </a>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <Button label="Download" color="blue" />
            </div>
            <div className="flex md:hidden -mr-2">
              <button
                type="button"
                onClick={handleShowMenu}
                className="inline-flex justify-center items-center p-2 text-gray-800 hover:text-gray-300 dark:text-white rounded-md focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isShowMenu}
          enter="transition ease-in-out duration-150"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-150"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="md:hidden">
            <div className="px-2 sm:px-3 pt-2 pb-3 space-y-1">
              {items.map(({ href, label }) => {
                return (
                  <NavLink key={href} href={href} activeClassName="text-[#EC5863]">
                    <a className="py-2 px-[10px] font-menu text-xs hover:text-[#EC5863] font-extrabold tracking-widest leading-3 text-gray-500 dark:hover:text-white uppercase rounded-md">
                      {label}
                    </a>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </Transition>
      </nav>
    </header>
  );
};
