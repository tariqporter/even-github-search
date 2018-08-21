import * as React from 'react';
import './Pagination.css';
import { IPage } from '../../reducers/initialState';
import { Button } from '@material-ui/core';
import { licenses } from '../SearchBox/SearchBox';
import * as queryString from 'query-string';

export const styles = (theme: any) => ({
  button: {
    margin: '2px'
  },
  ellipsis: {
    verticalAlign: 'bottom',
    fontWeight: 800
  }
});

export default (props: any) => {
  const { history, includeForked, licenseValue, searchValue, starValue, page, pages, classes } = props;  //state
  const { search } = props;  //dispatch\\

  const searchAndGo = (newPage: number) => {
    let license = licenses.find(x => x.id === licenseValue) as any;
    license = !!license ? license.name : '';
    const urlState = { searchValue, starValue, licenseValue, includeForked, page: newPage };
    const stringified = queryString.stringify(urlState);
    history.push(`/?${stringified}`);
    search({...urlState, license}, {});
  };

  return (
    <div className="center">
      {pages.map((x: IPage) => {
        if (x.page === null) {
          return <span key={x.id} className={classes.ellipsis}>&hellip;</span>
        }
        return (<Button className={classes.button} key={x.id} color={x.page === page ? 'primary' : 'secondary'} variant="contained" onClick={searchAndGo.bind(null, x.page)}>
          {x.page}
        </Button>);
      })}
    </div>
  );
}
