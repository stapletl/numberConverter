import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InputField from './InputField';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © ' }
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{ ' ' }
            { new Date().getFullYear() }
            { '.' }
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const Layout = () => {
    const classes = useStyles();
    const [num, setNum] = useState();


    return (
        <>
            <AppBar position="absolute" color="primary" className={ classes.appBar }>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Number Base Converter
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={ classes.layout }>
                <Paper className={ classes.paper }>
                    <InputField label="Decimal" num={{ value: num, setValue: setNum}} />
                    <InputField label="Binary" num={{ value: num, setValue: setNum}} />
                    <InputField label="Hex" num={{ value: num, setValue: setNum}} />
                    <InputField label="Octal" num={{ value: num, setValue: setNum}} />
                    <InputField label="Ascii" num={{ value: num, setValue: setNum}} />
                </Paper>
                <Copyright />
            </main>
        </>
    );
}

export default Layout;