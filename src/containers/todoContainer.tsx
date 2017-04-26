import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ActionCreator } from 'typescript-fsa';

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

interface StateProps {
  todos: TodoItemModel[];
}

interface DispatchProps {
  addTodo: ActionCreator<string>;
  removeTodo: ActionCreator<string>;
  toggleCompleted: ActionCreator<string>;
}

const TodoContainer: (props: ExternalProps & StateProps & DispatchProps) => JSX.Element =
  ({ todos, addTodo, toggleCompleted, removeTodo, PersonsName }) => {
    let todoTextField: HTMLInputElement;
    const submit = (event: any) => {
      addTodo(todoTextField.value);
      todoTextField.value = '';
      event.preventDefault();
    };
    return (
      <TodoListBox>
        <div>
          <div>Add Todo to {PersonsName}'s List</div>
          <form onSubmit={submit}>
            <input type="input" ref={ref => todoTextField = ref} />
            <input type="submit" value="Submit" />
          </form>
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

const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.app.todos
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchProps => {
  return bindActionCreators(
    {
      addTodo,
      removeTodo,
      toggleCompleted
    },
    dispatch
  );
};

export default connect<StateProps, DispatchProps, ExternalProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);

/**
 * Simplier Version
 */
/*
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
*/