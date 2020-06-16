import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import Badge from './components/Badge'

// const name = 'Mr. Joshi'

// const element = (
//     <div>
//         <h1>
//             Hello, I'm {name}
//         </h1>
//         <p>I'm Frontend Developer</p>
//     </div>
// )

const container = document.getElementById('app');

ReactDOM.render(
    <Badge 
        firstName="Joshua" 
        lastName="Davis" 
        avatarUrl="https://en.gravatar.com/userimage/188139205/2e13eeafd48e78ca3eedaa8043cea92e.jpg?size=200"
        jobTitle="Senior UX Designer" 
        twitter="theRookie"
    />, container);
