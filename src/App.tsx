import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ExerciseList from "./components/ExerciseList";

interface State {
  searchTerms: string[];
}

export default class App extends React.Component<{}, State> {
  state: State = { searchTerms: [] };
  public render = () => (
    <div className="App">
      <SearchBar
        searchChanged={searchTerms => this.setState({ searchTerms })}
      />
      <ExerciseList searchTerms={this.state.searchTerms} />
    </div>
  );
}
