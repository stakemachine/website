import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NetworksJson } from "../../constants/networks";
import { Network } from "../../types/Types";

export default function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site navigation */}
          <div className="navbar bg-base-100">
            <div className="flex-1 pl-4">
              <Link href="/" className="normal-case text-lg font-medium">
                <span className="p-1">STAKE</span>
                <span className="rounded bg-indigo-500 text-white p-1">
                  MACHINE
                </span>
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 items-center">
                <li>
                  <details>
                    <summary>Stake</summary>
                    <ul className="p-2 bg-base-100">
                      {NetworksJson.map((network: Network, index) => {
                        return (
                          <li key={index}>
                            <Link
                              href={"/networks/" + network.slug}
                              className="text-base font-medium"
                            >
                              {network.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
                <li className="hidden sm:flex">
                  <Link
                    href="https://twitter.com/StakeMachine"
                    className="btn-link"
                    target="blank"
                  >
                    <svg
                      className="w-10 h-10 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                    </svg>
                  </Link>
                </li>
                <li className="hidden sm:flex">
                  <Link
                    href="https://github.com/stakemachine"
                    className="btn-link"
                    target="blank"
                  >
                    <svg
                      className="w-10 h-10 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
