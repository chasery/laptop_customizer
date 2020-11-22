import React from "react";
import { USCurrencyFormat } from "../USCurrencyFormat";
import slugify from "slugify";
import "./FeatureItem.css";

class FeatureItem extends React.Component {
  render() {
    const { feature, item, itemHash, selected, updateFeature } = this.props;

    return (
      <div className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={feature ? slugify(feature) : ""}
          checked={item.name === selected[feature].name}
          onChange={(e) => updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

FeatureItem.defaultProps = {
  feature: "",
  selected: {
    "": {
      name: "",
      cost: null,
    },
  },
  item: {
    name: "",
    cost: null,
  },
};

export default FeatureItem;
