import React from 'react'

import { shallow, mount, render } from 'enzyme';

import { SearchComponent } from './Search.component';

describe('<Search />', () => {
    it('should render big label and NOT render small label (initial state)', () => {
        const props = {
            searchText: '',
            isLoading: false,
            searchPerformed: false,
            searchInputFocus: false,
            changeSearchTextAction: () => { },
            searchAction: () => { },
            changeSearchInputFocusAction: () => { }
        };
        const renderedComponent = shallow(<SearchComponent {...props} />);

        expect(renderedComponent.find('.search__label--big').length).toEqual(1);
        expect(renderedComponent.find('.search__label--small').length).toEqual(0);
    });

    it('should render small label and NOT render big label (on focus)', () => {
        const props = {
            searchText: '',
            isLoading: false,
            searchPerformed: false,
            searchInputFocus: true,
            changeSearchTextAction: () => { },
            searchAction: () => { },
            changeSearchInputFocusAction: () => { }
        };
        const renderedComponent = shallow(<SearchComponent {...props} />);

        expect(renderedComponent.find('.search__label--small').length).toEqual(1);
        expect(renderedComponent.find('.search__label--big').length).toEqual(0);
    });

    it('should render small label and NOT render big label (on search query exist and no focus)', () => {
        const props = {
            searchText: 'bulldog',
            isLoading: false,
            searchPerformed: false,
            searchInputFocus: false,
            changeSearchTextAction: () => { },
            searchAction: () => { },
            changeSearchInputFocusAction: () => { }
        };
        const renderedComponent = shallow(<SearchComponent {...props} />);

        expect(renderedComponent.find('.search__label--small').length).toEqual(1);
        expect(renderedComponent.find('.search__label--big').length).toEqual(0);
    });

    it('should be rendered just below the logo (after search performed)', () => {
        const props = {
            searchText: '',
            isLoading: false,
            searchPerformed: true,
            searchInputFocus: true,
            changeSearchTextAction: () => { },
            searchAction: () => { },
            changeSearchInputFocusAction: () => { }
        };
        const renderedComponent = shallow(<SearchComponent {...props} />);

        expect(renderedComponent.find('.search.da-margin-top60').length).toEqual(1);
    });

    it('should be rendered at the center of the page (before search performed)', () => {
        const props = {
            searchText: '',
            isLoading: false,
            searchPerformed: false,
            searchInputFocus: true,
            changeSearchTextAction: () => { },
            searchAction: () => { },
            changeSearchInputFocusAction: () => { }
        };
        const renderedComponent = shallow(<SearchComponent {...props} />);

        expect(renderedComponent.find('.search.search__container--inner').length).toEqual(1);
    });
})

