import { createTheme } from '@material-ui/core';
import { lightGreen, red } from '@material-ui/core/colors';

export const darkTheme = createTheme({
    palette: {
        type: 'dark',
        text: {
            primary: '#fff',
            secondary: '#d0d0d0',
            labelGray: '#909090',
            disabled: '#909090',
            blue: '#395BA2',
            white: '#fff',
        },
        action: {
            success: lightGreen.A700,
            red: red.A700,
            selected: '#676767',
        },
        primary: {
            main: '#77a7ea',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            default: '#2e2e2e',
            primary: '#1A1A1A',
            header: '#474747',
            paper: '#232323',
            menu: '#0463a2',
            elevatedPaper: '#636363AA',
        },
        border: '1px solid rgba(102, 102, 102, 0.8)',
    },
});
