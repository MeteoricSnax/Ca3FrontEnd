import React, { Component } from 'react';
import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import facade from './apiFacade';

const columns = [{
    dataField: 'name',
    text: 'Name',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'height',
    text: 'Height',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'mass',
    text: 'Mass',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'hair_color',
    text: 'Hair Color',
    sort: true
  }, {
    dataField: 'gender',
    text: 'Gender'
  }];

class AppClientPagination extends Component {
    state = { persons: [], msg: "" }
    async componentDidMount() {
        console.time("fetching");
        this.setState({ msg: "Loading..." });
        const persons = await facade.fetchTableData();
        console.timeEnd("fetching");
        console.time("rendering");
        this.setState({ persons, msg: "" });
    }

    componentDidUpdate() {
        console.timeEnd("rendering");
    }

    render() {
        return <div className="container">
            <h2>Clientside Pagination</h2>
            <BootstrapTable bootstrap4={true} keyField='name' data={this.state.persons} columns={columns} filter={ filterFactory() } pagination={ paginationFactory() } />
        </div>
    }
}

export default AppClientPagination;