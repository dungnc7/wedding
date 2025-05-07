import '@/app/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out',
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;