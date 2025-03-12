// AsyncComponent.js
import React, { useEffect, useState } from 'react';

const AsyncComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default AsyncComponent;