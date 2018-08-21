import * as React from 'react';
import { CircularProgress, Button, Grid, Paper, Table, TableHead, TableCell, TableRow, TableBody, Typography } from '@material-ui/core';
import './Results.css';

export const styles = (theme: any) => ({
  root: {},
  link: {
    color: '#000',
    '&:hover': {
      color: '#ccc'
    }
  }
});

export default (props: any) => {
  const { searchResults, classes, loading } = props;  //state

  if (loading) {
    return (
      <Grid item sm={12} className={`${classes.center} center`}>
        <CircularProgress />
      </Grid>
    );
  }

  if (!searchResults.length) {
    return null;
  }

  return (
    <Grid item sm={12}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="title">Name</Typography>
              </TableCell>
              <TableCell numeric>
                <Typography variant="title">Stars</Typography>
              </TableCell>
              <TableCell >
                <Typography variant="title">License</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((searchResult: any) => {
              return (
                <TableRow key={searchResult.id}>
                  <TableCell>
                    <Typography variant="title" gutterBottom>
                      <a className={classes.link} href={searchResult.html_url} target="_blank">
                        {searchResult.name}
                      </a>
                    </Typography>
                    <Typography variant="body2" className={classes.description} gutterBottom>
                      {searchResult.description}
                    </Typography>
                    { searchResult.fork ? <Button disabled>FORK</Button> : '' }
                  </TableCell>
                  <TableCell>
                    {searchResult.stargazers_count}
                  </TableCell>
                  <TableCell>{searchResult.license ? searchResult.license.name : ''}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
}