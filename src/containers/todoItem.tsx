import * as React from 'react';
import styled from 'styled-components';

import TodoItemModel from '../models/todoItemModel';
const trashIco = require('./trash.png');

const Completed = styled.span`
    text-decoration: line-through;
    color: red;
`;
const RemoveTodo = styled.img`
    width: 15px;
    height: 15px;
    vertical-align: middle;
    padding-left: 5px;
    cursor: pointer
`;

interface Props {
    todo: TodoItemModel;
    toggleCompleted: (id: string) => void;
    removeTodo: (id: string) => void;
}
const TodoItem = ({todo, toggleCompleted, removeTodo}: Props) => (
            <div>
                <input type="checkbox" checked={!!todo.completed} onChange={toggleCompleted.bind(null, todo.id)}/> 
                - {todo.completed ? 
                        <Completed>{todo.text}</Completed> 
                        : todo.text
                    }
                <RemoveTodo src={trashIco} onClick={removeTodo.bind(null, todo.id)} />
            </div>
);

export default TodoItem;