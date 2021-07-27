import React, {Fragment} from 'react';
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

import './App.css';

function App() {

    return (
        <Fragment>
            <NewTodo />
            <Todos />
        </Fragment>
    );
}

export default App;
