import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// @ts-ignore
import { useContext } from 'react';

import styles from '../styles/Home.module.scss';
import { FaLinkedinIn, FaGithubSquare, FaTwitter } from 'react-icons/fa';

import Base from '../components/Base';
import { SettingsContext } from '../components/SettingsContext';


export default function Home() {
  const { settings } = useContext(SettingsContext);

  return (
    <>
      <Base>
        <main id={styles["main"]}>
          <div id={styles["animated-logo"]}>
            <div id={styles["animated-logo__wedge"]}>
              <div id={styles["animated-logo__text"]}>
                <p id={styles["name"]}>Daniel X</p>
                <span id={styles["D"]}>D</span>
                <p id={styles["info"]}>Front End Dev | Chicago, IL</p>
              </div>
            </div>
            <div id={styles.icons}>
              {/* 
              // @ts-ignore */}
              <Link href="https://github.com/dXu23" className={styles.iconShadow}>
                <FaGithubSquare />
              </Link>
              {/* 
              // @ts-ignore */}
              <Link href="https://linkedin.com/in/dan-x" className={styles.iconShadow}>
                <FaLinkedinIn/>
              </Link>
              {/* 
              // @ts-ignore */}
              <Link href="https://twitter.com/dydevx" className={styles.iconShadow}>
                <FaTwitter/>
              </Link>
            </div>
          </div>
          <p className={styles.intro}>
            I develop and design user experiences to meet their needs and wants. 
          </p>
        </main>
      </Base>
    </>
  )
}
