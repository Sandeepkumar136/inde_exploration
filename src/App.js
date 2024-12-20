import React, { useEffect, useState } from 'react';
import "./UI/Style.css";
import Navbar from './components/Navbar';
import { getAccessToken } from './utils/API';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  return (
    <div>
      <Navbar />
      {accessToken && <div>Access Token: {accessToken}</div>}
    </div>
  );
}

export default App;

