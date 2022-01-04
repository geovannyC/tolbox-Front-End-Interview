const initialState = {
  isLogin: 0,
};
const data = {
  dataWord: [],
};
// manejo de estados de redux
export const reducerTest = (state = initialState, action) => {
  if (action.type === "CHANGE_LOGIN") {
    return {
      ...state,
      isLogin: action.payload.isLogin,
    };
  }

  return state;
};
export const reducerDataWords = (state = data, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        data: state.dataWord.push(action.payload.dataWord),
      };
    case "DECREMENT":
      return {
        ...state,
        data: state.dataWord.pop(),
      };

    default:
      return state;
  }
};
