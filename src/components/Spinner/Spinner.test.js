import React from 'react'

import { shallow, mount, render } from 'enzyme';

import { SpinnerComponent } from './Spinner.component';

describe('<Spinner />', () => {
    it('should spinner be rendered', () => {
        const props = {
            isLoading: true,
        };
        const renderedComponent = shallow(<SpinnerComponent {...props} />);

        expect(renderedComponent.find('.spinner').length).toEqual(1);
    });

    it('should spinner NOT be rendered', () => {
        const props = {
            isLoading: false,
        };
        const renderedComponent = shallow(<SpinnerComponent {...props} />);

        expect(renderedComponent.find('.spinner').length).toEqual(0);
    });
})

