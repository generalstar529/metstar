"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMenu } from "@/types";
import { Input, Icon, AnimatedButton } from "@/components/utils";
import imgLogo from "@/assets/images/logo.png";
import whiteImgLogo from "@/assets/images/white-text-transparent-logo.png";

const MENUS: IMenu[] = [
  {
    title: "CULTURE",
    path: "/culture",
  },
  {
    title: "CAPABILITIES",
    path: "/capabilities",
  },
  {
    title: "CONTACT US",
    path: "/contact",
  },
];

interface ILink {
  name: string;
  path: string;
}

const links: ILink[] = [
  { name: "CAPABILITIES DIRECTORY", path: "/capabilities-catalog" },
  // { name: "INVESTOR RELATIONS", path: ''},
  { name: "CONTACT US", path: "/contact" },
];

interface ISummaryItem {
  title: string;
  contents: ILink[];
  link: string;
}

const summarys: ISummaryItem[] = [
  {
    title: "CULTURE",
    contents: [
      { name: "Leadership", path: "/culture/leadership" },
      { name: "About Us", path: "/aboutus" },
      { name: "Diversity & Inclusion", path: "/diversity-inclusion" },
    ],
    link: "/culture",
  },
  {
    title: "CAPABILITIES",
    contents: [
      { name: "Electric Power", path: "/capabilities/electric-power" },
      { name: "Energy Efficiency", path: "/capabilities/energy-efficiency" },
      { name: "Safety", path: "/capabilities/safety" },
      {
        name: "Interior Remodeling",
        path: "/capabilities/interior-remodeling",
      },
      {
        name: "Exterior Remodeling",
        path: "/capabilities/exterior-remodeling",
      },
      { name: "Restoration", path: "/capabilities/restoration" },
      { name: "Generators", path: "/capabilities/generators" },
      {
        name: "Maintenance Subscriptions",
        path: "/capabilities/maintenance-subscriptions",
      },
    ],
    link: "/capabilities",
  },
  // {
  //   title: "CAREERS",
  //   contents: [
  //     { name: "Pay & Benefits", path: "/pay-benefits" },
  //   ],
  //   link: '#'
  // },
  // {
  //   title: "CAMPANIES",
  //   contents: [],
  //   link: ''
  // },
];

export default function Header() {
  const [curPos, setCurPos] = useState<number>(0);
  const [summaryPage, setSummaryPage] = useState<boolean>(false);

  // detect whether user has scrolled down or up
  const scrollHandler = () => {
    setCurPos(window.pageYOffset);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const onClickLink = () => {
    const summaryBtn = document.getElementById("summarybtn");
    summaryBtn?.click();
  };

  return (
    <header>
      <div
        className={`header fixed top-0 w-full flex flex-col z-30 transition-all duration-500 ${
          summaryPage ? "h-full header-bg-summary" : "header-bg"
        }`}
      >
        <div className="w-full bg-black py-5 md:hidden">
          <h2 className="text-white font-bold text-center text-xl">
            301-760-6869
          </h2>
        </div>
        <div className="flex items-center justify-between px-3 py-1">
          {/* Site branding */}
          <a href="/" className="header-icon">
            <Image
              src={summaryPage ? whiteImgLogo : imgLogo}
              width={190}
              height={190}
              alt="Logo"
              style={{ height: "auto" }}
            />
          </a>

          {/* Menu Bar */}
          <div className="flex items-center">
            <div className="header-menuitems flex items-center">
              {MENUS.map((menuItem, idx) => (
                <Link key={idx} href={menuItem.path}>
                  <div
                    key={idx}
                    className={`mx-4 font-bold header-menuitems-item 'text-black`}
                  >
                    {menuItem.title}
                  </div>
                </Link>
              ))}
            </div>
            <div className="header-icons font-bold">
              {/* <Icon icon="bar" className='mx-3' width={40} height={40}/> */}
              <input id="menu-toggle" type="checkbox" />
              <label
                id="summarybtn"
                className="menu-button-container"
                htmlFor="menu-toggle"
                onClick={() => {
                  setSummaryPage(!summaryPage);
                }}
              >
                <div
                  className={`menu-button ${
                    summaryPage ? "" : "menu-button-black"
                  }`}
                ></div>
              </label>
            </div>
            {/* <div className={`header-icons font-bold ${!summaryPage ? "block" : "hidden"}`}>
              <Icon icon="search" className='mx-3' width={30} height={30} />
            </div> */}
          </div>
        </div>
        {!!summaryPage && (
          <div className="header-summary flex-1 grid md:grid-cols-2 xl:grid-cols-2 text-white px-5 py-5">
            {summarys.map((summaryItem, idx) => (
              <div key={idx} className="p-4 flex flex-row justify-between">
                <div className={`w-11/12 ${idx === 1 ? "flex flex-col" : ""}`}>
                  <Link href={summaryItem.link}>
                    <div
                      className="text-3xl font-bold mb-8 header-underline"
                      onClick={() => {
                        setSummaryPage(!summaryPage);
                        onClickLink();
                      }}
                    >
                      {summaryItem.title}
                    </div>
                  </Link>
                  <div className={idx == 1 ? "last-header-menu" : ""}>
                    {summaryItem.contents.map((contentItem, contentIdx) => (
                      <div
                        key={contentIdx}
                        className="p-3 header-underline header-underline-list txt-warning"
                      >
                        <Link href={contentItem.path} onClick={onClickLink}>
                          {contentItem.name}
                        </Link>
                      </div>
                    ))}

                    {idx == 1 && (
                      <div>
                        {links.map((link, idx) => (
                          <Link
                            href={link.path}
                            key={idx}
                            onClick={onClickLink}
                          >
                            <AnimatedButton
                              key={idx}
                              variant="warning"
                              fullWidth={true}
                              icon="arrow-right"
                              className="text-white text-left text-sm my-1"
                            >
                              {link.name}
                            </AnimatedButton>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {idx < 1 ? <div className="header-bar w-11/12"></div> : <></>}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
