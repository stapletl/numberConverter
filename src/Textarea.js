import React from 'react';

const Textarea = props => {
    const { onChange, value, type } = props;
    return (
        <textarea onInput={ (event) => onChange(event, type) } value={ value } type={ type } />
    )
}
export default Textarea;