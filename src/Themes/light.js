import { createTheme } from '@material-ui/core';
import { lightGreen, red } from '@material-ui/core/colors';

export const lightTheme = createTheme({
    palette: {
        type: 'light',
        text: {
            primary: '#000',
            secondary: '#707070',
            blue: '#395BA2',
            white: '#fff',
        },
        action: {
            success: lightGreen[700],
            red: red[700],
        },
        primary: {
            main: '#023e8a',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            paper: '#f8f8f8',
            default: '#fff',
            header: '#f8f8f8',
            menu: '#0463a2',
            mainHeader: '#003a73',
            elevatedPaper: '#d0d0d0',
        },
        border: '1px solid rgba(204, 204, 204, 0.8)',
    },
});
