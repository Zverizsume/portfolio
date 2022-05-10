import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingPage from '../components/loadingPage';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp ({ Component, emotionCache = clientSideEmotionCache, pageProps }) {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => {
      setTimeout(setLoading(false), 10000);
    }
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <LoadingPage loading={loading} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};