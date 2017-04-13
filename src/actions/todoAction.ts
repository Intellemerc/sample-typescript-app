import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('TODO');
export const addTodo = actionCreator<string>('ADD');
export const removeTodo = actionCreator<string>('REMOVE');
export const toggleCompleted = actionCreator<string>('TOGGLE_COMPLETED');
