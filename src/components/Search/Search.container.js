import { connect } from 'react-redux';
import { changeSearchTextAction, searchAction } from '../../actions/actions';
import { SearchComponent } from './Search.component';

const mapStateToProps = state => {
    return {
        searchText: state.searchText,
        isLoading: state.isLoading,
        searchPerformed: state.searchPerformed
    }
}

const mapDispatchToProps = {
    changeSearchTextAction,
    searchAction
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);