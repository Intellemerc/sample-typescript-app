import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoItemModel from '../models/todoItemModel';
import { AppState } from '../AppState';
import { addTodo, removeTodo, toggleCompleted } from '../actions/todoAction';
import TodoItem from './todoItem';

interface Props {
    todos: TodoItemModel[];
    addTodo: (todo: TodoItemModel) => void;
    toggleCompleted: (id: number) => void;
};
const TodoContainer = ( {todos, addTodo, toggleCompleted}: Props) => (
  <div>
    {todos.map(itm => <TodoItem key={itm.id} todo={itm} toggleCompleted={toggleCompleted}/>)}
  </div>
);

const mapStateToProps = (state: AppState) => ({
  todos: state.app.todos
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return bindActionCreators({addTodo, removeTodo, toggleCompleted}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);