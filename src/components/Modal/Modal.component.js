import React, { Component } from 'react';
import { Subject } from 'rxjs';
import './Modal.styles.scss';

export class ModalComponent extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                { this.props.isOpen === true ? (
                    <div>
                        <div className="cover" onClick={this.props.onClose}></div>
                        <div className="modal__window">
                            <h1><span className="modal__close" onClick={this.props.onClose}></span></h1>
                            <div className="modal__photo-container">
                                <img className="modal__photo" src={this.props.content}></img>
                            </div>
                        </div>
                    </div>
                ) : '' }
            </div>
        );
    }

}
