import { ActionCreator } from 'typescript-fsa';
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
    toggleCompleted: ActionCreator<string>;
    removeTodo: ActionCreator<string>;
}
const TodoItem: (props: Props) => JSX.Element =
    ({ todo, toggleCompleted, removeTodo }) => (
        <div>
            <input type="checkbox" checked={!!todo.completed} onChange={() => toggleCompleted(todo.id)} />
            {todo.completed ?
                <Completed>{todo.text}</Completed>
                : todo.text
            }
            <RemoveTodo src={trashIco} onClick={() => removeTodo(todo.id)} />
        </div>
    );

export default TodoItem;