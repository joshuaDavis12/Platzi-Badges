import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Badge from './components/Badge'

const name = 'Mr. Joshi'

const element = (
    <div>
        <h1>
            Hello, I'm {name}
        </h1>
        <p>I'm Frontend Developer</p>
    </div>
)

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
