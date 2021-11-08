import React from "react";
import Modal from "../../common/modal/modal";
import {Card} from "../cards/card/Card";

export const ModalBuyMyForm = ({currentCard, show, setShow}) => {


    return (
        <div>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                width={180}
                height={200}
                show={show}
            >
                <div>
                    <Card card={currentCard}/>
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