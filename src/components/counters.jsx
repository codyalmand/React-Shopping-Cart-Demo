import React, { Component } from "react";
import Counter from "./counter";
import Total from "./total";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      total,
      onRestart
    } = this.props;
    return (
      <div>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
        <button
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0 ? "disabled" : ""}
        >
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>

        <Total
          value={total}
        />
      </div>
    );
  }
}

export default Counters;
