export const selectRandomItems = (itemsArray, count) => {
  const copyItemsArray = [...itemsArray]
  let newItemsArray = []
  let i = 0

  const getRandomInd = (max) => {
    Math.floor(Math.random() * max)
  }

  if (count > 0 < itemsArray.length) {
    while (i < count) {
      i += 1
      const index = getRandomInd(copyItemsArray.length)
      newItemsArray.push(copyItemsArray[index])
      copyItemsArray.splice(index, 1)
    }
  } else {
    newItemsArray = itemsArray.slice(i, count)
  }
  return newItemsArray
}
