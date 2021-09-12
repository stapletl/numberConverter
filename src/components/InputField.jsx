import React from 'react';
import {TextField, Typography, makeStyles} from '@material-ui/core/';
import getValidInput from '../functions/getValidInput';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1em',
    },
}));

const InputField = props => {
    const {label, num, update} = props
    const classes = useStyles();
    
    const handleFieldUpdate = e => {
        const input = e.target.value;
        const validInput = getValidInput(label,input);
        num.setValue(validInput);
        update(validInput);
    }

    return (
        <div className={ classes.root }>
            <Typography variant="h6">
                {label}
            </Typography>
            <TextField
                variant='outlined'
                id="cardNumber"
                value={num.value}
                onChange={e => handleFieldUpdate(e)}
                multiline
                fullWidth
                autoComplete={false}
            />
        </div>
    );
}

export default InputField;