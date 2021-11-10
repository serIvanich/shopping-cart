
export const selectRandomItems = (itemsArray) => {
    const copyItemsArray = [...itemsArray]
    let count = 0
    const newItemsArray = []
    while (count < 6) {
        ++count
        const index = getRandomInd(copyItemsArray.length)
        newItemsArray.push(copyItemsArray[index])
        copyItemsArray.splice(index, 1)

    }
    return newItemsArray
}
const getRandomInd = (max) => {
    return Math.floor(Math.random() * max);
}
