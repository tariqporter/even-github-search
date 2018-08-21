import * as React from 'react';
import { connect } from 'react-redux';
import Header, { styles } from './Header';
import { withStyles } from '@material-ui/core';

export class HeaderContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // const { dispatch } = props;
  }

  // componentDidMount() {
  //   dispatch(initialAction(data))
  // }

  public render() {
    return (
        <Header {...this.props} />
      );
  }
}

const mapStateToProps = (state: any) => ({
  // myProperty: state.myProperty
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  // myFunc: () => dispatch(myFunc(ownProps.property))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(withStyles(styles)(HeaderContainer));