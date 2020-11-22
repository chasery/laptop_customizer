import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem";
import slugify from "slugify";
import "./FeatureGroup.css";

class FeatureGroup extends React.Component {
  render() {
    const options = this.props.featureOptions.map((option) => {
      const { feature, selected, updateFeature, USCurrencyFormat } = this.props;
      const itemHash = slugify(JSON.stringify(option));

      return (
        <FeatureItem
          key={itemHash}
          feature={feature}
          item={option}
          itemHash={itemHash}
          selected={selected}
          updateFeature={updateFeature}
        />
      );
    });

    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

FeatureGroup.defaultProps = {
  featureOptions: [],
  selected: [],
};

export default FeatureGroup;
