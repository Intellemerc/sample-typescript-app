import todoItem from './models/todoItem';

export interface AppState {
    app: {
        todos: todoItem[]
    };
}