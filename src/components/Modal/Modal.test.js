import React from 'react'

import { shallow, mount, render } from 'enzyme';

import { ModalComponent } from './Modal.component';

describe('<Modal />', () => {
    it('should modal be rendered', () => {
        const props = {
            isOpen: true,
            content: '',
            onClose: () => {
                this.props.isOpen = false;
            }
        };
        const renderedComponent = shallow(<ModalComponent {...props} />);

        expect(renderedComponent.find('.cover').length).toEqual(1);
        expect(renderedComponent.find('.modal__window').length).toEqual(1);
    });

    it('should modal NOT be rendered', () => {
        const props = {
            isOpen: false,
            content: '',
            onClose: () => {
                this.props.isOpen = false;
            }
        };
        const renderedComponent = shallow(<ModalComponent {...props} />);

        expect(renderedComponent.find('.cover').length).toEqual(0);
        expect(renderedComponent.find('.modal__window').length).toEqual(0);
    });
  
})

