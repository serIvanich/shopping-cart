import React, {useEffect} from "react";
import {Item} from "./item/Item";
import {useSelector} from "react-redux";
import s from './ItemsViewContainer.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {asyncActions} from "./items-reducer";
import {useActions} from "../../utils/redux-utils";

export const ItemsViewContainer = ({onShowModal}) => {
    const {getItems} = useActions(asyncActions)

    useEffect(() => {
        getItems()
    }, [getItems])

    const items = useSelector(state => state.items.itemsArray)
    const status = useSelector(state => state.app.status)
    const loadingStatus = status === 'loading'

    if (!items) {
        return <Preloader/>
    }

    // items for views
    const itemsViews = items.slice(0, 6)
    const mapItemsView = itemsViews.map((c, i) => <Item key={i} item={c} onShowModal={onShowModal}/>)

    const onClickButtonCheapest = () => {
        let item = itemsViews.reduce((pr, c) => pr.price < c.price ? pr : c, {})
        onShowModal(item)
    }


    return (
        <div className={s.itemsViewContainer}>
            {loadingStatus && <Preloader/>}
            <div className={s.itemsBlock}>
                {mapItemsView}
            </div>
            <div className={s.buttonContainer} onClick={onClickButtonCheapest} disabled={loadingStatus}>
                Buy cheapest
            </div>
        </div>
    )
}