import { connect } from 'react-redux';
import { changeSearchTextAction, searchAction, changeSearchInputFocusAction } from '../../actions/actions';
import { SearchComponent } from './Search.component';

const mapStateToProps = state => {
    return {
        searchText: state.searchText,
        isLoading: state.isLoading,
        searchPerformed: state.searchPerformed,
        searchInputFocus: state.searchInputFocus
    }
}

const mapDispatchToProps = {
    changeSearchTextAction,
    searchAction,
    changeSearchInputFocusAction
};

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);