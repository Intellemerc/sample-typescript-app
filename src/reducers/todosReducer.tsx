import { Action } from 'redux';
import { isType } from 'typescript-fsa';

import todoItemModel from '../models/todoItemModel';
import { addTodo, removeTodo, toggleCompleted } from '../actions/todoAction';
import * as uuid from 'uuid';

const initialState: todoItemModel[] = [
  {
    id: uuid(),
    text: 'Use Redux',
    completed: false,
    created: new Date()
  }
];

export default function todos(state: todoItemModel[] = initialState, action: Action) {
  if (isType(action, toggleCompleted)) {
    return state.map( 
                    itm => itm.id === action.payload ?
                          {...itm, completed: !itm.completed} : itm
    );
  } else if (isType(action, addTodo)) {
    if (action.payload !== '') {
      return [
        ...state,
        {
          id: uuid(),
          text: action.payload,
          completed: false,
          created: new Date()
        }
      ];
    }
  } else if (isType(action, removeTodo)) {
    if (action.payload !== '') {
      const idx = state.findIndex(itm => itm.id === action.payload);
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ];
    }
  }
  return state;
}