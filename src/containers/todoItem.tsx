import * as React from 'react';
import styled from 'styled-components';

import TodoItemModel from '../models/todoItemModel';

const Completed = styled.span`
    text-decoration: line-through;
`;

interface Props {
    todo: TodoItemModel;
    toggleCompleted: (id: string) => void;
}
const TodoItem = ({todo, toggleCompleted}: Props) => (
            <div>
                <input type="checkbox" checked={!!todo.completed} onChange={toggleCompleted.bind(null, todo.id)}/> 
                - {todo.completed ? 
                        <Completed>{todo.text}</Completed> 
                        : todo.text
                    }
            </div>
);

export default TodoItem;