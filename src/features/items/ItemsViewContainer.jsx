import React, {useEffect, useState} from "react";
import {Item} from "./item/Item";
import {useSelector} from "react-redux";
import s from './ItemsViewContainer.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {itemsActions} from "./items-reducer";
import {useActions} from "../../utils/redux-utils";
import {selectRandomItems} from "../../utils/select-random-items-utils";

export const ItemsViewContainer = ({show, onShowModal}) => {

    // items for views. need paginator?!
    const [itemsViews, setItemsViews] = useState([])

    const {getItems} = useActions(itemsActions)

    useEffect(() => {
        getItems()
    }, [getItems])

    const items = useSelector(state => state.items.itemsArray)
    const status = useSelector(state => state.app.status)

    if (!items.length) {
        return <Preloader/>
    } else {
        !itemsViews.length && setItemsViews(() => selectRandomItems(items, 6))
    }

    const onClickButtonCheapest = () => {
        const cheapestItem = itemsViews.reduce((pr, c) => pr.price && pr.price < c.price ? pr : c, {})
        onShowModal(cheapestItem)
    }

    return (
        <div className={s.itemsViewContainer}>
            {status === 'loading' && <Preloader/>}
            <div className={s.itemsBlock}>
                {itemsViews.map((c, i) => {
                    return <Item key={i} item={c} show={show} onShowModal={onShowModal}/>
                })}
            </div>
            <button className={s.buttonContainer} onClick={onClickButtonCheapest}
                    disabled={status === 'failed' || show}>
                Buy cheapest
            </button>
        </div>
    )
}