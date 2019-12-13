import React from "react";
import data from "../data";

interface Props {
  searchTerms: string[];
}

export default class ExerciseList extends React.Component<Props> {
  public render = () => (
    <div className="ExerciseList">
      {this.contentValues().map((v, i) => (
        <div className="Exercise" key={i}>
          <div>
            {v.exercise} opg{v.index + 1}
          </div>
          <div>{v.text}</div>
        </div>
      ))}
    </div>
  );

  private contentValues = () => {
    let results: Array<{ exercise: string; index: number; text: string }> = [];
    Object.keys(data).forEach(fileKey => {
      if (results.length > 50) return;
      const file = data[fileKey];
      file.forEach((val, index) => {
        if (results.length > 50) return;
        if (this.props.searchTerms.every(s => val.includes(s))) {
          results.push({ exercise: fileKey, index, text: val });
        }
      });
    });
    return results;
  };
}
