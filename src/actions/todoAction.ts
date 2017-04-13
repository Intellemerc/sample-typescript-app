import TodoItem from '../models/todoItemModel';
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('TODO');
export const addTodo = actionCreator<TodoItem>('ADD');
export const removeTodo = actionCreator<number>('REMOVE');
export const toggleCompleted = actionCreator<number>('TOGGLE_COMPLETED');
