import React from 'react';
import { Formik, Field, Form } from 'formik';
import CustomInput from '../elements/CustomInput';

const LoginForm = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor="username">Ім'я користувача:</label>
                <CustomInput type="text" id="username" name="username" />

                <label htmlFor="password">Пароль:</label>
                <CustomInput type="password" id="password" name="password" />

                <button type="submit">Увійти</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;
