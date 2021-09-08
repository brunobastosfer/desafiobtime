import React, { useEffect, useState } from 'react';
import medalContext from './medalContext';

const Provider = ({ children }) => {
  const [useMedals, setMedals] = useState([]);

  const getMedals = async() => {
    const request = await fetch('./medalists.json', {
      headers: {
        Accept: 'application/json',
      },
    });
    const resolve = await request.json();
    setMedals(resolve)
  }

  useEffect(() => {
    getMedals()
  }, [])

  return (
    <medalContext.Provider value={useMedals}>
      {children}
    </medalContext.Provider>
  )
}

export default Provider;