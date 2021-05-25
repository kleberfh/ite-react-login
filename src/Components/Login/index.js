import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core';

import LoginCard from "../LoginCard";

const useStyles = makeStyles((theme) => createStyles({
  login: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: theme.palette.background,
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <LoginCard />
    </div>
  );
};

export default Login;
