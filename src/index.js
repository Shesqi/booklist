import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './containers/App';

const mockBookData = require('./data');

ReactDOM.render(<App data={mockBookData}/>, document.getElementById('root'));
