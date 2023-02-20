// @ts-ignore
import { useContext, useState, useEffect } from 'react';
import { SettingsContext } from './SettingsContext';

const SchemeSwitcher = () => {
    const { settings } = useContext(SettingsContext);
    const [isDark, setIsDark] = useState(settings.scheme === 'dark');

    useEffect(() => {
        setIsDark(settings.scheme === 'dark');
    }, [settings.scheme]);

    let bodyStyles: { [property: string]: string} = {
      transition: 'transform .5s cubic-bezier(.5,1.25,.75,1.25)',
      transformOrigin: 'center',
      cursor: 'pointer'
    };

    if (isDark) {
        bodyStyles = {
          ...bodyStyles,
          transform: 'scale(1.5)'
        };
    };

    return (
      <svg
        width={64} height={64}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="18" fill="currentColor" style={bodyStyles} />
        <circle cx="58" cy="40" r={isDark ? '23' : '0'} fill="var(--background)" />
        <g opacity={isDark ? 0 : 1}>
          <line
            x1="40"
            y1="16"
            x2="40"
            y2="8"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="56.97"
            y1="23.03"
            x2="62.63"
            y2="17.37"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="64"
            y1="40"
            x2="72"
            y2="40"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="56.97"
            y1="56.97"
            x2="62.63"
            y2="62.58"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="64"
            x2="40"
            y2="74"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="23.03"
            y1="56.97"
            x2="16.96"
            y2="62.58"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="40"
            x2="8"
            y2="40"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="23.03"
            y1="23.03"
            x2="17.37"
            y2="17.37"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
};

export default SchemeSwitcher;
