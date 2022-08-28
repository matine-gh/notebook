import * as React from "react";
import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";
import reducer from "./reducers/reducer";
import postSaga from "./sagas/sagas.post";
import getSaga from "./sagas/sagas.get";
import {routerMiddleware} from "connected-react-router";
import {createLogger} from "redux-logger";


const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory();
const middlewares = [];

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger();
    middlewares.push(logger);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer(history),
    composeEnhancers(
        applyMiddleware(
            ...middlewares,
            routerMiddleware(history),
            sagaMiddleware,
        ),
    )

)
sagaMiddleware.run(postSaga)
sagaMiddleware.run(getSaga)

const Store = ({children}) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};
export default (Store)
