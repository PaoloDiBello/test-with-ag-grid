import agGridActions from "./actions";

const columnDefs = [
  {
    headerName: "Make",
    field: "make",
    sortable: true,
    filter: true,
    editable: true,
    checkboxSelection: true
  },
  {
    headerName: "Model",
    field: "model"
  },
  {
    headerName: "Price",
    field: "price"
  }
];

const initState = {
  columnDefs,
  rowData: [] // for row data
};

export default function agGridReducer(state = initState, action) {
  //const rowData = state.rowData;

  switch (action.type) {
    case agGridActions.GET_ROW_DATA_SUCCESS:
      return {
        ...state,
        rowData: action.payload
      };

    case agGridActions.GET_ROW_DATA_FAILED:
      return {
        ...state,
        rowData: []
      };

    default:
      return state;
  }
}
