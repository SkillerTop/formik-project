import React from 'react';
import CommentForm from './components/CommentForm';
import LoginForm from './components/LoginForm';
import ProductForm from './components/ProductForm';

function App() {
    return (
        <div className="App">
            <h1>React Formik Project</h1>

            <div>
                <h2>Додавання коментарів</h2>
                <CommentForm />
            </div>

            <div>
                <h2>Авторизація</h2>
                <LoginForm />
            </div>

            <div>
                <h2>Додавання товарів</h2>
                <ProductForm />
            </div>
        </div>
    );
}

export default App;
