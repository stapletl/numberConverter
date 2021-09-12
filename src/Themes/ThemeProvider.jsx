import { useState, createContext } from 'react';
import { ThemeProvider } from "@material-ui/core/styles/";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";

const getThemeByName = theme => themeMap[theme]

const themeMap = {
    lightTheme,
    darkTheme,
};

export const ThemeContext = createContext({
    currentTheme: 'lightTheme',
    setTheme: null,
});

const CustomThemeProvider = props => {
    const { children } = props;

    const currentTheme = localStorage.getItem('appThemeV2') || 'lightTheme';

    // State to hold the selected theme name
    const [ themeName, _setThemeName ] = useState(currentTheme);

    // Retrieve the theme object by theme name
    const theme = getThemeByName(themeName);

    const setThemeName = name => {
        localStorage.setItem('appThemeV2', name)
        _setThemeName(name)
    }

    const contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName,
    }

    return (
        <ThemeContext.Provider value={ contextValue }>
            <ThemeProvider theme={{ ...theme }}>{ children }</ThemeProvider>
        </ThemeContext.Provider>
    );
}
export default CustomThemeProvider;
