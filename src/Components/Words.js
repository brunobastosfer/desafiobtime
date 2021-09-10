import React from "react";

const Words  = ({words}) => {

  const removeRepeats = (array) => {
    const countries = array.map((item) => item.map((item) => item.country))
    const removeRepeats = countries.map((item) => item[0])
    return removeRepeats
  }
  removeRepeats(words)

  const medalCount = (array, medal) => {
    return array.filter((item) => item.medal === medal)
  }

  const objectGeneration = (words, removeRepeats) => {
    return words.map((item, index) => {
      return {
        country: removeRepeats[index],
        total: item.length,
        position: index+1,
        bronzeMedal: medalCount(item, 'Bronze'),
        silverMedal: medalCount(item, 'Silver'),
        goldMedal: medalCount(item, 'Gold'),
      }
    })
  }

  objectGeneration(words, removeRepeats(words))

  return (
    <div>
      {/* {words && listCountries(words, removeRepeats(words))} */}
    </div>
  )
}

export default Words;