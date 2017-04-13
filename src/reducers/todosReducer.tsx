import {Action} from 'redux';
import todoItem from '../models/todoItem';

const initialState: todoItem[] = [
  {
    id: 0,
    text: 'Use Redux',
    completedDate: undefined,
    created: new Date()
  },
  {
    id: 0,
    text: 'Use Redux',
    completedDate: new Date(),
    created: new Date()
  }
];

export default function todos(state: todoItem[] = initialState, action: Action) {
    return state;
}