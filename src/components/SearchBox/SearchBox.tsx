import * as React from 'react';
//import './SearchBox.css';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import * as queryString from 'query-string';

export const styles = (theme: any) => ({
  formControl: {
    width: '100%'
  },
  item: {
    marginBottom: theme.spacing.unit * 3
  }
});

export const licenses = [
  { id: 0, name: 'MIT' },
  { id: 1, name: 'ISC' },
  { id: 2, name: 'APACHE' },
  { id: 3, name:  'GPL' }
];

export default (props: any) => {
  const {search, history, licenseValue, loading, searchValue, includeForked, starValue, classes } = props;  //state
  const { onChange, onCheckChange } = props;  //dispatch

  const searchAndGo = () => {
    const license = (licenses.find(x => x.id === licenseValue) as any).name;
    const urlState = { searchValue, starValue, licenseValue, includeForked, page: 1 };
    const stringified = queryString.stringify(urlState);
    history.push(`/?${stringified}`);
    search({...urlState, license}, {});
  };

  return (
    <Grid container>
      <Grid item sm={12} md={5} className={classes.item}>
        <TextField
          label="Search GitHub"
          fullWidth
          value={searchValue}
          onChange={onChange.bind(null, 'searchValue')}
        />
      </Grid>
      <Grid item sm={undefined} md={2} className={classes.item} />
      <Grid item sm={12} md={5} className={classes.item}>
        <TextField
          label="Stars"
          fullWidth
          value={starValue}
          onChange={onChange.bind(null, 'starValue')}
        />
      </Grid>
      <Grid item sm={12} md={5} className={classes.item}>
        <FormControl className={classes.formControl}>
          <InputLabel>License</InputLabel>
          <Select
            fullWidth
            value={licenseValue}
            onChange={onChange.bind(null, 'licenseValue')}>
            {licenses.map(license => (
              <MenuItem key={license.id} value={license.id}>{license.name}</MenuItem>
            ))};
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={undefined} md={2} className={classes.item} />
      <Grid item sm={12} md={5} className={classes.item}>
        <FormControlLabel
          control={
            <Checkbox
              checked={includeForked}
              onChange={onCheckChange.bind(null, 'includeForked')}
              value="includeForked"
            />
          }
          label="Include Forked"
        />
      </Grid>

      <Grid item sm={4} md={5} className={classes.item} />
      <Grid item sm={4} md={2} className={classes.item}>
        <Button disabled={loading} className={classes.button} fullWidth variant="contained" color="primary" onClick={searchAndGo}>
          Search
        </Button>
      </Grid>
      <Grid item sm={4} md={5} className={classes.item} />
    </Grid>

  );
}
