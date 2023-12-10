import React from 'react';
import { Formik, Field, Form } from 'formik';
import CustomInput from '../elements/CustomInput';

const ProductForm = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={{ productName: '', price: '' }} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor="productName">Назва товару:</label>
                <CustomInput type="text" id="productName" name="productName" />

                <label htmlFor="price">Ціна:</label>
                <CustomInput type="text" id="price" name="price" />

                <button type="submit">Додати товар</button>
            </Form>
        </Formik>
    );
};

export default ProductForm;
