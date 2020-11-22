import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FeatureGroup from "./FeatureGroup";

describe("FeatureGroup component", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<FeatureGroup />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
