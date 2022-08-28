import * as React from "react";
import Store from "./store/store.jsx";
import Router from "./router.jsx";

const App = () => {
    return (
        <Store>
            <Router />
        </Store>
    )
};
export default (App)
