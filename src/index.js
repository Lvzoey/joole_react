// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);