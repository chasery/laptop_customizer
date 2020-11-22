import React from "react";
import FeatureGroup from "../FeatureGroup/FeatureGroup";
import "./FeatureList.css";

class FeatureList extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const {
        features,
        selected,
        updateFeature,
        USCurrencyFormat,
      } = this.props;
      const featureHash = feature + "-" + idx;

      return (
        <FeatureGroup
          key={featureHash}
          featureOptions={features[feature]}
          feature={feature}
          selected={selected}
          updateFeature={updateFeature}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

FeatureList.defaultProps = {
  features: [],
  selected: [],
};

export default FeatureList;
