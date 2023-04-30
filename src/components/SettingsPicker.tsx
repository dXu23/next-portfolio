import SchemeSwitcher from './SchemeSwitcher';

// @ts-ignore
import { useContext, useState, useEffect, useCallback } from 'react';
import { SettingsContext } from './SettingsContext';

import { Poppins } from '@next/font/google';
import styles from '../styles/SettingsPicker.module.scss';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
});

export default function SettingsPicker({ hidden }: { hidden: boolean }) {

    const { settings, changeSettings } = useContext(SettingsContext);

    const changeSettingsCallback = useCallback(changeSettings, []);

    function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        changeSettingsCallback(name, value);
    }

    const [isDark, setIsDark] = useState(true);

    function handleSchemeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsDark((prevIsDark: boolean) => !prevIsDark);
    }

    useEffect(() => {
        changeSettings('scheme', isDark ? 'dark' : 'light');
    }, [isDark, changeSettingsCallback]);

    const selectedThemeStyler = (theme: string) =>
        ({
            border: settings.theme === theme ? '1px solid var(--text-primary)' : 'initial'
        });


    return (
      <div className={`${styles.settingsPicker}${hidden ? ` ${styles.settingsPickerHidden}` : ""}`}>
        <div className={styles.themeSettings}>
          <label className={styles.themeSetting} style={selectedThemeStyler('default')}>
            <input
              name="theme"
              type="radio"
              value="default"
              checked={settings.theme === 'default'}
              onChange={handleThemeChange}
            />
            Default
          </label>
          <label className={styles.themeSetting} style={selectedThemeStyler('tomorrow')}>
            <input
              name="theme"
              type="radio"
              value="tomorrow"
              checked={settings.theme === 'tomorrow'}
              onChange={handleThemeChange}
            />
            Tomorrow
          </label>
          <label className={styles.themeSetting} style={selectedThemeStyler('gruvbox')}>
            <input
              name="theme"
              type="radio"
              value="gruvbox"
              checked={settings.theme === 'gruvbox'}
              onChange={handleThemeChange}
            />
            Gruvbox
          </label>
          <label className={styles.themeSetting} style={selectedThemeStyler('ayu')}>
            <input
              name="theme"
              type="radio"
              value="ayu"
              checked={settings.theme === 'ayu'}
              onChange={handleThemeChange}
            />
            Ayu
          </label>
          <label className={styles.themeSetting} style={selectedThemeStyler('solarized')}>
            <input
              name="theme"
              type="radio"
              value="solarized"
              checked={settings.theme === 'solarized'}
              onChange={handleThemeChange}
            />
            Solarized
          </label>
          <label className={styles.themeSetting} style={selectedThemeStyler('material')}>
            <input
              name="theme"
              type="radio"
              value="material"
              checked={settings.theme === 'material'}
              onChange={handleThemeChange}
            />
            Material
          </label>
        </div>
        <div>
          <input
            id="scheme"
            type="checkbox"
            className={styles['hidden']}
            checked={isDark}
            onChange={handleSchemeChange}
          />
          <label htmlFor="scheme">
            <SchemeSwitcher />
            <span className="sr-only">Dark mode?</span>
          </label>
        </div>
      </div>
    );
}
