import { Todo } from '../types/Todo';

type SetTodoAction = {
  type: 'todos/SET';
  payload: Todo[];
};

const setTodos = (todos: Todo[]): SetTodoAction => ({
  type: 'todos/SET',
  payload: todos,
});

const todosReducer = (todos: Todo[] = [], action: SetTodoAction): Todo[] => {
  switch (action.type) {
    case 'todos/SET':
      return action.payload;

    default:
      return todos;
  }
};

export default todosReducer;
export const actions = { setTodos };
