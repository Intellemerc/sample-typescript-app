import {Action} from 'redux';
import {isType} from 'typescript-fsa';

import todoItemModel from '../models/todoItemModel';
import {toggleCompleted} from '../actions/todoAction';

const initialState: todoItemModel[] = [
  {
    id: 0,
    text: 'Use Redux',
    completed: false,
    created: new Date()
  },
  {
    id: 1,
    text: 'Use Redux',
    completed: true,
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
    }
    return state;
}