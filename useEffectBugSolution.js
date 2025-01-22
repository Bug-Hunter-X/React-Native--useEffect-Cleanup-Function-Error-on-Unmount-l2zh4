import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMounted) {
        setData('Data fetched');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      setIsMounted(false); // set isMounted to false before cleanup 
    };
  }, []);

  return (
    <div>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MyComponent;

