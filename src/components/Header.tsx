import Image from 'next/image';
import styles from '../styles/Header.module.scss';
import { Poppins } from '@next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsGearFill } from 'react-icons/bs';

import React from 'react';

import SettingsPicker from './SettingsPicker';


const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
});

export default function Header() {
    const router = useRouter();

    // @ts-ignore
    const [ settingsHidden, setIsSettingsHidden ] = React.useState(true);

    function toggleSettingsVisibility() {
        setIsSettingsHidden((prevSettingsHidden: boolean) => !prevSettingsHidden);
    }

    return (
      <div className={styles.holder}>
        <SettingsPicker hidden={settingsHidden} />
        <header
          className={poppins.className + ' ' + styles.header}
          role='banner'
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={150}
            height={36}
            priority
          />
          <div className={styles.headerRight}>
            <nav className={styles.navbar}>
              <ul>
                <li><Link href="/" className={router.pathname === '/' ? styles.active : ''}>Home</Link></li>
                <li><Link href="/About" className={router.pathname === '/About' ? styles.active : ''}>About</Link></li>
                <li><Link href="/Work" className={router.pathname === '/Work' ? styles.active : ''}>Work</Link></li>
                <li><Link href="/blog" className={router.pathname === '/blog' ? styles.active : ''}>Blog</Link></li>
                <li><Link href="/Contact" className={router.pathname === '/Contact' ? styles.active : ''}>Contact</Link></li>
              </ul>
            </nav>
            <button onClick={toggleSettingsVisibility}>
              <BsGearFill />
            </button>
          </div>
        </header>
      </div>
    );
}
