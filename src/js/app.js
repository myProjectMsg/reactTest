import React,{Component} from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout.jsx';
import '../scss/main.scss';

render(
    <Layout/>,
    document.getElementById('root')
)