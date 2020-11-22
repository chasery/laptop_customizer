import React from "react";
import { USCurrencyFormat } from "../USCurrencyFormat";
import "./SummaryOption.css";

class SummaryOption extends React.Component {
  render() {
    const { feature, selectedOptionName, selectedOptionCost } = this.props;
    return (
      <div className="summary__option">
        <div className="summary__option__label">{feature}</div>
        <div className="summary__option__value">{selectedOptionName}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOptionCost)}
        </div>
      </div>
    );
  }
}

export default SummaryOption;
