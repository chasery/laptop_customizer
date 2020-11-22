import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SummaryOption from "./SummaryOption";

describe("SummaryOption component", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<SummaryOption />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
