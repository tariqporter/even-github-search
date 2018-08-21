import * as React from 'react';
import { connect } from 'react-redux';
import Pagination, { styles } from './Pagination';
import { withStyles } from '../../../node_modules/@material-ui/core';
import { searchGitHubAction } from '../../actions';

export class PaginationContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <Pagination {...this.props} />
      );
  }
}

const mapStateToProps = (state: any) => {
  const { page, pages, searchValue, includeForked, starValue, loading, licenseValue } = state;
  return { state, pages, page, searchValue, includeForked, starValue, loading, licenseValue };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  search: (obj: any) => dispatch(searchGitHubAction(obj))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withStyles(styles)(PaginationContainer));