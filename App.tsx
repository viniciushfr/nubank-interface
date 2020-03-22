import React from 'react';
import './src/config/ReactotronConfig';
import { StatusBar } from 'react-native';


import Routes from './src/routes';

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
        <Routes />
    </>
    
)
export default App;