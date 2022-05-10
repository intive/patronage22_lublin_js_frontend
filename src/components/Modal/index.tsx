import React from "react";
import MainButton from "../MainButton";

interface ModalProps {
    show: boolean,
    closed: () => void;
    email: string
}

const Modal = (props: ModalProps) => {
    const classes = [
        "Modal",
        props.show ? "ModalOpen" : "ModalClosed"
    ];

    return (
        <div className={classes.join(' ')}>
            <h1>{props.email}</h1>
            <p>Thank You For Subscribing!</p>
            <MainButton onClick={props.closed}>
                Dismiss
            </MainButton>
        </div>
    );
};

export default Modal;