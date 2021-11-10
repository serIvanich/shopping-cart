import React, {useEffect} from "react";
import {Item} from "./item/Item";
import {useSelector} from "react-redux";
import s from './ItemsViewContainer.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {asyncActions} from "./items-reducer";
import {useActions} from "../../utils/redux-utils";
import {selectRandomItems} from "../../utils/select-random-items-utils";

export const ItemsViewContainer = ({onShowModal}) => {
    const {getItems} = useActions(asyncActions)

    useEffect(() => {
        getItems()
    }, [getItems])

    const items = useSelector(state => state.items.itemsArray)
    const status = useSelector(state => state.app.status)

    // items for views need paginator?!
    let itemsViews = []

    if (!items.length) {
        return <Preloader/>
    } else {
        itemsViews = selectRandomItems(items)
    }

    const onClickButtonCheapest = () => {
        const cheapestItem = itemsViews.reduce((pr, c) => pr.price < c.price ? pr : c, {})
        onShowModal(cheapestItem)
    }

    return (
        <div className={s.itemsViewContainer}>
            {status === 'loading' && <Preloader/>}
            <div className={s.itemsBlock}>
                {itemsViews.map((c, i) => {
                    return <Item key={i} item={c} onShowModal={onShowModal}/>
                })}
            </div>
            <button className={s.buttonContainer} onClick={onClickButtonCheapest} disabled={status === 'failed'}>
                Buy cheapest
            </button>
        </div>
    )
}