import React, { Component } from 'react';
import './Spinner.styles.scss';

export class SpinnerComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.isLoading === true ? (
                    <div className="col-auto">
                        <div className="spinner">
                            <div className="rect1"></div>
                            <div className="rect2"></div>
                            <div className="rect3"></div>
                            <div className="rect4"></div>
                            <div className="rect5"></div>
                        </div>
                    </div>
                ) : ''}
            </div>
        );
    }

}
