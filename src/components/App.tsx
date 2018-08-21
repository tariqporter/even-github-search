import * as React from 'react';
import { connect } from 'react-redux';
import { Button, CssBaseline, TextField, withStyles, Grid } from '@material-ui/core';
import { onChangeAction, searchGitHubAction } from '../actions';
import SearchBox from './SearchBox/SearchBox.Container';
import Results from './Results/Results.Container';
import Header from './Header/Header.Container';

const styles = (theme: any) => ({
	container: {
		marginBottom: theme.spacing.unit * 3
	}
});

export class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		//console.log('here', this.props)
	}

	public render() {
		const { match, location, history, classes } = this.props;
		return (
			<React.Fragment>
				<CssBaseline />
				<Grid container>
				  <Grid container className={classes.container}>
						<Grid item sm={12}>
						  <Header />
						</Grid>
					</Grid>
					<Grid container className={classes.container}>
						<Grid item sm={undefined} md={2} />
						<Grid item sm={12} md={8}>
							<SearchBox {...{match, location, history}} />
						</Grid>
					</Grid>
					<Grid container className={classes.container}>
						<Grid item sm={undefined} md={2} />
						<Grid item sm={12} md={8}>
							<Results />
						</Grid>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));