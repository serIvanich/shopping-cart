
export const selectRandomItems = (itemsArray, count) => {
    const copyItemsArray = [...itemsArray]
    let newItemsArray = []
    let i = 0
    if (0 < count < itemsArray.length) {
        while (i < count) {
            ++i
            const index = getRandomInd(copyItemsArray.length)
            newItemsArray.push(copyItemsArray[index])
            copyItemsArray.splice(index, 1)
        }
    } else {
        newItemsArray = itemsArray.slice(i, count)
    }
    return newItemsArray
}
const getRandomInd = (max) => {
    return Math.floor(Math.random() * max);
}
