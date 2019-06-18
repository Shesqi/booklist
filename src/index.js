import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

const mockBookData = require('./data');

ReactDOM.render(<App books={mockBookData}/>, document.getElementById('root'));
