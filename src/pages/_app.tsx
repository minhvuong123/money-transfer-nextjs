import '@/src/styles/globals.css'
import "@fontsource/open-sans";
import { AppPropsWithLayout } from '../types';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return getLayout(<Component {...pageProps} />);
}
