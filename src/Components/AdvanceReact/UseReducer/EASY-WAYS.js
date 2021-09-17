import React, { useReducer } from "react";
const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREAMENT:
      return { count: state.count + 1 };
      break;
    case DECREAMENT:
      return { count: state.count - 1 };
    default:
      break;
  }
};
const ReducerTodos = () => {
  // way no-1
  // const [{ count }, dispatch] = useReducer(reducer, { count: 0 });
  // way no-2
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: INCREAMENT })}>+</button>
      <button onClick={() => dispatch({ type: DECREAMENT })}>-</button>

      <p>
        {
          //way no-1
          /* count  */
          /* way no-2 */
          state.count
          //this  means the down example
          // state = {
          //   count: 0,
          // };
          //state.count actually is accessing the count value and we created an object of the
          //state which is count and it holds  a value of 0
          /* NOTE: */
          //the state of the hook near dispatch and state of a reducer function near
          // action they are accessible with each other and they can also the count
          //while
          // the action access the data of the dispatch
        }
      </p>
    </div>
  );
};

export default ReducerTodos;
