import React, { Component } from "react";
import "./App.scss";
import { AgGridReact } from "ag-grid-react";
import agGridActions from "./redux/aggrid/actions";
import { connect } from "react-redux";
import Form from "./Form";
const { getRowData } = agGridActions;

class App extends Component {
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

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "100vh",
          width: "100vw"
        }}
      >
        <Form />
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
)(App);
