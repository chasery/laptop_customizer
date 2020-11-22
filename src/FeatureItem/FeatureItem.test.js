import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FeatureItem from "./FeatureItem";

describe("FeatureItem component", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<FeatureItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
