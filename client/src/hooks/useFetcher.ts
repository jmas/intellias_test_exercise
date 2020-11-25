import { useState, useEffect } from 'react';

export const FETCHER_STATUS_IDLE = 'idle';
export const FETCHER_STATUS_FETCHING = 'fetching';

export default function useFetcher<I>(endpoint: string): [I | null, string] {
  const [content, setContent] = useState<I | null>(null);
  const [status, setStatus] = useState<string>(FETCHER_STATUS_IDLE);

  function fetchContent() {
    setStatus(FETCHER_STATUS_FETCHING);
    fetch(endpoint)
      .then(response => response.json())
      .then(items => {
        setStatus(FETCHER_STATUS_IDLE);
        setContent(items as I);
      })
      .catch(error => {
        setStatus(FETCHER_STATUS_IDLE)
        console.error(error);
      });
  }

  useEffect(() => {
    if (endpoint) {
      fetchContent();
    }
  }, [endpoint]);

  return [content, status];
}
