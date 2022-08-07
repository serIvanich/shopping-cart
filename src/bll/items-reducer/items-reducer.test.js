import { itemsActions, itemsReducer } from './index'

const { getItems } = itemsActions

let startState

beforeEach(() => {
  startState = {
    itemsArray: [],
  }
})
test('correctly data should be added  to the state', () => {
  const newItems = [
    {
      name: 'Grapes',
      category: 'FRUITS',
      price: 20.49,
    },
    {
      name: 'Pears',
      category: 'Fruits',
      price: 1.35,
    },
    {
      name: 'Team',
      category: 'Drinks',
      price: 0.4,
    },
  ]
  const action = { type: getItems.fulfilled.type, payload: newItems }
  const endState = itemsReducer(startState, action)
  expect(endState.itemsArray[1].name).toBe('Pears')
})

test('should be need length after added data', () => {
  const newItems = [
    {
      name: 'Grapes',
      category: 'FRUITS',
      price: 20.49,
    },
    {
      name: 'Tomatos',
      category: 'vegetables',
      price: 6.39,
    },
    {
      name: 'Coffee',
      category: 'Drinks',
      price: 3.15,
    },
    {
      name: 'Pears',
      category: 'Fruits',
      price: 1.35,
    },
    {
      name: 'Team',
      category: 'Drinks',
      price: 0.4,
    },
  ]
  const action = { type: getItems.fulfilled.type, payload: newItems }
  const endState = itemsReducer(startState, action)
  expect(endState.itemsArray.length).toBe(5)
})
