import { connect } from 'react-redux';
import { PhotosComponent } from './Photos.component';
import { changeCurrentPhotoAction } from '../../actions/actions';

const mapStateToProps = state => {
    return { 
        dogs: state.dogs, 
        searchPerformed: state.searchPerformed,
        currentPhoto: state.currentPhoto,
        isPhotoModalOpen: state.isPhotoModalOpen,
        searchError: state.searchError
    }
}

const mapDispatchToProps = {
    changeCurrentPhotoAction
};

export const Photos = connect(mapStateToProps, mapDispatchToProps)(PhotosComponent);