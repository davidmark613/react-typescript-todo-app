import React, {useRef, useContext} from 'react';
import {TodosContext} from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }
        todosCtx.addTodo(enteredText);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='new-todo'>New Todo</label>
            <input
                type='text'
                id='new-todo'
                ref={inputRef}
            />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;