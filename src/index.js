import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'
import App from './components/App'
import UploaderTheme from '../node_modules/mineko-design/src/theme/UploaderTheme'

const store = createStore(allReducers);

render(
    <Provider store={store}>
        <UploaderTheme Comp={App} />
    </Provider>,
    document.getElementById('root')
)