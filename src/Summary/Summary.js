import React from "react";
import SummaryOption from "../SummaryOption/SummaryOption";
import SummaryTotal from "../SummaryTotal/SummaryTotal";

class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <SummaryOption
          key={featureHash}
          feature={feature}
          selectedOptionName={selectedOption.name}
          selectedOptionCost={selectedOption.cost}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <SummaryTotal selected={this.props.selected} />
      </section>
    );
  }
}

Summary.defaultProps = {
  features: [],
  selected: [],
};

export default Summary;
