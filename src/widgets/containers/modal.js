import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
    render() {
        //recibe dos parametros, uno es que va a renderear y otro es donde lo va a renderear
        return createPortal(this.props.children, document.getElementById('modal-container'))
    }
}

export default ModalContainer;