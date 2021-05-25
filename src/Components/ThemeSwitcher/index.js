import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Creators as ThemeActions } from '../../Store/Ducks/theme';
import {FormControlLabel, Switch} from "@material-ui/core";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme)

  const changeTheme = () => {
    dispatch(ThemeActions.insertTheme({
      darkMode: !theme.darkMode
    }));
  }

  return <FormControlLabel
    control={
      <Switch
        checked={theme.darkMode}
        onChange={changeTheme}
      />
    }
    label="Modo Escuro"
  />
}

export default ThemeSwitcher