import React from "react";

interface Props {
  searchChanged: (to: string[]) => void;
}

interface State {
  terms: string[];
  currentTerm: string;
}

export default class SearchBar extends React.Component<Props, State> {
  state: State = { terms: [], currentTerm: "" };
  public render = () => (
    <div className="SearchBar">
      <input
        onChange={e => {
          this.setState({ currentTerm: e.target.value });
          this.props.searchChanged([
            this.state.currentTerm,
            ...this.state.terms
          ]);
        }}
        value={this.state.currentTerm}
        onKeyPress={e => {
          if (e.key === "Enter") {
            const terms = [...this.state.terms, this.state.currentTerm];
            this.setState({ terms, currentTerm: "" });
            this.props.searchChanged([
              this.state.currentTerm,
              ...this.state.terms
            ]);
          }
        }}
      />
        {this.state.terms.map((t, i) => (
          <div
          className="term"
            key={i}
            onClick={() => {
              let a = this.state.terms;
              a.splice(i, 1);
              this.setState({ terms: a });
              this.props.searchChanged([
                this.state.currentTerm,
                ...this.state.terms
              ]);
            }}
          >
            {t}
          </div>
        ))}
    </div>
  );
}
