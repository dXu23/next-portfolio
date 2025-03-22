import Image from "next/image";
import styles from "../styles/Header.module.scss";
import { Poppins } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsGearFill } from "react-icons/bs";

import React from "react";

import SettingsPicker from "./SettingsPicker";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const router = useRouter();

  // @ts-ignore
  const [settingsHidden, setIsSettingsHidden] = React.useState(true);

  const [navHidden, setNavHidden] = React.useState(true);

  function toggleSettingsVisibility() {
    setIsSettingsHidden((prevSettingsHidden: boolean) => !prevSettingsHidden);
  }

  function toggleNavHidden() {
    setNavHidden((prevNavStatus: boolean) => !prevNavStatus);
  }

  return (
    <div className={styles.holder}>
      <SettingsPicker hidden={settingsHidden} />
      <header className={poppins.className + " " + styles.header} role="banner">
        <Image
          src="/logo.svg"
          alt="My Logo"
          className={styles.myLogo}
          width={150}
          height={60}
          priority
        />
        <div className={styles.headerEnd}>
          <nav
            role="navigation"
            className={`${styles.navbar}${
              navHidden ? " " + styles.revealed : ""
            }`}
          >
            <ul>
              <li>
                <Link
                  href="/"
                  className={router.pathname === "/" ? styles.active : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className={router.pathname === "/About" ? styles.active : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Work"
                  className={router.pathname === "/Work" ? styles.active : ""}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={router.pathname === "/blog" ? styles.active : ""}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className={
                    router.pathname === "/Contact" ? styles.active : ""
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button onClick={toggleSettingsVisibility}>
            <BsGearFill />
          </button>
          <button
            className={`${styles.navbarBtn}${
              navHidden ? "" : " " + styles.navbarBtnOpen
            }`}
            onClick={toggleNavHidden}
          >
            <svg className={`${styles.hamburger}`} viewBox="0 0 40 40">
              <rect
                fill="currentColor"
                x="4"
                y="11"
                width="32"
                height="2"
                rx="2"
                ry="1"
              />
              <rect
                fill="currentColor"
                x="4"
                y="19"
                width="32"
                height="2"
                rx="2"
                ry="1"
              />
              <rect
                fill="currentColor"
                x="4"
                y="27"
                width="32"
                height="2"
                rx="2"
                ry="1"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
