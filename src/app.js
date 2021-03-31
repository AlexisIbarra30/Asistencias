import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import Header from './components/Header';
import { RegisterPage } from './components/RegisterPage';
import { LoginPage } from './components/LoginPage';
import './styles/style.scss'

const jsx = (
    <div>
        <Header />
        <RegisterPage />
    </div>
);

ReactDOM.render( jsx, document.getElementById('app'));

