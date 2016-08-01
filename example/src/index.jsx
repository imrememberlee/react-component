/**
 * errors
 */
import React from 'react';
import Errors from '../../src/errors';
import 'style!css!../../stylesheets/errors.css';
import {render} from 'react-dom';

var element = document.createElement("div");
document.body.appendChild(element);
render(<Errors name="myComponent"/>, element);

/**
 * errors
 */
// import React from 'react';
// import Loading from '../../src/loading';
// import 'style!css!../../stylesheets/loading.css';
// import {render} from 'react-dom';

// var element = document.createElement("div");
// document.body.appendChild(element);
// render(<Loading name="myComponent"/>, element);