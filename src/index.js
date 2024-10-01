import './index.css';
import img from './img/logo.png';
import value from './test.imooc';

console.log(img);
console.log(value);

const imgElem = document.createElement('img');
imgElem.src = img;
document.body.appendChild(imgElem);
