import React, { Component } from 'react';
import { Subject } from 'rxjs';
import './Search.styles.scss';
import { Spinner } from '../Spinner/Spinner.container';

export class SearchComponent extends Component {
    constructor() {
        super();
        this.currentInput$ = new Subject();
        this.search$ = new Subject();
    }

    componentDidMount() {
        this.currentInput$.subscribe(input => {
            this.props.changeSearchTextAction(input);
        });

        this.search$.subscribe(searchText => {
            this.props.searchAction(searchText);
        });
    }

    render() {
        return (
            <div className={"row " + (this.props.searchPerformed ? "da-margin-top40" : "justify-content-center da-margin-top100")}>
                <div className="col-12 col-md-4">
                    <div className='search__label-container'>
                        { this.props.searchText.length > 0 ? (
                            <span className='search__label--small'>Breed name</span>
                        ) : '' }
                    </div>
                    <input className="form-control"
                        type="text"
                        id="search-input"
                        aria-describedby="Search input"
                        placeholder="Breed name"
                        onKeyPress={(e) => e.key === 'Enter' ? this.search$.next(this.props.searchText) : null}
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
    
        );
    }

}
