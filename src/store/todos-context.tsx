import React, {useState} from 'react';
import Todo from "../models/Todo";

type ContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<ContextObject>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) => {
        const newTodo = {
            id: new Date().getTime().toString(),
            text: todoText
        }

        setTodos((prevState) => {
            return [...prevState, newTodo];
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== todoId);
        });
    };

    const contextValue: ContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
}

export default TodosContextProvider;
