import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        marginLeft: 'auto !important',
        marginRight: '20px',
      backgroundColor: '#3BADE3',
    },
  },
}));

export default function OutlinedButtons({buttonText}) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Button variant="outlined" >{buttonText}</Button>
      </div>
  );
}