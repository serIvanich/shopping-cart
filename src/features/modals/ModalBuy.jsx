import React from "react";
import Modal from "../../common/modal/modal";
import {Card} from "../cards/card/Card";
import s from "./ModalBuy.module.css";

export const ModalBuy = ({currentCard, show, setShow}) => {


    return (
        <div>
            <Modal
                enableBackground={true}
                closeModalOnClick={() => setShow(false)}
                width={384}
                height={536}
                show={show}
            >
                <div className={s.settingModals}>
                    <Card card={currentCard} modalCard={true}/>
                    <form>
                        <input/>
                        <input/>
                        <button onClick={() => setShow(false)}/>
                    </form>
                </div>


            </Modal>


        </div>
    )

}