import { useEffect } from 'react';
import { useApp } from '../contexts/AppContext';

declare global {
  interface Window {
    _smartsupp: any;
    smartsupp: any;
  }
}

export function SmartSuppChat() {
  const { config } = useApp();

  useEffect(() => {
    if (!config?.smartsuppKey) return;

    // Wait for the page to fully load
    if (document.readyState === 'complete') {
      initializeSmartsupp();
    } else {
      window.addEventListener('load', initializeSmartsupp);
      return () => window.removeEventListener('load', initializeSmartsupp);
    }

    function initializeSmartsupp() {
      if (window.smartsupp || !config?.smartsuppKey) return;

      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = config.smartsuppKey;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://www.smartsuppchat.com/loader.js?';

      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    }
  }, [config]);

  return null;
}
