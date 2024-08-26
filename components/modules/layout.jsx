import { useState, useEffect } from 'react';
import { useAppContext } from 'context/state';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const appContext = useAppContext();
  const [disableView, setDisableView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    appContext.setHistory([...appContext.history, router.asPath])
  }, [router.asPath])

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    if (appContext.mobileMenu && width <= 850) {
      setDisableView(true);
    } else {
      setDisableView(false);
    }
  }, [appContext.mobileMenu]);

  return <div className={`${disableView ? `pointer-events-none` : ''}`}>{children}</div>;
}
 