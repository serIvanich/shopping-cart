import React from "react";
import Modal from "../../common/modal/modal";
import {Card} from "../cards/card/Card";

export const ModalBuy = ({currentCard, show, setShow}) => {



    return (
        <div>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                width={180}
                height={200}
                show={show}
            >

                <form >
                    <Card card={currentCard}/>
                    <input/>
                    <input/>
                    <button onClick={() => setShow(false)}/>
                </form>

            </Modal>


        </div>
    )

}