import React, { Component } from "react";
import Table from "../../common/table";

 

class UsersTable extends Component {
  columns = [
    {    path: "name",    label: "name",}, 
    { path: "email", label: "Email" },
    { path: "address", label: "Address" },
  ];

  state ={
    open:false
  }

  deleteColumn = {
    key: "delete",
    content: data => (
      <button
        onClick={() => {}}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  };

  componentDidMount() {
    this.columns.push(this.deleteColumn);
  }
  
  render() {
    const { enquiries, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={enquiries}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;