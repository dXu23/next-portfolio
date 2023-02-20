// @ts-ignore
import { createContext, useState, ReactChild } from 'react';
import { Theme, Scheme, Settings } from '../types';
import useLocalStorage from './useLocalStorage';

const SettingsContext = createContext<{
  settings: Settings,
  changeSettings: (key: string, val: string) => void
}>({
  settings: { theme: 'default', scheme: 'dark' },
  changeSettings: (key: string, val: string) => {} 
});

function useSettings() {
  return useLocalStorage<Settings>('dx-settings', { theme: 'default', scheme: 'dark' });
}

const SettingsProvider = ({ children }: { children?: React.ReactNode | React.ReactNode[] }) => {
    const [settings, setSettings] = useSettings();

    function changeSettings(key: string, val: string) {
        setSettings((prevSettings: Settings) => ({ ...prevSettings, [key]: val }));
    }

    return (
      <SettingsContext.Provider value={{ settings, changeSettings }}>
        {children}
      </SettingsContext.Provider>
    );
}

export { SettingsContext, SettingsProvider };
