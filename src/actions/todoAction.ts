import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('TODO');
/**
 * Makes action creation in format of
 * {
 *     type: "TODO/ADD",
 *     payload: 'String to add'
 * }
 */
export const addTodo = actionCreator<string>('ADD');
export const removeTodo = actionCreator<string>('REMOVE');
export const toggleCompleted = actionCreator<string>('TOGGLE_COMPLETED');
