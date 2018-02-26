import React, { Component } from 'react';
import { Subject } from 'rxjs';
import './Photos.styles.scss';
import ReactEmoji from 'react-emoji';
import { Modal } from '../Modal/Modal.container';

export class PhotosComponent extends Component {
    constructor() {
        super();

        this.currentPhoto$ = new Subject();
    }

    componentDidMount() {
        this.currentPhoto$.subscribe(photo => {
            this.props.changeCurrentPhotoAction(photo);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.dogs.length === 0 && this.props.searchPerformed === true ? (
                        <div className="row da-margin-top100 justify-content-center">
                            { this.props.searchError ? (
                                <div className="col-auto no-photos">Error! Please try again later {ReactEmoji.emojify(':( :( :(', { attributes: { width: '30px', height: '30px' } })}</div>
                            ) : (
                                <div className="col-auto no-photos">I didn't find any pictures {ReactEmoji.emojify(':(', { attributes: { width: '30px', height: '30px' } })}</div>
                            ) }
                        </div>
                    ) : (
                            <div className="row da-margin-top40">
                                {this.props.dogs.map((dog, index) => <div className="col-auto" key={index}><img className="photo" src={dog} onClick={(e) => this.currentPhoto$.next({dog}.dog)}></img></div>)}
                            </div>
                        )
                }
                <Modal content={this.props.currentPhoto} isOpen={this.props.isPhotoModalOpen} onClose={() => this.currentPhoto$.next(null)} />
            </div>
        );
    }

}
