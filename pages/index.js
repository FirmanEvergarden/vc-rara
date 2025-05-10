// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/mutasi');
        const json = await res.json();
        setData(json);
      } catch {
        setData({});
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}