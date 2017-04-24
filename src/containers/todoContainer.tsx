import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TodoItemModel from '../models/todoItemModel';
import { AppState } from '../AppState';
import { addTodo, removeTodo, toggleCompleted } from '../actions/todoAction';
import TodoItem from './todoItem';

const TodoListBox = styled.div`
    padding: 15px;
    border: 1px solid black;
    width: 50%;
    margin: 15px auto;
`;

interface ExternalProps {
  PersonsName: string;
}

interface StoreProps extends ExternalProps {
  todos: TodoItemModel[];
  addTodo: (todo: string) => any;
  removeTodo: (id: string) => any;
  toggleCompleted: (id: string) => any;
};

const TodoContainer = ({ todos, addTodo, toggleCompleted, removeTodo, PersonsName }: StoreProps) => {
  let todoTextField: HTMLInputElement;
  return (
    <TodoListBox>
      <div>
        <div>Add Todo to {PersonsName}'s List</div>
        <input type="input" ref={ref => todoTextField = ref} />
        <button onClick={() => { addTodo(todoTextField.value); todoTextField.value = ''; }} >Add</button>
      </div>
      <div>
        {todos.map(itm => 
                    (
                      <TodoItem 
                        key={itm.id} 
                        todo={itm} 
                        toggleCompleted={toggleCompleted} 
                        removeTodo={removeTodo} 
                      />
                    )
        )}
      </div>
    </TodoListBox>
  );
};

const mapStateToProps = (state: AppState) => ({
  todos: state.app.todos
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
  return bindActionCreators({ addTodo, removeTodo, toggleCompleted }, dispatch);
};

export default connect<{}, {}, ExternalProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);