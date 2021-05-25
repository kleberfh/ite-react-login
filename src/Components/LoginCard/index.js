import React, {useEffect, useState} from 'react';
import ThemeSwitcher from "../ThemeSwitcher";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Box, createStyles, TextField} from "@material-ui/core";

import Logo from '../../Assets/Images/ite.png'

const useStyles = makeStyles(theme => createStyles({
  root: {
    top: '20%',
    height: 'auto',
    margin: 'auto',
    padding: '2em',
    display: 'flex',
    borderRadius: '8px',
    width: 'fit-content',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: theme.palette.card,
  },
  title: {
    fontSize: '18px',
    margin: 'auto .5em',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: '300px',
    margin: '.5em 1em',
  },
  button: {
    width: 'auto',
    margin: '1em 1em auto',
  },
  avatar: {
    width: '60px',
    height: '60px'
  }
}));

export default function LoginCard() {
  const classes = useStyles();

  const iteUrl = 'https://tac.ite.edu.br/tac/ite/ite_imprime_foto.asp?pessoa='

  const [ra, setRa] = useState('')
  const [raImage, setRaImage] = useState('')
  const [raError, setRaError] = useState('')
  const [password, setPassword] = useState('')

  const handleRaChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setRa('')
      setRaImage('')
    } else if (value && value.length <= 9) {
      setRa(value.replace(/\D/g, ""))
    }
  }

  const handleRa = () => {
    if (ra === '' || ra && ra.length < 9) {
      setRaError('O R.A informado é inválido.')
    } else {
      setRaError('')
      setRaImage(iteUrl + ra)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <Box className={classes.root}>
      <div className="login_header">
        <Avatar alt="ite" src={raImage || Logo} className={classes.avatar} />
        <p className={classes.title}>
          Login do aluno
        </p>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          value={ra}
          onBlur={handleRa}
          color="secondary"
          variant="outlined"
          label="Usuário(R.A)"
          helperText={raError}
          error={raError !== ''}
          name="txtnumero_matricula"
          className={classes.input}
          onChange={handleRaChange}
        />
        <TextField
          label="Senha"
          type="password"
          name="password"
          value={password}
          color="secondary"
          variant="outlined"
          className={classes.input}
          onChange={e => setPassword(e.target.value)}
        />
      </form>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={classes.button}
      >
        Entrar
      </Button>
      <ThemeSwitcher />
    </Box>
  );
}