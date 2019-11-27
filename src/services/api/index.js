import { useState, useEffect } from 'react';
import { appConfig } from '../../configs';

const AsyncFetch = path => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const call = async () => {
      try {
        const response = await fetch(`${appConfig.apiBaseURL}${path}`);
        const json = await response.json();
        setResult(json);
        setLoading(false);
      } catch (error) {
        setLoading(null);
      }
    };
    path && typeof path === 'string' && call();
  }, [path]);
  return [result, loading];
};

export { AsyncFetch as useAsyncFetch };
