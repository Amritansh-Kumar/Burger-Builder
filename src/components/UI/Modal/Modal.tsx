import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

interface ModalProps {
    show: boolean,
    closeModal: Function
}

const modal: React.FC<ModalProps> = (props: any) => {
    return (
        <Aux>
            <Backdrop show={props.show} clickBackdrop={props.closeModal}/>
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? 1 : 0
                }}
            >
                {props.children}
            </div>
        </Aux>
    )
};

export default modal;
