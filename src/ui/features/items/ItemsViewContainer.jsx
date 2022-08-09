import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Item } from './item/Item'
import s from './ItemsViewContainer.module.scss'
import { Preloader } from '../../common/preloader/Preloader'
import { useActions } from '../../../utils/redux-utils'
import { selectRandomItems } from '../../../utils/select-random-items-utils'
import { appSelectors } from '../../../bll/app-reducer'
import { itemsActions, itemsSelectors } from '../../../bll/items-reducer'

export function ItemsViewContainer({ show, onShowModal }) {
  // items for views. need paginator?!
  const [itemsViews, setItemsViews] = useState([])

  const { getItems } = useActions(itemsActions)

  useEffect(() => {
    getItems()
  }, [getItems])

  const items = useSelector(itemsSelectors.selectorItems)
  const status = useSelector(appSelectors.selectorStatus)

  if (!items.length) {
    return <Preloader />
  }
  if (itemsViews.length === 0) {
    setItemsViews(() => selectRandomItems(items, 6))
  }
  const onClickButtonCheapest = () => {
    const cheapestItem = itemsViews.reduce(
      (acc, el) => (acc.price && acc.price < el.price ? acc : el),
      {}
    )
    onShowModal(cheapestItem)
  }

  return (
    <div className={s.itemsViewContainer}>
      {status === 'loading' && <Preloader />}
      <div className={s.itemsBlock}>
        {itemsViews.map((c) => {
          return (
            <Item
              key={c.price}
              item={c}
              show={show}
              onShowModal={onShowModal}
            />
          )
        })}
      </div>
      <button
        type='button'
        className={s.buttonContainer}
        onClick={onClickButtonCheapest}
        disabled={status === 'failed' || show}
      >
        Buy cheapest
      </button>
    </div>
  )
}
