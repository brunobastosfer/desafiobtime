import React from "react";

const Home  = ({words}) => {
  const removeRepeats = (array) => {
    const countries = array.map((item) => item.map((item) => item.country))
    const removeRepeats = countries.map((item) => item[0])
    return removeRepeats
  }
  removeRepeats(words)
  return (
    <div>
      {/* <h1>{item.country}</h1> */}
    </div>
  )
}

export default Home;