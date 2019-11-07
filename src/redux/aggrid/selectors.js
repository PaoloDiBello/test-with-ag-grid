import { createSelector } from "reselect";

const selectAggridState = state => state.aggrid;

export const selectRowData = createSelector(
  [selectAggridState],
  aggrid => aggrid.rowData
);

export const selectColumnDefs = createSelector(
  [selectAggridState],
  aggrid => aggrid.columnDefs
);
