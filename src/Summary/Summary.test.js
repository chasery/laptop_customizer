import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Summary from "./Summary";

describe("Summary component", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<Summary />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
