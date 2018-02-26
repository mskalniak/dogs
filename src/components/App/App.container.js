import { connect } from 'react-redux';
import { AppComponent } from './App.component';

const mapStateToProps = state => {
    return {
        searchPerformed: state.searchPerformed
    }
}

const mapDispatchToProps = {

};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);