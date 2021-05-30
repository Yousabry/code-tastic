import * as React from "react";
import { Table } from "react-bootstrap";
import { IPerson } from "./IPerson";
import data from "./randomData.json";

export class InfoTable extends React.Component<InfoTableProps, InfoTableState> {
  constructor(props: InfoTableProps) {
    super(props);
    this.state = {
      currentList: data,
    };
  }

  getFilteredList = (): IPerson[] => {
    return data.filter(this.props.filterFunc);
  };

  getSortedList = (): IPerson[] => {
    return data.filter(this.props.filterFunc);
  };

  render() {
    // List starts off full and in random order
    let myList: IPerson[] = data;

    // Try to use user provided function to filter list
    try {
      myList = this.getFilteredList();
    } catch (err) {
      console.error(err);
      this.props.showFilterError();
    }

    // Try to use user provided function to sort list
    try {
      myList = myList.sort(this.props.sorterFunc);
    } catch (err) {
      console.error(err);
      this.props.showSortError();
    }

    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>active</th>
            <th>balance</th>
            <th>age</th>
            <th>eye color</th>
            <th>name</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {myList.map((person: IPerson) => {
            return (
              <tr key={person._id}>
                <td>{person._id}</td>
                <td>{person.isActive ? "yes" : "no"}</td>
                <td>{person.balance}</td>
                <td>{person.age}</td>
                <td>{person.eyeColor}</td>
                <td>{person.name}</td>
                <td>{person.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export interface InfoTableProps {
  filterFunc: (person: IPerson) => boolean;
  sorterFunc: (p1: IPerson, p2: IPerson) => number;
  showFilterError: () => void;
  showSortError: () => void;
}
export interface InfoTableState {
  currentList: IPerson[];
}
