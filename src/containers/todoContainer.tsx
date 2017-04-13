import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoItemModel from '../models/todoItem';
import { AppState } from '../AppState';
import { addTodo, removeTodo } from '../actions/todoAction';
import TodoItem from './todoItem';

interface Props {
    todos: TodoItemModel[];
};
const TodoContainer = ( {todos}: Props) => (
  <div>
    {todos.map(itm => <TodoItem todo={itm}/>)}
  </div>
);

const mapStateToProps = (state: AppState) => ({
  todos: state.app.todos
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return bindActionCreators({addTodo, removeTodo}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);