import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TodoItemModel from '../models/todoItemModel';
import { AppState } from '../AppState';
import { addTodo, removeTodo, toggleCompleted } from '../actions/todoAction';
import TodoItem from './todoItem';

const AddTodoContainer = styled.div`
    padding: 15px;
    border: 1px solid black;
    width: 400px;
    margin: 15px auto;

`;

interface Props {
    todos: TodoItemModel[];
    addTodo: (todo: string) => void;
    toggleCompleted: (id: string) => void;
};
const TodoContainer = ( {todos, addTodo, toggleCompleted}: Props) => {
  let todoTextField: HTMLInputElement;
  return (
    <div>
      <AddTodoContainer>
        <div>Add Todo</div>
        <input type="input" ref={ref => todoTextField = ref} />
        <button onClick={() => addTodo(todoTextField.value )} >Add</button>
      </AddTodoContainer>
      {todos.map(itm => <TodoItem key={itm.id} todo={itm} toggleCompleted={toggleCompleted}/>)}
    </div>
  );
};

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