import { ADD_TASK } from '../constants';

export default addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});