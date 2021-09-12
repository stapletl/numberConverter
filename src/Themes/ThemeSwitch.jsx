import { useContext } from 'react';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ThemeContext } from './ThemeProvider';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const ThemeSwitch = () => {
    const { currentTheme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        if (currentTheme === "lightTheme") {
            setTheme('darkTheme');
        } else {
            setTheme('lightTheme');
        }
    }

    const getDisplayMode = () => currentTheme === "lightTheme" ? "Light Mode " : "Dark Mode"

    return (
        <IconButton onClick={ handleThemeChange }>
            { currentTheme === 'lightTheme' ?
                <BrightnessHighIcon color='secondary' /> :
                <Brightness3Icon color='secondary' />
            }
        </IconButton>
    );
}

export default ThemeSwitch;
