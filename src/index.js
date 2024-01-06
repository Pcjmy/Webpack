import './index.css';

import img from './img/logo.png';

console.log(img);

const imgElem = document.createElement('img');
imgElem.src = img;
document.body.appendChild(imgElem);
