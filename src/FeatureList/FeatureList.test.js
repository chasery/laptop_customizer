import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FeatureList from "./FeatureList";

describe("FeatureList component", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<FeatureList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
