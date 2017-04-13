import TodoItem from '../models/todoItem';
import { ActionCreator } from 'redux';

import { Action } from './ActionTypes';

export const addTodo: ActionCreator<Action<TodoItem>> = (todo: TodoItem) => ({
        type: 'ADD_TODO',
        payload: todo
});

export const removeTodo: ActionCreator<Action<number>> = (todoId: number) => ({
        type: 'REMOVE_TODO',
        payload: todoId
});