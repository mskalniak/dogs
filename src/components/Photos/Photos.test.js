import React from 'react'

import { shallow, mount, render } from 'enzyme';

import { PhotosComponent } from './Photos.component';

describe('<Photos />', () => {
    it('should error info be visible', () => {
        const props = {
            dogs: [], 
            searchPerformed: true,
            currentPhoto: '',
            isPhotoModalOpen: false,
            searchError: true,
            changeCurrentPhotoAction: () => {}
        };
        const renderedComponent = shallow(<PhotosComponent {...props} />);

        expect(renderedComponent.find('.error.photos__no-photos').length).toEqual(1);
        expect(renderedComponent.find('.photos__box').length).toEqual(0);
    });

    it('should no photos info be visible', () => {
        const props = {
            dogs: [], 
            searchPerformed: true,
            currentPhoto: '',
            isPhotoModalOpen: false,
            searchError: false,
            changeCurrentPhotoAction: () => {}
        };
        const renderedComponent = shallow(<PhotosComponent {...props} />);

        expect(renderedComponent.find('.error.photos__no-photos').length).toEqual(0);
        expect(renderedComponent.find('.photos__no-photos').length).toEqual(1);
        expect(renderedComponent.find('.photos__box').length).toEqual(0);
    });

    it('should 2 photos containers be visible', () => {
        const props = {
            dogs: ['testPhoto1', 'testPhoto2'], 
            searchPerformed: true,
            currentPhoto: '',
            isPhotoModalOpen: false,
            searchError: false,
            changeCurrentPhotoAction: () => {}
        };
        const renderedComponent = shallow(<PhotosComponent {...props} />);

        expect(renderedComponent.find('.photos__box').length).toEqual(2);
    });
})

