import React from "react";
import "./App.css";
import { FilterCodeEditor } from "./FilterCodeEditor";
import { SortCodeEditor } from "./SortFuncCodeEditor";
import { InfoTable } from "./InfoTable";

import defaultFilter, { DefaultFilterCodeAsString } from "./FilterDefaultValue";
import defaultSortingFunc, { DefaultSortFuncAsString } from "./SortingDefault";
import { IPerson } from "./IPerson";

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      filterFunc: defaultFilter,
      sortingFunc: defaultSortingFunc,
      savedFilterCode: DefaultFilterCodeAsString,
      savedSortingCode: DefaultSortFuncAsString,
    };
  }

  onSaveFilterCode = (
    newCode: string,
    filterFunc: (person: IPerson) => boolean
  ) => {
    this.setState({ savedFilterCode: newCode, filterFunc: filterFunc });

    this.forceUpdate();
  };

  showFilterError = () => {
    alert("filter error");
  };

  showSortError = () => {
    alert("sort error");
  };

  onSaveSortingCode = (
    newCode: string,
    sortingFunc: (p1: IPerson, p2: IPerson) => number
  ) => {
    this.setState({ savedSortingCode: newCode, sortingFunc: sortingFunc });

    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <h1>user freedom</h1>
        <h4>for sorting and filtering items</h4>

        <FilterCodeEditor
          code={this.state.savedFilterCode}
          onSave={this.onSaveFilterCode}
          buttonName="Edit filter"
          showError={this.showFilterError}
        ></FilterCodeEditor>

        <SortCodeEditor
          code={this.state.savedSortingCode}
          onSave={this.onSaveSortingCode}
          buttonName="Edit sort order"
          showError={this.showSortError}
        ></SortCodeEditor>

        <InfoTable
          filterFunc={this.state.filterFunc}
          sorterFunc={this.state.sortingFunc}
          showFilterError={this.showFilterError}
          showSortError={this.showSortError}
        />
      </div>
    );
  }
}

export interface AppProps {}
export interface AppState {
  filterFunc: (person: IPerson) => boolean;
  sortingFunc: (p1: IPerson, p2: IPerson) => number;
  savedFilterCode: string;
  savedSortingCode: string;
}
