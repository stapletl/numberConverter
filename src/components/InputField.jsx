import React from 'react';
import {TextField, makeStyles} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1em',
    },
}));

const InputField = props => {
    const {label, num} = props
    const classes = useStyles();
    
    return (
        <div className={ classes.root }>
            <TextField
                variant='outlined'
                id="cardNumber"
                label={label}
                value={num.value}
                onChange={e => num.setValue(e.target.value)}
                fullWidth
            />
        </div>
    );
}

export default InputField;