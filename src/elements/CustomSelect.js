import React from 'react';
import { useField } from 'formik';

const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </div>
    );
};

export default CustomSelect;
