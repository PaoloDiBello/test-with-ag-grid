import React, { Component } from "react";
import "./AgGrid.scss";
import { AgGridReact } from "ag-grid-react";
import agGridActions from "../../redux/aggrid/actions";
import { connect } from "react-redux";
const { getRowData } = agGridActions;

class AgGrid extends Component {
  componentDidMount() {
    this.props.getRowData();
  }

  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + " " + node.model)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
    this.gridApi.deselectAll();
  };

  handleClick2 = e => {
    console.log("this.gridApi", this.gridApi);
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "100vh",
          width: "100vw"
        }}
      >
        <button onClick={this.handleClick2} className="btn orange">
          Save
        </button>

        <button onClick={this.onButtonClick} className="btn green">
          Get selected rows
        </button>
        <AgGridReact
          onGridReady={params => (this.gridApi = params.api)}
          rowSelection="multiple"
          columnDefs={this.props.columnDefs}
          rowData={this.props.rowData}
        ></AgGridReact>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rowData: state.aggrid.rowData,
  columnDefs: state.aggrid.columnDefs
});

const mapDispatchToProps = {
  getRowData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgGrid);
