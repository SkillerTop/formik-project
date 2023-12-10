import React from 'react';
import { Formik, Field, Form } from 'formik';
import CustomInput from '../elements/CustomInput';

const CommentForm = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={{ comment: '' }} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor="comment">Коментар:</label>
                <CustomInput type="text" id="comment" name="comment" />
                <button type="submit">Додати коментар</button>
            </Form>
        </Formik>
    );
};

export default CommentForm;
