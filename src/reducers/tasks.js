import { ADD_TASK } from '../constants';

const TASKS = [
  {
    id: 1,
    text: 'Make coffee',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Make sandwich',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Learn Redux',
    isCompleted: false
  },
]

const tasks = (state = TASKS, { id, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id,
          text,
          isCompleted
        }
      ];
    default:
      return state;
  }
}

export default tasks;