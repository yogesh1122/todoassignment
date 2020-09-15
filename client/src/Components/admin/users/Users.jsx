import React, { Component } from "react";
import UsersTable from "./UsersTable";
import { getEnquiries } from "../../services/mainService";
import SearchBox from "../../common/SearchBox";
import { paginate } from "../../utils/paginate";
import Pagination from "../../common/pagination";
import _ from "lodash";
import styled from "styled-components";


const Container  = styled.div`
margin:100px;
`

class Users extends Component {
  state = {
    enquiries: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 8,
    sortColumn: { path: "", order: "" },
    count:1
  };

  async componentDidMount() {
    const { pageSize, currentPage }= this.state;
    const { users } = await getEnquiries();
    this.setState({ enquiries:users });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleDelete = async (book) => {
    const books = this.props.books.filter((m) => m._id !== book._id);
  };

 
  render() {
    let { enquiries } = this.state;
    let {
      sortColumn,
      searchQuery,
      currentPage,
      pageSize, 
      count
    } = this.state;

 
    // filter data
    let filtered = enquiries;
    if (searchQuery)
      filtered = enquiries.filter(
        (m) =>
          m.firstName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 ||
          m.email.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 
      );

    //sort data
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const allEnquiries = paginate(sorted, currentPage, pageSize);
 
    return (
      <Container>
          <h1 style={{ textAlign:"center", color:"#595956" }}>Users List</h1> 
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <div className="d-flex flex-direction flex-row justify-content-center">
          <UsersTable
            enquiries={allEnquiries}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </Container>
    );
  }
}

 
export default Users;
