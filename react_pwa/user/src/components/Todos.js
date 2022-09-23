import { useEffect } from "react";

import { deleteTodo, getAllTodos } from "../redux/actions/index";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type";

import { useDispatch, useSelector } from "react-redux";

// component
import Todo from "./Todo";
import Tabs from "./Tabs";

export const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    }
  };

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <article>
          <div className="container-btn">
            <Tabs currentTab={currentTab} />
          </div>
          <br />
          <div>
            <ul>
              {getTodos().map((todo) => (
                <Todo key={todo._id} todo={todo} />
              ))}
            </ul>
          </div>

          <div>
            <button onClick={removeDoneTodos} className="button clear">
              Delete done task
            </button>

          </div>
        </article>
      </div>
    </div>
  );
};

export default Todos;
