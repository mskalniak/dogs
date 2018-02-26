import { connect } from 'react-redux';
import { SpinnerComponent } from './Spinner.component';

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = {

};

export const Spinner = connect(mapStateToProps, mapDispatchToProps)(SpinnerComponent);