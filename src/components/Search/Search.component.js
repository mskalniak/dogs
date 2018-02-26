import React, { Component } from 'react';
import { Subject } from 'rxjs';
import './Search.styles.scss';
import { Spinner } from '../Spinner/Spinner.container';

export class SearchComponent extends Component {
    constructor() {
        super();
        this.currentInput$ = new Subject();
        this.search$ = new Subject();
        this.inputFocus$ = new Subject();
    }

    componentDidMount() {
        this.currentInput$.subscribe(input => {
            this.props.changeSearchTextAction(input);
        });

        this.search$.subscribe(searchText => {
            this.props.searchAction(searchText);
        });

        this.inputFocus$.subscribe(isFocus => {
            this.props.changeSearchInputFocusAction(isFocus);
        });
    }

    render() {
        return (
            <div>
                <div className={"search row " + (this.props.searchPerformed ? "da-margin-top60" : "justify-content-center align-items-center search__container--inner")}>
                    <div className="col-md-4">
                        <div className='search__label-container'>
                                <span className={"" + (this.props.searchInputFocus || this.props.searchText.length > 0 ? "search__label--small" : "search__label--big")}>Breed name</span>
                        </div>
                        <input className="form-control"
                            type="text"
                            id="search-input"
                            aria-describedby="Search input"
                            onFocus={(e) => this.inputFocus$.next(true)}
                            onBlur={(e) => this.inputFocus$.next(false)}
                            onKeyPress={(e) => e.key === 'Enter' && this.props.searchText.length > 0 ? this.search$.next(this.props.searchText) : null}
                            onChange={(e) => this.currentInput$.next(e.target.value)}></input>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary search__button" disabled={this.props.searchText.length <= 0} type="button" id="search-button"
                            onClick={(e) => this.search$.next(this.props.searchText)}>Search</button>
                    </div>
                    <div className='search__spinner'>
                        <Spinner />
                    </div>
                </div>
            </div>
        );
    }

}
