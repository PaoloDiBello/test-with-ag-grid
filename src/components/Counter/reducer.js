export default function reducer(state, action) {
  //const rowData = state.rowData;

  function getRandomValueInArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "DO_SOMETHING_BAD":
      return {
        ...state,
        bad: getRandomValueInArray(action.payload)
      };

    default:
      return state;
  }
}

export const initialState = {
  bad: "non@"
};
