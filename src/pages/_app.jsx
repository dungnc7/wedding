import '@/app/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out',
      disable: 'mobile',
    });
  }, []);

  // Đảm bảo AOS re-initialize khi route thay đổi
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;