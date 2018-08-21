import * as React from 'react';
import { connect } from 'react-redux';
import SearchBox, { styles } from './SearchBox';
import { searchGitHubAction, onChangeAction } from '../../actions';
import { withStyles } from '@material-ui/core';
import * as queryString from 'query-string';
import { mapQueryToState } from '../../utils/react-router';

export class SearchBoxContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount() {
    const { state, search, onChange } = this.props;
    const urlState = mapQueryToState(state, queryString.parse(location.search));
    Object.keys(urlState).forEach((x: string) => {
      onChange(x, { target: { value: urlState[x] } });
    });
    if (urlState.searchValue) {
      search(urlState, {});
    }
  }

  public render() {
    return (
      <SearchBox {...this.props} />
    );
  }
}

const mapStateToProps = (state: any) => {
  const { page, searchValue, includeForked, starValue, loading, licenseValue } = state;
  return { state, page, searchValue, includeForked, starValue, loading, licenseValue };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onCheckChange: (name: string, e: any) => dispatch(onChangeAction(name, e.target.checked)),
  onChange: (name: string, e: any) => dispatch(onChangeAction(name, e.target.value)),
  search: (obj: any) => dispatch(searchGitHubAction(obj))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchBoxContainer));