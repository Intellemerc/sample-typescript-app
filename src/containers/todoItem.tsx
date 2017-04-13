import * as React from 'react';

import TodoItemModel from '../models/todoItem';

interface Props {
    todo: TodoItemModel;
}
const TodoItem = ({todo}: Props) => (
            <div>
                <input type="checkbox" checked={!!todo.completedDate} /> - {todo.text}
            </div>
);

export default TodoItem;