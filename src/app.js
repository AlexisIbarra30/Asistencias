import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import Header from './components/Header';
import { RegisterPage } from './components/RegisterPage';
import { LoginPage } from './components/LoginPage';
import './styles/style.scss';
import { AdminPage } from './components/AdminPage';

const jsx = (
    <div>
        <AdminPage/>
    </div>
);

ReactDOM.render( jsx, document.getElementById('app'));

