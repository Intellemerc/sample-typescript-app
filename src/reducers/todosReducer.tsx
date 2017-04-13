import { Action } from 'redux';
import { isType } from 'typescript-fsa';

import todoItemModel from '../models/todoItemModel';
import { addTodo, toggleCompleted } from '../actions/todoAction';
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
    return state.map(itm => itm.id === action.payload ?
      {
        ...itm,
        completed: !itm.completed
      } :
      itm
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
  }
  return state;
}