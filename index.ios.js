import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import store from './src/redux/store';
import App from './src/containers/App';

const fastFilm = () => (
    <App />
);

AppRegistry.registerComponent('fastFilm', () => fastFilm);
