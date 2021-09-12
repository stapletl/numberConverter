import React, { useState } from 'react';
import { makeStyles, AppBar, Toolbar, Paper, Typography } from '@material-ui/core';
import InputField from './InputField';
import convertBase from '../functions/convertbase'
import Copyright from './Copyright';
import ThemeSwitch from '../Themes/ThemeSwitch'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
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
    const [dec, setDec] = useState('');
    const [bin, setBin] = useState('');
    const [hex, setHex] = useState('');
    const [oct, setOct] = useState('');
    //const [asc, setAsc] = useState('');

    const updateDec = num => {
        setBin(convertBase(num, 10, 2));
        setHex(convertBase(num, 10, 16));
        setOct(convertBase(num, 10, 8));
    }

    const updateBin = num => {
        setDec(convertBase(num, 2, 10));
        setHex(convertBase(num, 2, 16));
        setOct(convertBase(num, 2, 8));
    }

    const updateHex = num => {
        setDec(convertBase(num, 16, 10));
        setBin(convertBase(num, 16, 2));
        setOct(convertBase(hex, 16, 8));
    }

    const updateOct = num => {
        setDec(convertBase(num, 8, 10));
        setBin(convertBase(num, 8, 2));
        setHex(convertBase(num, 8, 16));
    }

    return (
        <>
            <AppBar position="absolute" color="primary" className={ classes.appBar }>
                <Toolbar className={ classes.toolbar }>
                    <Typography variant="h5" color="inherit" noWrap className={ classes.title }>
                        Number Base Converter
                    </Typography>
                    <ThemeSwitch/>
                </Toolbar>
            </AppBar>
            <main className={ classes.layout }>
                <Paper className={ classes.paper }>
                    <InputField label="Decimal" num={ { value: dec, setValue: setDec } } update={ updateDec } />
                    <InputField label="Binary" num={ { value: bin, setValue: setBin } } update={ updateBin } />
                    <InputField label="Hex" num={ { value: hex, setValue: setHex } } update={ updateHex } />
                    <InputField label="Octal" num={ { value: oct, setValue: setOct } } update={ updateOct } />
                    {/* <InputField label="Ascii" num={{ value: asc, setValue: setAsc}} /> */ }
                </Paper>
                <Copyright />
            </main>
        </>
    );
}

export default Layout;