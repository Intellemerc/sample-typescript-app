import todoItem from './models/todoItemModel';

export interface AppState {
    app: {
        todos: todoItem[]
    };
}