
import React, {Component} from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

interface ModalProps {
    show: boolean,
    closeModal: Function
}

class Modal extends Component<ModalProps> {


    shouldComponentUpdate(nextProps: any, nextState: Readonly<{}>, nextContext: any): boolean {
        return nextProps.show !== this.props.show || nextProps.children!== this.props.children;
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <Aux>
                <Backdrop show={this.props.show} clickBackdrop={this.props.closeModal}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? 1 : 0
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>);
    }
}

// const modal: React.FC<ModalProps> = (props: any) => {
//     return (
//         <Aux>
//             <Backdrop show={props.show} clickBackdrop={props.closeModal}/>
//             <div
//                 className={classes.Modal}
//                 style={{
//                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                     opacity: props.show ? 1 : 0
//                 }}
//             >
//                 {props.children}
//             </div>
//         </Aux>
//     )
// };
//
// export default modal;
export default Modal;
