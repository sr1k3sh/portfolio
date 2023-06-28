
import '../app/globals.scss'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <main className={inter.className}>
      <Component {...pageProps}/>
    </main>
  </Provider>
);

export default MyApp;