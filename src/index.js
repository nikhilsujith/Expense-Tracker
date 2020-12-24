import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import { Provider } from './context/context';

import { SpeechProvider } from '@speechly/react-client';


ReactDOM.render(
    <SpeechProvider appId = "5d77f844-c7e3-46a8-8225-e6cbe7c0e728" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);
