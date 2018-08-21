import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import Results, { styles } from './Results';

export class ResultsContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <Results {...this.props} />
      );
  }
}

const mapStateToProps = (state: any) => {
  const { searchResults, loading } = state;
  return { searchResults, loading };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  // myFunc: () => dispatch(myFunc(ownProps.property))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResultsContainer));