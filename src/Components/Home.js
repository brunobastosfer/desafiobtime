import React, { useContext } from "react";
import medalContext from "../Context/medalContext";
import Words from './Words';

const Home  = () => {
  const apiMedals = useContext(medalContext)

  const GroupBy = (array, prop) => {
    return array.reduce(function (acc, obj) {
      let key = obj[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  const orderByMedals = (object) => {
    return Object.values(object).sort(function(a,b) {
      if(a.length > b.length) return -1;
      if(a.length < b.length) return 1;
      return 0;
  });
  }

  return (
    <>
      {
        apiMedals.length > 0 
        ? <Words words={orderByMedals(GroupBy(apiMedals, 'country'))}/>
        : <h1>Carregando...</h1>
      }
    </>
  )
}

export default Home;