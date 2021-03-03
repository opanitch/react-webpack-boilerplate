import React from 'react';
import ReactDOM from 'react-dom';

// Styles First
import './styles/app.css';

import App from './app';

const renderAnchor = document.getElementById('portfolio');

renderAnchor && ReactDOM.render(<App />, renderAnchor);
