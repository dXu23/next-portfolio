import '../styles/globals.scss';
import { SettingsProvider } from '../components/SettingsContext';
import { IconContext } from 'react-icons';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
      <SettingsProvider>
        <IconContext.Provider value={{ size: "2.4rem" }}>
          <Component {...pageProps} />
        </IconContext.Provider>
      </SettingsProvider>
    );
}
