const videosActions = {
  GET_ROW_DATA: "GET_ROW_DATA",
  GET_ROW_DATA_SUCCESS: "GET_ROW_DATA_SUCCESS",
  GET_ROW_DATA_FAILED: "GET_ROW_DATA_FAILED",

  getRowData: () => {
    return async (dispatch, getState) => {
      const result = await fetch("https://api.myjson.com/bins/15psn9");
      const rowData = await result.json();

      if (rowData) {
        dispatch({
          type: videosActions.GET_ROW_DATA_SUCCESS,
          payload: rowData
        });
      } else {
        dispatch({
          type: videosActions.GET_ROW_DATA_FAILED
        });
      }
    };
  }
};

export default videosActions;
